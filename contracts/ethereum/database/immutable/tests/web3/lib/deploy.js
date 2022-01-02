const fs = require('fs');
const path = require('path');
const Web3 = require('web3');
const HDWalletProvider = require("@truffle/hdwallet-provider");

const gaspriceInGWei = 50;
const args = getArgs();

async function deploy(contract, secrets) {

  /*
   * build web3 client
   */
  const localKeyProvider = new HDWalletProvider({
    privateKeys: [secrets.private],
    providerOrUrl: secrets.endpoint,
  });
  const web3 = new Web3(localKeyProvider);

  /* 
   * get account for related secrets.private
   */
  const account = web3.eth.accounts.privateKeyToAccount(secrets.private);

  /*
   * build contract from ABI
   */
  const contractsBuildPath = path.join(__dirname, '../../../build');
  const data = fs.readFileSync(contractsBuildPath + "/" + contract + ".json", 'utf8');
  const contractJsonFile = JSON.parse(data);
  const myContract = new web3.eth.Contract(contractJsonFile.abi)
    .deploy({
      data: contractJsonFile.bytecode,
      arguments: []
    });

  /*
   * deploy contract
   */
  console.log(" ###  DEPLOYING " + contract + " to network " + secrets.endpoint + " using ACCOUNT " + account.address);
  return await (new Promise(resolve => {
    myContract
      .send({
        from: account.address,
        gas: 500000,
        gasPrice: gaspriceInGWei * 10 * 10 ** 8
      }, async function (error, transactionHash) {
        if (error) {
          console.log(" #### ERROR : ", error);
        }
        else {
          await (new Promise(resolve => {
            const checkTransaction = setInterval(() => {
              web3.eth.getTransactionReceipt(transactionHash, (error, result) => {
                if (result && result.contractAddress && result.cumulativeGasUsed) {
                  clearInterval(checkTransaction);
                  resolve(result.contractAddress)
                } else {
                  process.stdout.write(".")
                }
              });
            }, 1000)
          })).then(contractAddress => { localKeyProvider.engine.stop(); resolve(contractAddress); });
        }
      });
  }));
}

function getArgs() {
  const args = process.argv.slice(2);
  let params = {};

  args.forEach(a => {
    const nameValue = a.split("=");
    params[nameValue[0]] = nameValue[1];
  });

  return params;
}

if (require.main == module) {
  (async () => {
    await deploy('BWS_DatabaseImmutable').then(contractAddress => { console.log(" #### Contract created at: ", contractAddress) });
  })();
}

module.exports = deploy;

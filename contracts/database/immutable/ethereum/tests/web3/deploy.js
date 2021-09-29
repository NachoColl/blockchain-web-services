const fs = require('fs');
const path = require('path');
const Web3 = require('web3');
const HDWalletProvider = require("@truffle/hdwallet-provider");

const args = getArgs();
const gaspriceInGWei = 50;

async function deploy(contract, configJson){

  var config = configJson;
  if (!config){
    let configFile = fs.readFileSync(path.join(__dirname, 'config.json'));
    config = JSON.parse(configFile).local;
  }

  const localKeyProvider = new HDWalletProvider({
    privateKeys: [config.private],
    providerOrUrl: config.network,
  });
  const web3 = new Web3(localKeyProvider);
  const account = web3.eth.accounts.privateKeyToAccount(config.private);

  contractToDeploy = contract || args.contract;
  
  const contractsBuildPath= path.join(__dirname, '../../build');
  const data = fs.readFileSync(contractsBuildPath + "/" + contractToDeploy + ".json", 'utf8'); 
  const contractJsonFile = JSON.parse(data);
  const myContract = new web3.eth.Contract(contractJsonFile.abi)
    .deploy({
      data: contractJsonFile.bytecode,
      arguments: []
    });

  console.log(" ###  DEPLOYING " + contractToDeploy + " to network " + config.network + " using ACCOUNT " + account.address);
  return await (new Promise(resolve => {   
    
    myContract
      .send({
        from: account.address,
        gas: 500000,
        gasPrice:  gaspriceInGWei*10*10**8
      }, async function(error, transactionHash){
        if (error){
          console.log(" #### ERROR : ", error);
        }
        else {
          await (new Promise(resolve => {
              const  checkTransaction = setInterval(()=>{
              web3.eth.getTransactionReceipt(transactionHash,(error,result)=>{
                if(result && result.contractAddress && result.cumulativeGasUsed){
                  clearInterval(checkTransaction);
                  resolve(result.contractAddress)
                }else{
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

if(require.main == module){
  (async () => {
    await deploy('DatabaseImmutableBytes32').then(contractAddress => { console.log(" #### Contract created at: ", contractAddress)});
  })();
}

module.exports = deploy;

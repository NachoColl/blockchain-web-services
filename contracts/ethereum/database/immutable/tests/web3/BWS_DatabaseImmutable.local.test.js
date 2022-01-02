const fs = require('fs');
const path = require('path');
const Web3 = require('web3');
const HDWalletProvider = require("@truffle/hdwallet-provider");

const deploy = require('./lib/deploy');

/* to use by tests */
var web3, localKeyProvider, contract, account;

jest.setTimeout(100000);

/* deploy and create contract object to interact with */
beforeAll(async () => {

  /* get config for network and account to use */
  let secretsFile = fs.readFileSync(path.join(__dirname, '../../../..', 'secrets.json'));
  let secrets = JSON.parse(secretsFile).local;


  /* deploys the contract and gets his address */
  var contractAddress;
  await deploy('BWS_DatabaseImmutable', secrets).then(contract => { console.log("contract address: ", contract); contractAddress = contract });

  /* init web3 object */
  localKeyProvider = new HDWalletProvider({
    privateKeys: [secrets.private],
    providerOrUrl: secrets.endpoint,
  });
  web3 = new Web3(localKeyProvider);
  account = web3.eth.accounts.privateKeyToAccount(secrets.private);

  /* create the web3 contract object */
  let contractFile = fs.readFileSync(path.join(__dirname, '../../build/BWS_DatabaseImmutable.json'));
  contract = new web3.eth.Contract(JSON.parse(contractFile).abi, contractAddress);
});

afterAll(async () => {
  await Promise.resolve().then(async function () {
    if (typeof localKeyProvider !== 'undefined') await localKeyProvider.engine.stop();
    localKeyProvider = null;
  });
});

test("insert ('row1','hello world')", async () => {
  await contract.methods.insertBytes32(web3.utils.toHex('id'), web3.utils.toHex('row1'), web3.utils.toHex('hello world')).send({ from: account.address }).then(function (result) {
    expect(true).toBe(true);
  });
});

test("select ('row1','hello world')", async () => {
  await contract.methods.selectBytes32(web3.utils.toHex('id'), web3.utils.toHex('row1')).call({ from: account.address }).then(function (result) {
    expect(web3.utils.toHex(web3.utils.hexToAscii(result))).toBe(web3.utils.toHex('hello world'));
  });
});
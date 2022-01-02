const fs = require('fs');
const path = require('path');
const Web3 = require('web3');
const HDWalletProvider = require("@truffle/hdwallet-provider");

const deploy = require('./lib/deploy');

/* to use by tests */
var web3, localKeyProvider, contract, account, secrets;

/* to use as the key for insert/select */
var insertKey;

jest.setTimeout(100000);

/* deploy and create contract object to interact with */
beforeAll(async () => {

  /* get config for network and account to use */
  let secretsFile = fs.readFileSync(path.join(__dirname, '../../../..', 'secrets.json'));
  secrets = JSON.parse(secretsFile).ropsten;

  /* check .deployed\ropsten contracts */
  var contractAddress = "0x2dB6Bbb6ff06D1fdC3c04705E1284dF99981D205";

  /* init web3 object */
  localKeyProvider = new HDWalletProvider({
    privateKeys: [secrets.private],
    providerOrUrl: secrets.endpoint,
  });
  web3 = new Web3(localKeyProvider);
  account = web3.eth.accounts.privateKeyToAccount(secrets.private);

  /* create the web3 contract object */
  let contractFile = fs.readFileSync(path.join(__dirname, '../../.deployed/ropsten/0x2dB6Bbb6ff06D1fdC3c04705E1284dF99981D205/BWS_DatabaseImmutable.json'));
  contract = new web3.eth.Contract(JSON.parse(contractFile).abi, contractAddress);

  insertKey = web3.utils.randomHex(32)

});

afterAll(async () => {
  await Promise.resolve().then(async function () {
    if (typeof localKeyProvider !== 'undefined') await localKeyProvider.engine.stop();
    localKeyProvider = null;
  });
});

test("estimageGas for (bwsId, insertKey,'hello world') < available gas", async () => {
  await web3.eth.getBalance(secrets.address).then(async function (balance) {
    await contract.methods.insertBytes32(web3.utils.soliditySha3Raw(secrets.bwsId), insertKey, web3.utils.toHex('hello world')).estimateGas({ from: account.address }).then(function (gasAmount) {
      expect(gasAmount).toBeLessThan(BigInt(balance));
    });
  });
});

test("insert (bwsId, insertKey,'hello world')", async () => {
  await contract.methods.insertBytes32(web3.utils.soliditySha3Raw(secrets.bwsId), insertKey, web3.utils.toHex('hello world')).send({ from: account.address }).then(function (result) {
    console.log(result);
    expect(true).toBe(true);
  });
});

test("select (bwsId, 'row1','hello world')", async () => {
  await contract.methods.selectBytes32(web3.utils.soliditySha3Raw(secrets.bwsId), insertKey).call({ from: account.address }).then(function (result) {
    console.log(result);
    expect(web3.utils.toHex(web3.utils.hexToAscii(result))).toBe(web3.utils.toHex('hello world'));
  });
});

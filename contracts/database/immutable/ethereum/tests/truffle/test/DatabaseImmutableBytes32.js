const DatabaseImmutableBytes32 = artifacts.require("DatabaseImmutableBytes32");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("DatabaseImmutableBytes32", async accounts => { 
  let instance;

  it("is deployed", async function () {
    instance = await DatabaseImmutableBytes32.deployed();
    assert.isTrue(true);     
  });

  it("insert ('row1','hello world')", async function () {  
    await instance.insertBytes32(web3.utils.toHex('id'), web3.utils.toHex('row1'), web3.utils.toHex('hello world')); 
    assert.isTrue(true);
  });

  it("get 'row1'", async function () {  
    const data = await instance.selectBytes32.call(web3.utils.toHex('id'), web3.utils.toHex('row1')); 
    assert.equal(web3.utils.toHex(web3.utils.hexToAscii(data)),web3.utils.toHex('hello world'));
  });


});

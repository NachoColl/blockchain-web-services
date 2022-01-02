# Blockchain Web Services ETHEREUM Contracts

ETHEREUM contracts you can call using Blockchain Web Services.

## Contracts List

### BWS_DatabaseImmutable

#### ropsten

Account owner: 0x9089Db83F0590EC2eD01A5Eb4F8584Dd6F4bDaC7

##### 0x2dB6Bbb6ff06D1fdC3c04705E1284dF99981D205

Deployed on 26th of December 2021

```sh
> transaction hash:    0xeae1902c7f69e5dec123260dfe45f435c9f7e96557e6593c57aedd93d04c6b7e
> Blocks: 1            Seconds: 16
> contract address:    0x2dB6Bbb6ff06D1fdC3c04705E1284dF99981D205
> block number:        11696646
> block timestamp:     1640539292
> account:             0x9089Db83F0590EC2eD01A5Eb4F8584Dd6F4bDaC7
> balance:             2.249522572766354875
> gas used:            329429 (0x506d5)
> gas price:           1.881800007 gwei
> value sent:          0 ETH
> total cost:          0.000619919494506003 ETH
```

```js
function insertBytes32(bytes32 identity, bytes32 key, bytes32 data) 
public 
onlyBy(owner)
{
  if (!myBytes32Table[identity][key].created){
    myBytes32Table[identity][key].created = true;
    myBytes32Table[identity][key].value = data;
  }
  else
    revert RowKeyInUse();
}
```

```js
function selectBytes32(bytes32 identity, bytes32 key) 
public view 
onlyBy(owner)
returns (bytes32)
{
  if (!myBytes32Table[identity][key].created)
    revert NoData();     
  return myBytes32Table[identity][key].value; 
}
```

## Build & Test

We use  [truffle](https://www.trufflesuite.com/docs/truffle/overview) to build and initial contract(s) tests. We also use [web3](https://web3js.readthedocs.io/en/v1.2.11/index.html#) for extra usage testing.

### Truffle

Run ```truffle develop``` to start environment and run ```test``` command.

You will get something like:

![Jest run example](.assets\images\truffle_test_results_example.jpg)

### Web3

To test web3 code we use [jest](https://jestjs.io/) and [Ganache](https://www.trufflesuite.com/ganache) as the local blockchain network

- Launch [Ganache](https://trufflesuite.com/docs/ganache/) and update ```config.json``` file with the account keys and the network variables you want to use,
- run ```npm install``` to get required dependencies (if not already done),
- and then just run ```jest``` command.

You should get something like:

![Jest run example](.assets\images\jest_test_results_example.jpg)

## Notes

### Configure secrets.json

In order to run/test smart contracts locally you need to configure the relevant secrets in ```secrets.json``` file. Check your local [Ganache](https://www.trufflesuite.com/ganache) setup.

```json
{
  "local": {
    "endpoint": "http://127.0.0.1:7545",
    "address": "0x2656811B4C0128CF5F03388493Ca2c2b2A6426A",
    "private": "4d6ca7a5259e6020b3094e63f9733004382f6f26d24d941ed1646d588a27b50",
    "mnemonic": "local advice wait monday tide bike regret circle uncle armed indoor sheriff"
  }
}
```

### Deployment

Check [deploying smart contracts with Truffle](https://medium.com/coinmonks/5-minute-guide-to-deploying-smart-contracts-with-truffle-and-ropsten-b3e30d5ee1e)
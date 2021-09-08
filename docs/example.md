# An Example

This is an example of some simple Blockchain Web Services API operations to interact with blockchain distributed database.

## database.immutable.INSERT

Inserts a string into the blockchain, as if you were using a table defined as (string(PK), string).

Please note that saved data will be immutable.

### Parameters

| name | type | max. lenght | description |
|------|------|--------|-------------|
| blockchain id | string | 10 | The blockchain we want to use (e.g. ETH).
| owner| address |  | The "database table" owner address.
| key | string || The table row key.
| data | string || The data to save into the blockchain "table".

### Result

As the operations interacting with blockchain networks may be asynchronous, the operation call returns a job id to use for later results fetch.

type | max. lenght | description |
------|--------|-------------|
string | 10 | Unique job id.

## database.immutable.SELECT

Gets the value for a specific key.

### Parameters

| name | type | max. lenght | description |
|------|------|--------|-------------|
| blockchain id | string | 10 | The blockchain to fetch (e.g. ETH). 
| owner| address |  | The "database table" owner address.
| key | string || The table row key.
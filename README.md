## Go Ethereum

Golang execution layer implementation of the Ethereum protocol.

[![API Reference](
https://pkg.go.dev/badge/github.com/ethereum/go-ethereum
)](https://pkg.go.dev/github.com/ethereum/go-ethereum?tab=doc)
[![Go Report Card](https://goreportcard.com/badge/github.com/ethereum/go-ethereum)](https://goreportcard.com/report/github.com/ethereum/go-ethereum)
[![Travis](https://app.travis-ci.com/ethereum/go-ethereum.svg?branch=master)](https://app.travis-ci.com/github/ethereum/go-ethereum)
[![Discord](https://img.shields.io/badge/discord-join%20chat-blue.svg)](https://discord.gg/nthXNEv)

Automated builds are available for stable releases and the unstable master branch. Binary
archives are published at https://geth.ethereum.org/downloads/.

## Building the source

Download

```shell
git clone git@github.com:xiaoyu1998/go-ethereum.git --recursive
git checkout v1.11.6
```

Building `geth`

```shell
make geth
```

## Running `geth`

#### Defining the private genesis state

```json
{

  "config": {
    "chainId":1998,
    "homesteadBlock": 0,
    "eip150Block": 0,
    "eip155Block": 0,
    "eip158Block": 0,
    "byzantiumBlock": 0,
    "constantinopleBlock": 0,
    "petersburgBlock": 0,
    "istanbulBlock": 0,
    "berlinBlock": 0,
    "londonBlock": 0
  },
  "nonce": "0x0000000000000042",
  "mixhash": "0x0000000000000000000000000000000000000000000000000000000000000000",
  "difficulty": "0x4000",
  "alloc": {
    "0x5aa3B6d49e2AAC9AD7c687C79A899AA6Db2e3cbf": {"balance": "1000000000000000000000000"}
  },
  "coinbase": "0x0000000000000000000000000000000000000000",
  "timestamp": "0x00",
  "parentHash": "0x0000000000000000000000000000000000000000000000000000000000000000",
  "extraData": "0x",
  "gasLimit": "0x1c9c380"
}
```
the chainId is 1998
The alloc public key should be the account to deploy contracts and run scripts
The gasLimit is 30,000,000(0x1c9c380) as same as the mainnet

#### Initialize `geth` node
```shell
./geth --datadir data init data/genesis.json
```
#### Create a miner account as --miner.etherbase in next command line
```shell
./geth --datadir data account new
```

#### Starting up your node
```shell
./geth --datadir data --http --http.addr=0.0.0.0 --http.port 8545 --http.corsdomain "*" --http.api "eth,net,web3,personal,txpool,debug,miner" --ws --ws.addr 0.0.0.0 --ws.port 8545 --ws.origins '*' --ws.api "eth,net,web3,personal,debug" --nodiscover --maxpeers 30 --networkid 1998 --port 30303 --mine --miner.threads 1 --miner.etherbase  "0x5aa3B6d49e2AAC9AD7c687C79A899AA6Db2e3cbf" 
```



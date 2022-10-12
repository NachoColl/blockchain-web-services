<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.4.0/styles/atom-one-dark.min.css">


<div style="position: fixed; top: 10px; left: 10px; border: 0;"> White Paper
</div>

<br/>
(version under construction)
<br/>

## Abstract

Blockchain Web Services is a Smart Contract Unified API to enable companies and developers to consume blockchain solutions as they are currently used to. We aim to help companies build blockchain applications and embrace the blockchain revolution by removing infrastructure complexities from creative workflows.

We envision millions of developers and companies' applications calling Blockchain Web Services Unified API as the gateway point for Smart Contracts running on a blockchain. In addition, Blockchain Web Services Marketplace will reward Smart Contracts devs when publishing their solutions into the marketplace.

On the economics, sustainability, and growth, Blockchain Web Services token is the instrument used to fund the platform and reward the Blockchain Web Services community. It is purchased and consumed by Companies calling the Unified API, while developers get rewards from companies consuming their solutions.

<p align="center">
  <img src="img/BWS_HL_Components_FULL.svg" />
<i class="fa-solid fa-quote-left"></i>&nbsp;The Amazon Web Services for the Blockchain(s)&nbsp;<i class="fa-solid fa-quote-right"></i>
</p>

## Introduction

Blockchain technologies are rising at an incredible rate. The 1st generation (aka Bitcoin) delivered the required trust for financial transactions; Just a few years later, a 2nd generation (aka Ethereum) stretched to countless scenarios through the use of Smart Contracts; Today, a set of new initiatives is already pushing hard to support scalability and mature growth.

But the initial hype on Smart Contracts is getting weighed by the blockchain ecosystem infrastructure complexities. The businesses demanded value does not come from dealing with such complexities but mainly from the trust they want to deliver to their customers. 

We provide a solution to them.

## Technical Proposition

To mention some issues for business momentum on blockchain adoption, anyone planning to get into Smart Contracts has to:

 <ul class="fa-ul">
    <li><span class="fa-li"><i class="fa-regular fa-square"></i></span>build from scratch Smart Contracts that may already be available in the market,</li>
    <li><span class="fa-li"><i class="fa-regular fa-square"></i></span>prove to stakeholders that the Smart Contract is secure and well-coded,</li>
    <li><span class="fa-li"><i class="fa-regular fa-square"></i></span>manage, store and secure blockchain addresses and keys,  and</li>
    <li><span class="fa-li"><i class="fa-regular fa-square"></i></span>trade cryptos to consume blockchain on most of the interactions.</li>
  </ul>

Blockchain Web Services provides a market solution by:

 <ul class="fa-ul">
    <li><span class="fa-li"><i class="fa-regular fa-square-check"></i></span>building a <strong>Unified Blockchain(s) API</strong> for developers and companies to consume Blockchain(s) as any service they are already used to,</li>
    <li><span class="fa-li"><i class="fa-regular fa-square-check"></i></span>provide a <strong>real-time Blockchain fees trading</strong> mechanism to manage any required fund transparently,</li>
    <li><span class="fa-li"><i class="fa-regular fa-square-check"></i></span>set an initial list of <strong>built-in solutions for the most demanded use cases</strong>, from Database primitives to end-to-end solutions for Digital Identity, Data Assets workflows, Supply Chain Management and many more, but also,</li> 
    <li><span class="fa-li"><i class="fa-regular fa-square-check"></i></span>provide a <strong>Smart Contract Marketplace</strong> to enable companies to consume advanced Smart Contract developers' solutions easily.</li>
  </ul>



## A Unified Blockchain(s) API

Blockchain Web Services will provide a unified API definition to execute Blockchain Smart Contract operations. Developers will be ready to go in minutes as they are used to and without having to learn or deal with blockchain infrastructure(s) topics.

A simple 'https://api.bws.ninja/v1/call' API call will be enough to start executing a Blockchain smart contract operation.

<pre><code class="js">var parameters = {
  contract: "Ethereum.Database.Immutable",
  version: 2,
  network: "ropsten",
  operation: "insertBytes32",
  parameters: {
    key: "a-key",
    value: "Hello World!",
  },
};

$.ajax({
  method: "POST",
  url: "https://api.bws.ninja/v1/call",
  data: JSON.stringify(parameters),
  headers: {
    "Content-Type": "application/json",
    "X-Api-Key": "ExV0dDszQ8QgsTVnevddpbB8cUaAfPs432ntVF8g0",
  },
  dataType: "json",
  success: function (response) {
    console.log(response);
  },
  error: function (xhr, textStatus, errorThrown) {
    console.log(xhr);
  },
});</code></pre>

### Realtime Blochchain Fees Trading

To execute Smart Contracts and write into Blockchain(s) you need fuel (funds that will get consumed) - it is a control mechanism to run code and to help fund the community. If a Real State company, for example, wants to write to blockchain their contract's signatures, every signature operation call will require the company to have some funds available. If they plan to use the Ethereum blockchain, they will have to manage how to buy some ETH just before every call (fiat exchange value may go up or down in time).

We propose that our unified API executes any required funding transparently so users don't have to deal with it.

<p align="center">
  <img src="img/Real-TimeFees.svg" />
</p>

As a result, Blockchain Web Services customers will pay a bill at the end of the period as they currently do when consuming any other online service.

## A Smart Contract Marketplace Community

As previously mentioned, we will provide solutions that satisfy some of the market's most demanded use cases. We will start our journey by adding Database primitives to read and write data to the blockchain(s) and move up by adding a Supply Chain Management API or offering a Data/AI assets solution, among others.

Even more exciting, we want to engage ourselves in the community-embracing approach the blockchain revolution has introduced. 

We will build a Marketplace of Smart Contracts where experienced blockchain developers will publish their work and be able to get a profit from it - and companies will be able to consume an extended set of solutions as part of Blockchain Web Services API. 


## Utility Token

We propose Blockchain Web Services to rule a token operating under the following principles.

First, we want the community to help, participate, fund, and get rewards for promoting and consuming the proposal we defined.

Second, we aim to work for the vision we committed to — a massive increase in blockchain adoption through companies and governments implementing new solutions that require transparency and trust.

### Token Use Cases 

Blockchain Web Services token will get utilized for:

- API consumers (platform customers) will require the token to execute Smart Contracts API calls.

<p align="center">
  <img src="img/API_Calls_Token_Fees.svg" />
</p>

- Marketplace Smart Contracts creators (Smart Contracts solution developers) will get a token reward whenever a platform customer consumes their solution.

<p align="center">
  <img src="img/Marketplace_API_Calls_Token_Rewards.svg" />
</p>

- Smart Contract developers will get funds to add new solutions to the platform.

<p align="center">
  <img src="img/Marketplace_Solution_Selection.svg" />
</p>

- Fund the development and launch of the platform.

### Tokenomics 

We aim to boost the overall Blockchain adoption, meaning we want the community to benefit from the values it implies. And we want the same community to be able to participate and be part of the journey with us. 

#### Token Launch Events

There will be a Seed, a Pre-Launch, and a Public launch event.

The public launch will run one year after the Seed event - the roadmap is running as planned, but we want a tangible token valuation when the public launch arrives.

[under construction]

<br/>

## <a name="roadmap"></a>Roadmap

### [Q1 2022] **BASE STATION** - <i class="fa-solid fa-check"></i>

- Define middleware architecture.
- Middleware implementation for account creation, funding credits and smart-contracts calling:
  - [bws.ninja backoffice](https://bws.ninja/)
- Initial API documentation:
  - [doc.bws.ninja](https://doc.bws.ninja/)
- Activate Stripe for customers to buy USD credits.
  - Setup for bws.ninja staging [staging.bws.ninja](https://staging.bws.ninja)

### [Q2 2022] **THE ROCKETS** - <i class="fa-solid fa-check"></i>

- Ropsten ~~mining~~ PoS (update 18/06/2022) for users to freely test BWS services.
  - ~~[BWS Ropsten Address mining](https://ropsten.etherscan.io/address/0x9089Db83F0590EC2eD01A5Eb4F8584Dd6F4bDaC7#mine)~~
  - [BWS Ropsten PoS](https://ropsten.beaconcha.in/validator/877c91d2376f731a0f621c7848c0cd9d0a2622e91d68922838ef6b4dd5d8256e46e86cf06f5979b32103ed706d0c70ed)
- First Blockchain Web Services Product Service:
  - Database: [Ethereum.Database](https://github.com/NachoColl/blockchain-web-services/tree/Ethereum.Database.Immutable/contracts/ethereum)
- Deploy [Ethereum.Database](https://doc.bws.ninja/#database) to:
  - Ethereum (ropsten + mainnet)
- BWS Database product service use-case demo:
  - [MegaLock.ninja](https://megalock.ninja) (ropsten)

### [Q3 2022] **COUNT DOWN** - <i class="fa-solid fa-check"></i>

- Implement ETH trading to call mainnet Smart contracts
  - Setup Stripe payments in bws.ninja production
  - Setup FTX.us partnership
  - Implement Trading middleware
- Website initial iteration.
  - [bws.ninja](https://bws.ninja/) copy & design

### [Q4 2022] **IGNITION**

- Deploy [Ethereum.Database] to Polygon zkEVM / zkSync 2.0
- Define Tokenomics and Launch events plan.

### [Qx 2023] **SPACE COLONIZATION**

- Seed Funding Event
- From MVP to public commercial version 1
  - Built-in Unified API solutions for:
    - Supply Chain Management
    - Data Assets / AI Workflows Integration
- Blockchain Web Services ADOPTION growth plan threads:
  - **Blockchain Consulting** to help businesses implement blockchain through Blockchain Web Services 
  - **Smart Contracts Marketplace** to involve Smart Contracts developers to add their solutions.


<script src="https://kit.fontawesome.com/ed4fd3e862.js" crossorigin="anonymous"></script>

<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.4.0/highlight.min.js"></script>
<script>hljs.highlightAll();</script>


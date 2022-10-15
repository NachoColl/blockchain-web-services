<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.4.0/styles/atom-one-dark.min.css">


<div style="position: fixed; top: 10px; left: 10px; border: 0;"> White Paper
</div>

<br/>
(version under construction)
<br/>

## Abstract

Blockchain Web Services is a Unified API enabling companies to consume blockchain Smart Contracts as web services. We aim to help companies build blockchain solutions and embrace the blockchain revolution by removing infrastructure complexities from creative workflows. 

In addition, Blockchain Web Services incorporates a Marketplace for developers to publish their Smart Contracts and for companies to get access to hundreds of validated, secured, and state-of-the-art solutions.

We envision millions of developers and companies calling Blockchain Web Services API as their gateway point for blockchain(s). 

<br/>

<p align="center">
  <img src="img/Blockchain_Market_Growth.jpg" /><br/>
<span style="font-size:14px">The blockchain technology market share is expected to increase by USD 6.25 billion from 2020 to 2025, and the market's growth momentum will accelerate at a CAGR of 32.39% <sup>(1)</sup>.</span>
</p>

In economics, sustainability, and growth, Blockchain Web Services token funds the platform expansion and rewards the Blockchain Web Services community of developers and supporters. It is purchased and consumed by Companies calling the Unified API, while developers get rewards from companies consuming their solutions.

Token dynamics are conceived such that worth health rises with usage volume.

## Introduction

Blockchain technologies are rising at an incredible rate. The 1st generation (aka Bitcoin) delivered the required trust for financial transactions; Just a few years later, a 2nd generation (aka Ethereum) stretched to countless scenarios through the use of Smart Contracts; Today, a set of new initiatives is already pushing hard to support scalability and mature growth.

But the initial hype on Smart Contracts is getting weighed by the blockchain ecosystem infrastructure complexities. Deep challenges can be found when discussing adoption. The learning curves are still massive for companies, with the absence of usage standards and the lack of efficiency in finding and using already existing solutions, among others <sup>(2)</sup>.

We provide a solution to those.

<br/>

<p align="center">
  <img src="img/BWS_HL_Components_FULL.svg" /><br/>
<i class="fa-solid fa-quote-left"></i>&nbsp;The Amazon Web Services for the Blockchain(s)&nbsp;<i class="fa-solid fa-quote-right"></i>
</p>

## Technical Proposition

Blockchain Web Services provides a market solution by delivering:

 <ul class="fa-ul">
    <li><span class="fa-li"><i class="fa-regular fa-square-check"></i></span>a <strong>Unified Blockchain(s) API</strong> for developers and companies to consume Blockchain(s) as any service they are already used to,</li>
    <li><span class="fa-li"><i class="fa-regular fa-square-check"></i></span><strong>real-time Blockchain fees trading</strong> mechanism to manage any required fund transparently,</li>
    <li><span class="fa-li"><i class="fa-regular fa-square-check"></i></span>s<strong>built-in solutions for the most demanded use cases</strong>, from Database primitives (writing and reading from blockchain(s)), to end-to-end solutions for Digital Identity, Data Assets workflows, Supply Chain Management and many more the community of developers will add,</li> 
    <li><span class="fa-li"><i class="fa-regular fa-square-check"></i></span> a <strong>Smart Contract Marketplace</strong> for developers to get rewarded by adding ther solution and for companies to find and consume advanced Smart Contracts easily.</li>
  </ul>


### A Unified Blockchain(s) API

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

<br/><br/><br/>

#### references

(1) Blockchain Technology Market by End-user and Geography - Forecast and Analysis 2021-2025 / tehnavio, SKU: IRTNTR43773

(2) 10 Challenges to the Adoption of Smart Contracts. PwC, PriceWaterhouseCoopers (blog.pwc.lu/smart-contracts-adoption-challenges)
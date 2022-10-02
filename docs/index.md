<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.4.0/styles/atom-one-dark.min.css">


<div style="position: fixed; top: 10px; left: 10px; border: 0;"> White Paper
</div>

<br/>
Blockchain technologies are rising at an incredible rate. The 1st generation (aka Bitcoin) delivered the required trust for financial transactions; Just a few years later a 2nd generation (aka Ethereum) stretched to countless scenarios through the use of Smart Contracts; Today, a set of new initiatives is already pushing hard to support scalability and mature growth.

We believe blockchain should transform society for the better and while cryptos have raised worldwide attention, the real win must come from Infinite Games founded on a decentralized, transparent and trusted framework. 

Blockchain beyond cryptos must wake up shifts from-a-few to everyone.

## Fundamentals

Blockchain Web Services is a set of solutions on top of blockchain(s) to help companies, individuals and governments embrace a new era of trusted services while keeping the focus on their business models and how they add value.

<p align="center">
  <img src="img/BWS_HL_Components_FULL.svg" />
<i class="fa-solid fa-quote-left"></i>&nbsp;The Amazon Web Services for the Blockchain(s)&nbsp;<i class="fa-solid fa-quote-right"></i>
</p>

### Raising Adoption

Blockchain infrastructure layers are still too complex for blockchain-wins mass adoption. If a company, a government, or even an experienced developer wants to start a journey, they will get slowed down by non-added value activities like:

 <ul class="fa-ul">
    <li><span class="fa-li"><i class="fa-regular fa-square"></i></span>building from scratch Smart Contracts that may already be available in the market,</li>
    <li><span class="fa-li"><i class="fa-regular fa-square"></i></span>proving to stackeholders your Smart Contracts are secure and well-coded,</li>
    <li><span class="fa-li"><i class="fa-regular fa-square"></i></span>managing blockchain addresses, secure the keys, and</li>
    <li><span class="fa-li"><i class="fa-regular fa-square"></i></span>having to trade cryptos to consume blockchain on most of the interactions.</li>
  </ul>

Blockchain Web Services wants to help those companies, governments and developers to fill the market gap and provide:

 <ul class="fa-ul">
    <li><span class="fa-li"><i class="fa-regular fa-square-check"></i></span>a <strong>unified Blockchain(s) API</strong> for developers and companies to consume Blockchain(s) as any service they are already used to,</li>
    <li><span class="fa-li"><i class="fa-regular fa-square-check"></i></span><strong>realtime Blockchain fees trading</strong> to transparently manage any required fund,</li>
    <li><span class="fa-li"><i class="fa-regular fa-square-check"></i></span>a set of <strong>built-in solutions for the most demanded use cases</strong>, from Database primitives to end-to-end solutions for Digital Identity, consume Data Assets, Supply Chain Management and many more, but also,</li> 
    <li><span class="fa-li"><i class="fa-regular fa-square-check"></i></span>a <strong>Smart Contract Marketplace</strong> to easily consume advanced Smart Contract developers' solutions.</li>
  </ul>

## A Unified Blockchain(s) API

Blockchain Web Services provides a unified API contract definition to execute Blockchain Smart Contract transactions.

<p align="center">
  <img src="img/Calling_Options.svg" />
</p>

A simple 'https://api.bws.ninja/v1/call' API call passing which contract you want to call and the parameters is enough to execute a Blockchain web Service smart contract operation. 

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

In a few minutes, without any learning curve or blockchain setup, any company can become a Blockchain company, raising the blockchain market's overall adoption.

## Realtime Blochchain Fees Trading

To execute Smart Contracts and write into Blockchain(s) you need fuel (funds that will get consumed). It is a control mechanism to run code and helps funding the community that support the decentralized infrastructure. 

As an example, if a Real State company solution writes to Ethereum blockchain their contract's signatures, every signature will require the company to have some funds (ETH) available. 

As ETH fiat exchange value may raise up or down in time, companies that manage their own Blockchain solution will also require to manage how they exchange and fund their blockchain account.

As part of the blockchain unified API we propose, all those trading complexities are internally managed.

<p align="center">
  <img src="img/Real-TimeFees.svg" />
</p>

Blockchain Web Services users pay a USD bill at the end of the period as they currently do when consuming cloud resources on AWS or Azure.


## Blockchain Web Services ICO

[ in progress ]

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
- Build **bws.ninja [NFT]** solution for NFT use cases (Ethereum)
- Define ICO/Tokenomics

### [Qx 2023] **SPACE COLONIZATION**

- Launch ICO
- Built-in **bws.ninja** solutions for:
  - Data Assets (including NFTs)
  - Identity Management
  - Supply Chain Management
- Blockchain Web Services adoption growth plan threads:
  - **Blockchain Consulting** to help businesses implement blockchain through Blockchain Web Services 
  - **Smart Contracts Marketplace**


<script src="https://kit.fontawesome.com/ed4fd3e862.js" crossorigin="anonymous"></script>

<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.4.0/highlight.min.js"></script>
<script>hljs.highlightAll();</script>


# Decentralized_Inbox---First-Eth-Smart-Contract-Project
It is a simple Decentralized Inbox Application Using Eth Smart Contract.
Features:
- Allows Users to enter a new message which will cost them some Ether. (Because this method creates a new transaction in the network)
- Users can read their last updated message.
--------------------------------------------------------
For Testing it in a local Machine
- I have used Ganache Local Eth test network for deployment
- Used Mocha Test Framework to test the contract written in solidity code.


![Web 3 constructive function and it's instance diagram](https://user-images.githubusercontent.com/64151314/166415953-60350521-7318-4421-9148-0435debacc7c.png)

For Testing it in a Real Test Network- Rinkeby
- I have used Infura api, which provides us the ability to get access to a node that is hosted on Rinkeby Network.
  Why we need that node?
  - When we start attempting to deploy to the rinkeby network, we need to make sure that we have some node that we can connect to actually deploy our contract.
- I have used Truffle as a provider, which also unlocks the account which is going to interact with the Smart Contract

![deployment diagram](https://user-images.githubusercontent.com/64151314/166415999-34299d65-908b-4113-b0ba-ac724dd36134.png)


Finally this project has no Frontend, so I have used Remix IDE to interact with the smart contract.

Steps to use this smart contract in your local machine and deploy it to rinkeby test network.
- Step 1: Create an account in Metamask Wallet and store the Mnemonic phrase somewhere safe.
  (Note: Always select the Rinkeby test network while working on projects and make sure to fill the wallet with some test ethers)
( I am assuming you have node and npm already installed in your device)
- Step 2: Clone the project and save it in your local machine
- Step 3: Open the terminal and run -  npm i
(It will install all the required modeule for the project)
- Step 4: Sign Up to infura.io , create a new project named "Rinkeby API". It will create new API and end points for you. Select Rinkeby Network and copy the endpoint and store it somewhere.
- Step 5: Open the .env file and paste your mnemonic phrase and infura endpoint api in this manner
mnemonic=<your mnemonic phrase>
infura=https://rinkeby.infura.io/YourInfuraEndPoint
Save all of these files.
- Step 6: Open the terminal and run - node deploy.js
  If you get a message like "Contract deployed to 0x9c36B00.........."
  then you have successfully deployed your contract.

- Step 7: Setting Up Remix Tool to be able to interact with the Smart Contract
    - Step 1: Open https://remix.ethereum.org/ in your browser.
    - Step 2: Copy all the code from inbox.sol and paste it in ballot.sol in the remix.
    - Step 3: Click on this icon ![image](https://user-images.githubusercontent.com/64151314/166417971-1d1e8ef4-8407-42bc-816f-e1b0c48dd29b.png)
             and select injected web 3 and then Metamask icon will pop up. Make sure to enter the password and connect it to the remix tool.
![Screenshot (55)](https://user-images.githubusercontent.com/64151314/166418342-5381b30a-7476-45d2-8fda-7bfed2f3d6f8.png)
    - Step 4: Copy the address you got after deploying your contract in terminal and past it into "At Address" in Remix Tool
  ![image](https://user-images.githubusercontent.com/64151314/166418642-6a90fdc2-4aad-4ab8-b985-877282b83177.png)
    - Step 5: Click on Deploy
    It will show an warning that, deploying contract will cost some ether. Make sure to have sufficient balance of ether in metamask and then click confirm
  ![image](https://user-images.githubusercontent.com/64151314/166419318-05d51378-08fc-4a9c-9fb6-8c583d8cc6a9.png)
  
  Now your contract is deployed and you can interact with your contract.
  ![image](https://user-images.githubusercontent.com/64151314/166419606-1c1dce7b-5b18-4e37-b6a8-e71235f644a6.png)
It will look like this.
  You can see the message and set message using some ethers.
  
  
  Thank You



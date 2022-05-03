// deploy code will go here
require("dotenv").config(); 
const HDWalletProvider = require('@truffle/hdwallet-provider');   //to both connect to some target network and unlock an account for use on that network.
const Web3 = require('web3');
const {interface , bytecode} = require('./compile');


const provider = new HDWalletProvider(
  process.env.mnemonic,   //Replace with your own Mnemonic Phrase'
  process.env.infura     // Replace with your own Rinkeby api obtained from Infura
);
const web3 = new Web3(provider);

const deploy = async () =>{
  const accounts = await web3.eth.getAccounts();

  console.log('Attempting to deploy from account' , accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({data:bytecode, arguments:['Hi there!']})
    .send({gas:'1000000', from:accounts[0]});


console.log('Contract deployed to',result.options.address);
provider.engine.stop();  //To perevent a hanging deployment

};
deploy();

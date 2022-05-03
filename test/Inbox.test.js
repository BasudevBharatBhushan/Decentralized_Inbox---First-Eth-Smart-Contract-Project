
const assert = require('assert'); //builtin , assertion about tests
const ganache = require('ganache-cli'); // Local eth test network
const Web3 = require('web3'); //It's a constructive function, that's why we capitalised the web3
const web3 = new Web3(ganache.provider()); //Instance of web3
const {interface, bytecode} = require('../compile');  //importing abi and byte code of the deployed contract from compile.js, who deployed the contract using solidity compiler

let accounts;
let inbox;

beforeEach(async ()=>{     //We gonna use asnyc and await keyword to replace the promises `
  //Get a list of all accounts
  accounts = await web3.eth.getAccounts()      //v , r , s   refer the transaction diagram   //eth is a module

  // Use one of those accounts to deploy
  // the contracts
inbox =await  new web3.eth.Contract(JSON.parse(interface))   //await keyword is used because every function of eth is asynchronous
    .deploy({data:bytecode, arguments:['Hi there!']})   //Arguments is passed because our contract is made to ecpect an input while deployment
    .send({ from: accounts[0], gas:'1000000'})   //send the transaction to the test network from the account[0] // account[0] is the first unlocked account created by Ganache
});

describe('Inbox' , ()=>{
  it('deploys a contract',()=>{
    assert.ok(inbox.options.address);   //This OK method makes an assertion that whether the passed on value is valid or not, 
    //In this case it is checking whether the address of the contract is valid or not, 
    //this will state whether it is deployed or not
    //This address property will contain the address of the whereever the contract deployed to
  });

  it('has a default message' ,async ()=>{
    const message = await inbox.methods.message().call();
    assert.equal(message,'Hi there!');   //equal method is making an assertion that whether the message we get is equal to the initial message we passed while deployment
  });

  it('can change the message' , async ()=>{
    await inbox.methods.setMessage('bye').send({from:accounts[0]});
    const message = await inbox.methods.message().call();
    assert.equal(message , 'bye');
  });
});





// web3.eth.getAccounts()      //v , r , s   refer the transaction diagram   //eth is a module
//   .then(fetchedAccounts =>{
//     console.log(fetchedAccounts);
//   });

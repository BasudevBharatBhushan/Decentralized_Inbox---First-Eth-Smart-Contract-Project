// compile code will go here
const path = require ('path');  //it help us to build a path, defaut npm module
const fs = require('fs');  //filesystem module
const solc = require('solc');

const inboxPath = path.resolve(__dirname, 'contracts','Inbox.sol');
const source = fs.readFileSync(inboxPath,'utf8');

// console.log(solc.compile(source , 1));  //we gonna make use of the bytecode property and interface property
module.exports = solc.compile(source , 1).contracts[':Inbox'];    //we are attempting to compile just 1 network
// Exporting the property and objects of contract
// We are only exporting ABI(Interface) & Bytecode of the deployed contract
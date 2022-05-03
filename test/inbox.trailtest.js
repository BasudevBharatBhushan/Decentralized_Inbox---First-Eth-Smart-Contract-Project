// Perviously these code were in inbox.tes.js for testing purposes
//
//
// const assert = require('assert'); //builtin , assertion about tests
// const ganache = require('ganache-cli'); // Local eth test network
// const Web3 = require('web3'); //It's a constructive function, that's why we capitalised the web3
// const web3 = new Web3(ganache.provider()); //Instance of web3
//
//
// class Car{
//   park(){
//     return 'stopped';
//   }
//
//   drive(){
//     return 'vroom';
//   }
// }
//
// let car;
// beforeEach(()=>{
//    car = new Car();
// });
//
// describe('Car', ()=>{     //describe is used to group the it statements
//   it('can park', ()=>{
//     //  const car = new Car();
//       assert.equal(car.park(), 'stopped');
//   });
//
//   it('can drive',()=>{
//     //const car = new Car();
//     assert.equal(car.drive(), 'vroom');
//   });
// });

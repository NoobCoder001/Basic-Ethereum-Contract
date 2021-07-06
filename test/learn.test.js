// //used it , describe and beforeEach mocha functions to test our class 
// const assert = require('assert'); 
// class Car{ 
//     park() { 
//         return 'stopped'; 
//     } 

//     drive() {
//         return 'vroom';
//     }
// } 

// let car; 

// //its actually common initialization code before test initialization
// beforeEach(() => { 
//    car = new Car();
// }); 

// describe('Car', () => { 
//     it('can park', ()=> { 
//       assert.equal(car.park(), 'stopped');
//     }); 

//     it('it can drive', () => { 
//         assert.equal(car.drive(), 'vroom');
//     })
// });
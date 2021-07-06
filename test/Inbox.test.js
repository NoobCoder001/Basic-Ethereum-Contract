const assert = require('assert'); 
const ganache = require('ganache-cli'); 
const Web3 = require('web3');  //whenever we are working with constructor function we will capitalize it
const web3 = new Web3(ganache.provider());  
//so we have created an instance of Web3 and tell the provider to connect 
//to local test network that we are hosting on our machine 

const {interface , bytecode}  = require('../compile');


let accounts; 
let inbox; 
const INITIAL_STRING = 'Hi there!'

beforeEach(async () => { 
   // Get a list of all accounts 
   //Use one of those accounts to deploy the contract 
   accounts = await web3.eth.getAccounts(); 
   
   //create and deploy the contract 
   inbox = await new web3.eth.Contract(JSON.parse(interface))
   .deploy({ data: bytecode, arguments: [INITIAL_STRING] })
   .send({ from: accounts[0], gas: '1000000' })  
 
});

describe('Inbox', () => { 
    //check if the inbox contract gets address assigned to it 
    it('deploys a contract', () => {
        assert.ok(inbox.options.address); 
    }); 
    
    it('has a default message', async () => {  
        //methods is an object that will contain all the different public functions present in our contract 
        //2nd set of parenthesis gonna customize, how funcn. will be called  
        const message = await inbox.methods.message().call(); 
        assert.equal(message, INITIAL_STRING); 
    }); 

    it('can change the message', async () => {  
        //whenever we wanna modify contract's data , we need to send a transaction to the network(here local network) 
        // and it requires where its coming from
        //That work here is done by send() 
       await inbox.methods.setMessage('bye').send({ from: accounts[0] })
       const message = await inbox.methods.message().call(); 
       assert.equal(message, 'bye');
    })
    
}) 
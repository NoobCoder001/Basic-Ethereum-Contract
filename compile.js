//this file contains the code to compile the contracts 

const path = require('path'); 
const fs = require('fs'); 
const solc = require('solc');

//const inboxPath = path.join(__dirname , 'contracts/Inbox.js');
const inboxPath = path.resolve(__dirname , 'contracts', 'Inbox.sol'); 
const source = fs.readFileSync(inboxPath , 'utf-8'); 

module.exports = solc.compile(source, 1).contracts[':Inbox'];
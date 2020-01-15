// play.js
const {connect} = require('./client');

const setupInput = function() {
    const stdin = process.stdin;
    stdin.setRawMode(true);
    stdin.setEncoding('utf8');
    stdin.resume();
    stdin.on('data', (handleUserInput) => {
        if (handleUserInput === '\u0003') {
            console.log("Thanks for using me, ciao!");
            process.exit();
        }
    })
    return stdin;
  }


console.log('Connecting ...');
setupInput();
connect();
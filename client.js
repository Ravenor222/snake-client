const net = require('net');
const rl = require("readline");


const connect = () => {
const readline = rl.createInterface({
    input: process.stdin,
    output: process.stdout
});


    /////
    const conn = net.createConnection({
        host: "localhost",
        port: 50541
    });

    conn.on("data",(data) => {
        console.log("Server: ", data);

    });
    
    //
    conn.on("connect", () => {
        readline.question("whats your 3 letter name", (name) => {
            conn.write(`Name: ${name}`)
        })
        //conn.write("Name: nk");
        console.log("Successfully connected to a game server!")
        })

    
    //
    //
    //interpret incoming data
    conn.setEncoding('utf8');
    return conn;
    //
    
}

module.exports = {connect};

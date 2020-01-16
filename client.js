const net = require('net');
//const { IP, PORT } = require('./constants');

const connect = () => {



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
        conn.write("Name: nik");
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

const net = require('net');


const connect = () => {
    const conn = net.createConnection({
        host: "localhost",
        port: 50541
    });

    conn.on("data",(data) => {
        console.log("Server: ", data);

    });
    //
    //
    //interpret incoming data
    conn.setEncoding('utf8');
    return conn;
    //
    
}

module.exports = {connect};

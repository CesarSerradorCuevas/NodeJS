let dgram = require('dgram');

let config = {
    address: '192.168.1.33',
    port: 4010,
    exclusive: false
  }

let server = dgram.createSocket('udp4')


server.on('listening', () => {
    console.log("LISTENING")
})


server.on('message', (message, remoteAddress)=>{
    let result = message.toString().substring(4, message.length - 1)//UE4
    console.log(message.toString())
    console.log(result)
})

server.on('error', (err) => {
    console.log(err)
})


server.on('close', () => {
    console.log("SOCKET CLOSED")
})


server.bind(config, ()=>{
    console.log("BINDED")
})
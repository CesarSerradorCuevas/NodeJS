let dgram = require('dgram')

let message = Buffer.from('Message from clinet')

let client = dgram.createSocket('udp4')

client.send(message, 4010, '192.168.1.33', (err) => {
    client.close()
})
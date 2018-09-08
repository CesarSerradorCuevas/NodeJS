let net = require('net')

let client = new net.Socket()

client.connect(4015, '192.168.1.33', () => {
    console.log('Connected')
    client.write('Client to server message')
})

client.on('data', (data) => {
    console.log('Received data from server: ' + data)
    client.end()
})

client.on('end', () => {
    console.log('Disconnected from server')
})

client.on('error', (error) => {
    client.end()
})

client.on('close', () => {
    console.log('Client close')
})
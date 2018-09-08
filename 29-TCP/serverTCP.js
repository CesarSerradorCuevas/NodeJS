let net = require('net')

let config = {
    host: '192.168.1.33',
    port: '4010',
    exclusive: true
}

let server = net.createServer((client) => {
    console.log('Client connected')
    client.on('data', (data) => {
        console.log(data.toString('utf8'))
    })
    client.on('end', () => {
        console.log('Client disconnected')
    })
})

server.listen(config, () => {
    console.log('Listening')
})
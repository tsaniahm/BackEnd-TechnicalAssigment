const http = require('http')

const port = 8000

const requestListener = (req, res) =>{
    const urlEndpoint =  req.url

    if(urlEndpoint === "/"){
        const message = "Hello World!"
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(message)
    }
    else if(urlEndpoint === "/about"){
        const message = "Welcome to about us page"
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(message)
    }
    else if(urlEndpoint === "/contact"){
        const message = "Welcome to contact us page"
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(message)
    }
    else{
        const message = "Hello World!"
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(message)
    }

    res.end()
}

const server = http.createServer(requestListener)

server.on('listening', () => {
    console.log(`server is listening on port http://127.0.0.1:${port}`)
})

server.listen(port)


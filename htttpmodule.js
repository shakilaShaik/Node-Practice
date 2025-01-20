// HTTP - hypertext transfer protocol

const http = require('http')
const myServer = http.createServer((req, res)=>{
res.write("welcome to node js first server")
// res.write("Hii shammu")

res.end()
})
myServer.listen(5000)
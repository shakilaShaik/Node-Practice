const os = require('os')
const  path = require('path')
console.log(os.type())
console.log(os.version())
console.log(os.freemem())
// __dirname
// __filename
console.log(__dirname)
console.log(__filename)
console.log(path.dirname(__dirname))
console.log(path.parse(__filename))
// FS module
const fs = require('fs')
fs.readFile("domo.txt", 'utf-8', (err, data)=>{
  if(err){
    console.log(err)
  }
  console.log(data)
})
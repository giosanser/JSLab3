const express = require('express')

//create new express object. "new" keyword not used in js
const app = express()

// add http request handler
let hello = (req, res) => {
   res.writeHead(200)
   res.end('Hello World')
}
//route http requests to our handler function
app.use(hello)

//start express web server
app.listen(3000)
console.log('Server running at http://localhost:3000/')

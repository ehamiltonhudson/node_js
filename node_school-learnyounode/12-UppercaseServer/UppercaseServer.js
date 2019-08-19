var http = require('http')
var fs = require('fs')
var map = require('through2-map')
var portNumber = process.argv[2]

var server = http.createServer(function(req, res) {
  if (req.method === 'POST') {
    // WITHOUT 'through2-map' - works but takes significantly longer
    // req.on('data', function(data) {
    //   return res.write(data.toString().toUpperCase())
    // })
    req.pipe(map(function(chunk) {
      return chunk.toString().toUpperCase()
    })).pipe(res)
  }
})
server.listen(portNumber)

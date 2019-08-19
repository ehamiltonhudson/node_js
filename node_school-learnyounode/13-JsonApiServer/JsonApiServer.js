var http = require('http')
var portNumber = process.argv[2]
var url = require('url')
var bl = require('bl')

var server = http.createServer(function(req, res) {
  res.writeHead(200, {'Content-Type': 'application/json'})
  if (req.method === 'GET') {
    var parsedUrl = url.parse(req.url, true)
    var parsedPath = parsedUrl.pathname
    var isoTime = new Date(parsedUrl.query.iso)
    if (parsedPath === '/api/parsetime') {
      let body = JSON.stringify({"hour": isoTime.getHours(), "minute": isoTime.getMinutes(), "second": isoTime.getSeconds()})
      req.pipe(bl(function(chunk) {
        return res.write(body)
      })).pipe(res)
    } else if (parsedPath === '/api/unixtime') {
      let body = JSON.stringify({"unixtime": isoTime.getTime()})
      req.pipe(bl(function(chunk) {
        return res.write(body)
      })).pipe(res)
    }
  }
})
server.listen(portNumber)

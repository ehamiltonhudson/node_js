var net = require('net')
var portNumber = process.argv[2]
// var strftime = require('strftime')

function addZero(n) {
  return (n.toString().split("").length === 1) ? `0${n}` : n
}

function printDate(date) {
  var year = date.getFullYear()
  var month = (date.getMonth() + 1)
  var day = date.getDate()
  var hr = date.getHours()
  var min = date.getMinutes()
  date = `${date.getFullYear()}-${addZero(month)}-${addZero(day)} ${date.getHours()}:${date.getMinutes()}` + "\n"
  return date
}

function timeServer() {
  var server = net.createServer(function(socket) {
    var data = printDate(new Date())
    socket.write(data)
    socket.end()
  })
  server.listen(portNumber)
}

timeServer()

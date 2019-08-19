var http = require('http')
var fs = require('fs')

function httpCollect() {

  http.get(process.argv[2], function(response) {

    function resultDisplay() {
      console.log(charSum)
      console.log(completeString.join(""))
    }

    response.setEncoding('utf8')
    var charSum = 0
    completeString = []
    response.on('data', function(data) {
      charSum += parseFloat(data.length)
      completeString.push(data)
    })
    response.on('end', resultDisplay)
  })

}

httpCollect()

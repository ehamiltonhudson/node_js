var http = require('http')
var fs = require('fs')
var urls = [process.argv[2], process.argv[3], process.argv[4]]
var serverData = []
var status = 0

function logData() {
  for (let i = 0; i < serverData.length; i++) {
    console.log(serverData[i])
  }
}

function httpCollect(url) {
  let dataArray = []
  let i = urls.indexOf(url)
  http.get(url, function(response) {
    response.setEncoding('utf8')
    response.on('data', function(data) {
      dataArray += data.toString()
      serverData[i] = dataArray
    })
    response.on("end", function() {
      if (response.complete === true) status++
      if (status === 3) {
        logData()
      }
    })
  })
}

urls.map(url => {
  httpCollect(url)
})

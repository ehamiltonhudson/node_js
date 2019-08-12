var fs = require('fs')
var filePath = process.argv[2]

function myFirstAsyncIO() {
  fs.readFile(filePath, 'utf8', function(err, data) {
    if (err) {
      return console.log(err)
    }
    let lineNumber = (data.split('\n').length - 1)
    return console.log(lineNumber)
  })
}

myFirstAsyncIO()

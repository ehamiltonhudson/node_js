var fs = require('fs')
var filePath = process.argv[2]

function myFirstIO() {
  let fileData = fs.readFileSync(process.argv[2], 'utf8')
  let newLines = fileData.toString().split('\n')
  return console.log(newLines.length - 1)
}

myFirstIO()

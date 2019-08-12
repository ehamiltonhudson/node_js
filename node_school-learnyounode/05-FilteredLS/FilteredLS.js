var fs = require('fs')
var path = require('path')
var filePath = process.argv[2]

function filterList() {
  let fileType = `.${process.argv[3]}`
  fs.readdir(filePath, 'utf8', function(err, fileList) {
    if (err) {
      return console.log(err)
    }
    let fileMatches = fileList.filter(file => path.extname(file) === fileType)
    fileMatches.map(function(match) {
      return console.log(match)
    })
  })
}

filterList()

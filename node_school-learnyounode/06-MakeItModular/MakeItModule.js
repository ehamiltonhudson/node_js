var fs = require('fs')
var path = require('path')

module.exports = function MakeItModule(dirName, extName, reader) {
  fs.readdir(dirName, function(err, fileData) {
    if (err) return reader(err)
    var fileMatches = fileData.filter(file => path.extname(file) === `.${extName}`)
    reader(null, fileMatches)
  })
}

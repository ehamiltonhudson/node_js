var myModule = require('./MakeItModule.js')

function MakeItModular() {
  myModule(process.argv[2], process.argv[3], function(err, fileMatches) {
    if (err) return console.log(err)
    fileMatches.map(match => console.log(match))
  })
}

MakeItModular()

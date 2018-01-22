const express = require('express')
const compression = require('compression')
const app = express()
const PORT = process.env.PORT || 3000

app.get('/javascripts/script_slow.js', function (req, res) {
  setTimeout(function() {
    res.sendFile('/javascripts/script.js', {
      root: __dirname + '/public/'
    })
  }, 3000)
})

app.get('/javascripts/script_fast.js', function (req, res) {
  setTimeout(function() {
    res.sendFile('/javascripts/script.js', {
      root: __dirname + '/public/'
    })
  }, 100)
})

app.use(express.static('public'))
app.use(compression())

app.listen(PORT, () => console.log(`Listening on ${ PORT }`))
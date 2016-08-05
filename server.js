var express = require('express')
var port = process.env.PORT || 3000
var app = express()

app.use(express.static(__dirname))

app.get('*', (req, res) => {
  res.redirect('http://conceptionarts.com/')
})

app.listen(port)

console.log('Server started at', port)

var express = require('express')
var app = express()

const port = 80


app.use(express.static('public'))
app.get('/',function(req,res){ // rerquest 가 먼저 그리고 response

  res.send('hello express\n')
})

app.get('/dynamic',function(req,res){

  var d='dynamic'
  res.send(`<Html>/<H>hello static ${d}</H>/</Html>/`)
})
app.listen(port,function(){
  console.log("connected!\n")
})

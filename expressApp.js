var express = require('express')
var app = express()

const port = 80
app.get('/',function(req,res){ // rerquest 가 먼저 그리고 response

  res.send('hello express\n')
})


app.listen(port,function(){
  console.log("connected!\n")
})

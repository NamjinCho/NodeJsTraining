var express = require('express')
var app = express()

const port = 80


app.use(express.static('public'))
app.get('/',function(req,res){ // rerquest 가 먼저 그리고 response

  res.send('hello express\n')
})
app.get('/topic/:id',function(req,res){

  var strings = [
    'Express is',
    'Node js is',
    'Javascript is',
  ]
  var links = `
    <a href="/topic?id=0">Express</a><br>
    <a href="/topic?id=1">Nodejs</a><br>
    <a href="/topic?id=2">JavaScript</a><br>
    ${strings[req.params.id]}
  `
  res.send(links);

})
app.get('/queryTest/:tid',function(req,res){

  res.json(req.params);
})
app.get('/dynamic',function(req,res){

  var d='dynamic'
  res.send(`<Html>/<H>hello static ${d}</H>/</Html>/`)
})
app.listen(port,function(){
  console.log("connected!\n")
})

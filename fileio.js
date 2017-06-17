const fs = require('fs');

var file = fs.readFile('app.js',{encoding : 'utf8'} , (err,result) =>{

  if(err){
    console.log(err)
    return err;
  }
  else {
      console.log(result)
      return result;
    }
});

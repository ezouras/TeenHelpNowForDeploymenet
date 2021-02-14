const express=require('express');
const path = require('path');
const bodyParser=require("body-parser");


const app= express();


const port = process.env.PORT || 3002;
app.use(express.static(__dirname + '/teenHelpNow'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


app.get('/', function(request, response) {
 response.render('index.html');
});


//** listen **//
app.listen(port,()=>{
  console.log("server up on 3002!");
});

https = require('https');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine', 'ejs');

app.get('/', function(req,res){
    res.render('index');
});

app.post('/city', function(req,res){
    res.render('city');
});dfads

app.listen(3000,'localhost',function(){
    console.log('Server started on port 3000...');
});
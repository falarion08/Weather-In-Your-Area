https = require('https');
const express = require('express');
const bodyParser = require('body-parser');
const { url } = require('inspector');
const app = express();

app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine', 'ejs');

app.get('/', function(req,res){
    res.render('index');
});

app.post('/city', function(req,res){
    const units = "metric";
    const apiKey1 = "61d59ceb91438c7372bfa6a66bf5e261";
    var data1;
    const url1 = "https://api.openweathermap.org/data/2.5/weather?q=" + req.body.city + "&appid=" + apiKey1 + "&units=" +units;
    const image_icon_url= " http://openweathermap.org/img/wn/";
    const image_icon_url_suffix = "@2x.png";
    
         https.get(url1,data1 = function(response){
         response.on("data",function(data){
            data1 = JSON.parse(data); 
            
            var current_weather_icon =image_icon_url + data1.weather[0].icon +image_icon_url_suffix ; 
            var current_weather_temp = data1.main.temp;
            var current_weather_description = data1.weather[0].description;
            var country = data1.sys.country;
            var city = data1.name;
             
            res.render("city", {'current_weather_icon': current_weather_icon,
            'current_weather_temp':current_weather_temp,
            'current_weather_description':current_weather_description,
            'City':city,
            'Country':country});
        });
    });
      
});

app.listen(3000,'localhost',function(){
    console.log('Server started on port 3000...');
});
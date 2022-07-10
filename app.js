const express = require ("express"); //Require my express module which I downloaded 
const https = require("https"); //Requiring another https module which is already pre bundled 
const bodyParser = require("body-parser");


const app = express(); //initialize a new express app 

app.use(bodyParser.urlencoded({extended: true})); //To allow to pass through the body of the post request 

app.get("/", function(req, res ){
    res.sendFile(__dirname + "/index.html");//response sending the directory to my html file 


}); //Making a bit to declare what should happen when my user goes on the home page 



app.post("/", function(req, res){ //Catching that post request made on the HTML form 

const query = req.body.cityName
const apiKey = "527746ba95e6095b052a397983323146"
const units = "metric"
const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=" + apiKey + "&units=" + units 

https.get(url, function(response){
    console.log(response.statusCode);

    response.on("data", function(data){  // tap into  when getting some data from the response, call back function going to contain the data that we get   
       const weatherData = JSON.parse(data); //The data I am getting back from the API is not in JS object. this json.parse turns the data into JS object  
       const temp = weatherData.main.temp //Tapping into the data JS oject to a specific piece of info 
       const weatherDescription = weatherData.weather[0].description
       const icon = weatherData.weather[0].icon//image id from the json data 
       const imageURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png" //Image URL, using string concatenation to put my icon I have from JSON data 
       res.write("<p>The weather is currently " + weatherDescription + "</p>");
       res.write("<h1>The temperature in " + query + " is " + temp + "degrees Celcius.</h1>");
       res.write("<img src=" + imageURL + ">"); // Using html image element back to the browser to display the image URL 
       res.send();
    })
}); // Getting my API which I got and using it with my https module to perform a get request across the internet using the https protocol 

});





app.listen(3000, function(){
    console.log("Server is running on port 3000."); //This is a starting a port o 3000 for the server 

});
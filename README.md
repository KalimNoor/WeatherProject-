# WeatherProject-

I created a simple site that allows users to gon onto the browser and make a post request on a specifc area to then get back live weather data displaying it on the browser.

What I utilised: 
-Https module to perform a get request across the internet passing in a API url 
-Tapping into the reponse and getting back some data using the .on method 
-Data recieved is Json format
-Using JSON.parse to convert the data into a JS object 
-Digging through the JavScript object using the dot notation to target the differnet levels and specific data found in object 
-Tapping into the response and getting it tor display from the server to the browser using res.send 
-String concatenation 
-Creating a HTML Page and passing through a through to the browser. calling res.sendFile and also getting hold of the directory name using __dirname and concactenating
-Building out the Html form so that it it allows for sumbit. Method specifed as post to the root route on our server 
-Catching it using app.post 
-Installed a packaged body-parser which allowed me to look through the body of the post request and fetch the data based on my input which is called city name on my html

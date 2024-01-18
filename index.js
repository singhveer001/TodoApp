const express = require("express"); // We got access to express function
const bodyParser = require("body-parser")
const app = express(); // app is new express aplication object
const PORT = 3009;

// Whatever we encoding it start reading that
app.use(bodyParser.json())// for parsing application/json
app.use(bodyParser.urlencoded({extended: true})) // forr parsing application/x-www-form-urlencoded

// Lets define some routes
app.get('/ping',(request,response) => {
    // If somebody hits the localhost:3009 from this machine, we will execute this callback
    // request object contains detail about incoming request, details like query params, body params, etc.
    // Response object contains detail about what response will be sent back to the client  
    console.log("Ping Received");

    console.log(request.query); // help to access custom query parameters comming in the url
    console.log(request.body); // help to access body params comming in the http request

    response.json({message: 'ping recieved '})
}) // 2 arguments , 1-> route as a string , 2-> callback


app.post('/categories/:category/products/:id',(request,response) => {
    console.log(request.params); // helps you to access the url params coming in the url
    console.log(request.headers); // helps you to acces incoming headers in the http request objecct
    response.json({message : "PING Received"})
})


// 1. using the app object, bind it to a port u want your server to listen for socket connetion
app.listen(PORT,()=>{
    // This callback is executed once we successfully bind our object 
    // to the port and start listening to a new connection 

    // This callback is usefull to do any action post the server is created 
    // Example db connection
    console.log(`server started at port ${PORT}`);
}); // the listen method takes two parameter -> 1. PORT  number , 2. callback 



// How client send data 
/*
*1. URL params -> /products/1 or /products/2
*2. Query params -> /products?rating=4&min_price=30&max_price=100
*3. Body params -> 
*/ 
const express = require("express"); // We got access to express function
const app = express(); // app is new express aplication object
const PORT = 3009;

// Lets define some routes
app.get('/ping',(request,response) => {
    // If somebody hits the localhost:3009 from this machine, we will execute this callback
    // request object contains detail about incoming request, details like query params, body params, etc.
    // Response object contains detail about what response will be sent back to the client  
    console.log("Ping Received");
    response.json({message: 'ping recieved '})
}) // 2 arguments , 1-> route as a string , 2-> callback

// 1. using the app object, bind it to a port u want your server to listen for socket connetion
app.listen(PORT,()=>{
    // This callback is executed once we successfully bind our object 
    // to the port and start listening to a new connection 

    // This callback is usefull to do any action post the server is created 
    // Example db connection
    console.log(`server started at port ${PORT}`);
}); // the listen method takes two parameter -> 1. PORT  number , 2. callback 

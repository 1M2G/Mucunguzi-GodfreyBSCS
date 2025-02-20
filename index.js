const express = require("express");

const app = express();
const port = 8080;
//logging middleware function
function requestLogger(resquest, response, next){
    console.log(`Request Method: ${request.method}, URL: ${request.url}`);
    next(); //passing control to the next middleware/ route handler
}

app.use(requestLogger); // we the apply the middleware to all routes

app.get('/',(request,response)=>{
    response.send("Hello World");
})

app.listen(port,() =>{
    console.log(`the server is running on ${port}`)
})
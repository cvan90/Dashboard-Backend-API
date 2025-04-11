const express = require("express");  
const cors = require("cors");  
const app = express();  

//cors allow access to same site or other localhost 

app.use(cors()) 

//localhost port range - 3000 - 9999

const SERVER_PORT = 8080; 

//------------------------------------------------Tests-----------------------------------------------------------------
app.get("/", (req,res) => {
    const _msg = "Demo node express api";
    console.log(_msg)
    res.send(_msg)
});
app.get("/about", (req,res) => {
    const _msg = "Demo node express api-about route";
    console.log(_msg)
    res.send(_msg)
});
app.get("/test1", (req,res) => {
    const _msg = "Demo node express api-test route";
    console.log(_msg)
    res.send(_msg)
});
//----------------------------------------------------------------------------
//------------------------------------Login--------------------------------------------
app.get("/login", (req,res) => {
    const _msg = "# Demo node express api 1.0.0 - login route";
    console.log(_msg)
    res.send(_msg)
});
//-other - POST, DELETE, PUT

//-start node exporess web server - ie: live server
app.listen(SERVER_PORT, ()=>{
    let _msg = "node express websever running at port: " + SERVER_PORT;
    console.log(_msg);
})
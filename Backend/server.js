const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors());
mongoose.connect("mongodb://127.0.0.1:27017/ApplicationTracker").then(()=>{
    console.log("Mongoose Connected ");
    
}).catch((error)=>{
    console.log("Error in Connection", error);

});

const userRoute = require("./route/UserRoute");
app.use("/api", userRoute);



app.listen(5000, ()=>{
    console.log("Server is running on 5000 port ");
    
});
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
//const ejsMate = require("ejs-mate");
const ejsMate = require("ejs-mate");

app.set("views" , path.join(__dirname , "views"));
app.set("view engine" , "ejs");
app.use(methodOverride("_method"));
//app.engine("ejs" , ejsMate);
app.use(express.static(path.join(__dirname , "/public")));
app.engine("ejs", ejsMate);


app.get("/api_market" , (req , res )=>{
    res.render("listings/home.ejs");
})

app.get("/apiListings" , (req , res)=>{
    res.render("listings/allListing.ejs");
})

app.listen(8080 , ()=>{
    console.log("Listening to port 8080 API  ");
    
});
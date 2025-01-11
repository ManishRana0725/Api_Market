const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
//const ejsMate = require("ejs-mate");
const ejsMate = require("ejs-mate");
const Listing = require("./models/api.js");



app.set("views" , path.join(__dirname , "views"));
app.set("view engine" , "ejs");
app.use(methodOverride("_method"));
//app.engine("ejs" , ejsMate);
app.use(express.static(path.join(__dirname , "/public")));
app.engine("ejs", ejsMate);


main().then((   )=>{
    console.log("connected to DB  ");
    })
    .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/api_market');
};




// home page 
app.get("/api_market" , (req , res )=>{
    res.render("listings/home.ejs");
})
 // to show all the APIs
app.get("/apiListings" , async(req , res)=>{
    const allListings =  await Listing.find({});
    res.render("listings/allListing.ejs" , {allListings});
    //console.log("send listings");
})



app.listen(8080 , ()=>{
    console.log("Listening to port 8080 API  ");
    
});

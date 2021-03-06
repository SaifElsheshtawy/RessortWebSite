const express = require("express");
const bodyParser = require("body-parser");
const _ = require('lodash');
const ejs = require("ejs");
const env = require('dotenv');

const app =express();

app.use(bodyParser.urlencoded({
  extended: true
}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + '/public'));


//English Routs
app.get("/", function(req,res){
  res.sendFile(__dirname+"/pageEN/home.html")
});

app.get("/contactUs",function(req,res){
  res.sendFile(__dirname+"/pageEN/contactUs.html")
});

app.get("/aboutUs",function(req,res){
  res.sendFile(__dirname+"/pageEN/aboutUs.html")
});
app.get("/gallery", function(req,res){
  res.sendFile(__dirname+"/pageEN/gallery.html")
});

app.get("/social",function(req,res){
  res.sendFile(__dirname+"/pageEN/social.html")
});

app.get("/plans",function(req,res){
  res.sendFile(__dirname+"/pageEN/plans.html")
});

//Arabic Routs
app.get("/ar", function(req,res){
  res.sendFile(__dirname+"/pageAR/homeAR.html")
});

app.get("/arContactUs",function(req,res){
  res.sendFile(__dirname+"/pageAR/contactUsAR.html")
});

app.get("/arAboutUs",function(req,res){
  res.sendFile(__dirname+"/pageAR/aboutUsAR.html")
});
app.get("/arGallery", function(req,res){
  res.sendFile(__dirname+"/pageAR/galleryAR.html")
});

app.get("/arSocial",function(req,res){
  res.sendFile(__dirname+"/pageAR/socialAR.html")
});

app.get("/arPlans",function(req,res){
  res.sendFile(__dirname+"/pageAR/plansAr.html")
  // res.render(__dirname+"/views/plansAr.ejs")
});

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}

app.listen(port, function() {
  console.log("the server is up");
});

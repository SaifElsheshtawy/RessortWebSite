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
  res.sendFile(__dirname+"/home.html")
});

app.get("/contactUs",function(req,res){
  res.render(__dirname+"/views/contactUs.ejs")
});

app.get("/aboutUs",function(req,res){
  res.render(__dirname+"/views/aboutUs.ejs")
});
app.get("/gallery", function(req,res){
  res.render(__dirname+"/views/gallery.ejs")
});

app.get("/social",function(req,res){
  res.render(__dirname+"/views/social.ejs")
});

app.get("/plans",function(req,res){
  res.render(__dirname+"/views/plans.ejs")
});

//Arabic Routs
app.get("/ar", function(req,res){
  res.sendFile(__dirname+"/homeAR.html")
});

app.get("/arContactUs",function(req,res){
  res.sendFile(__dirname+"/contactUsAR.html")
});

app.get("/arAboutUs",function(req,res){
  res.sendFile(__dirname+"/aboutUsAR.html")
});
app.get("/arGallery", function(req,res){
  res.sendFile(__dirname+"/galleryAR.html")
});

app.get("/arSocial",function(req,res){
  res.sendFile(__dirname+"/socialAR.html")
});

app.get("/arPlans",function(req,res){
  res.sendFile(__dirname+"/plansAr.html")
  // res.render(__dirname+"/views/plansAr.ejs")
});

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}

app.listen(port, function() {
  console.log("the server is up");
});

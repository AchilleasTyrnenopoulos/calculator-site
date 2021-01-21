const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

var height;
var weight;
var bmi;

app.listen(3000, function() {
    console.log("Server started on port 3000");
});

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res) {
    
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var result = num1 + num2;

    res.send("The result is " + result);
});

//get and post methods for bmicalculator route
app.get("/bmicalculator", function(req, res) {
    res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmicalculator", function(req, res) {
    weight = Number(req.body.weight);
    height = Number(req.body.height);    
    
    bmi = weight/(height*height);
    bmi = bmi.toFixed(2);

    res.send("Your BMI is " + bmi);
})
// jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js"); //to add a refactored codes in a file e.g date.js

const app = express();

let items = ["Buy Food", "Cook Food", "Eat Food"];
let workItems = [];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));




app.get("/", function (req, res) {
    
    let day = date();
    res.render("list", {listTitle: day, newListItems: items}); //list is shortened from list.ejs

});

app.post("/", function(req, res){
    let item = req.body.newItem; //newItem is from input in list.ejs

    if (req.body.list === "Work"){ //The logic req.body.list === "Work" is refered to what the server sees i.e list(from name="list" in list.ejs)
        workItems.push(item);  //using the dynamic value(also in form input in list.ejs). The server reads {newItem: 'New Item added', list: 'Work'}
        res.redirect("/work"); //This if stmt is directed to the server which can be seen when console logged i.e console.log(req.body);
    } else{
    items.push(item);
    res.redirect("/");
    }
});





app.get("/work", function (req, res){
    res.render("list", {listTitle: "Work List", newListItems: workItems});    
});

app.post("/work", function(req, res){
    let item = req.body.newItem;
    workItems.push(item);
    res.redirect("/work");
});




app.get("/about", function(req, res){
    res.render("about");
});




 app.listen(3000, function(){
     console.log("Server is running on Port 3000");
 });





 //NOTICE: var is changed to let so as to have more chances to access the variable both globally or locally




// const express = require("express");
// const bodyParser = require("body-parser");

// const app = express();

// app.set('view engine', 'ejs');

// app.get("/", function (req, res) {
//     let today = new Date();
//     let currentDay = today.getDay();
//     let day = "";


//     if (currentDay === 6 || currentDay === 0){
//         day = "weekend";
//         //res.sendFile(__dirname + "/weekend.html");
//     } else{
//         day = "weekday";
//         //res.sendFile(__dirname + "/weekday.html");
//     }


//     res.render("list", {
//         kindOfDay: day
//     });

// });


// app.listen(3000, function () {
//     console.log("Server is running on Port 3000");
// });

// const express = require("express");
// const bodyParser = require("body-parser");

// const app = express();

// app.set('view engine', 'ejs');

// app.get("/", function(req, res){
//     let today = new Date();
//     let currentDay = today.getDay();
//     let day = "";


//     switch(currentDay){
//         case 0:
//             day = "Sunday";
//             break;
//         case 1:
//             day = "Monday";
//             break;
//         case 2:
//             day = "Tuesday";
//             break;
//         case 3:
//             day = "Wednesday";
//             break;
//         case 4:
//             day = "Thursday";
//             break;
//         case 5:
//             day = "Friday";
//             break;
//         case 6:
//             day = "Saturday";
//             break;
//         default:
//             console.log("Error: current day is equal to: " + currentDay);
//     }

    
//     res.render("list", {kindOfDay: day});

// });


// app.listen(3000, function(){
//     console.log("Server is running on Port 3000");
// });


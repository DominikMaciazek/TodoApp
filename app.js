const express = require("express");
const bodyParser = require("body-parser");

let items = ["Drink", "Buy Food"];
let workItems=[];

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static("public"))

app.get("/", function(req, res){

    let today = new Date();
    

    let options = {
        weekday:"long",
        day:"numeric",
        month: "long"
    };

    let day = today.toLocaleDateString("en-US", options); 
    res.render('list', {listTitle:day, newListItems: items});
});

app.post("/", function(req,res){
    let item = req.body.newItem;
    items.push(item);

    res.redirect("/");

});

app.get ("/work", function (req, res){
    res.render("list", {listTitle:"Work List", newListItems: workItems})
});

app.post ("/work", function (req, res){
    let item = req.body.newItem;
    workItems.push(items)
    res.redirect("/work")
});

app.listen(3000, function(){
    console.log("Server is running on port 3000")
})
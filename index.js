var express = require("express");

var app = express();

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

app.use("/public", express.static("public"));

app.get("/", function (req, res) {
    res.render("pages/index.ejs");
});

app.listen(8040, function () {
    console.log("Webserver launched on port 8040!");
});
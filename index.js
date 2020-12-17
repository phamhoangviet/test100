const express = require("express");
const app = express();

//const server = require("http").createServer(app)
//const server = require("http").Server(app)

app.use(express.static('public'));
app.set("view engine", "ejs");
app.set("views", "./views");

app.get("/", function(req, res){
    res.render("index", { title: "Express SocketIO" });
});

app.listen(3000, () => console.log('Server started on port 3000'));
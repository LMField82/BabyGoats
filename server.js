//import express and body parser
const express = require("express");
const bodyParser = require("body-parser");

//initializes express server as variable app
const app = express();

//initializes body-parser
app.use(bodyParser.json());

const sayHi = (req, res) => {
    res.send("Hi!");
};

app.get("/", sayHi);

//setting server to listen on PORT 5000
app.listen(5000, () => {
    console.log("Server running on port 5000");
})
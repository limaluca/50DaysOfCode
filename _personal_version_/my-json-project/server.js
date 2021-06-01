// This has methods for routing HTTP requests, configuring middleware, rendering HTML views, registering a template engine, and modifying application settings that control how the application behaves
const express = require('express');
const nunjucks = require('nunjucks')
const server = express();

//Setting up other files of the project, like the styles
server.use(express.static("public"))

// Setting up the template engine
server.set("view engine", "html")

// Setting up the template engine
nunjucks.configure("views", {
    express: server
})

// The route definition. The server.get() method specifies a callback function that will be invoked whenever there is an HTTP GET request with a path ('/') relative to the site root.
// req: When something is coming from the browser
// res: Something is going to the browser
server.get("/", (req, res) => {
    res.render("index")
})

server.get("/product", (req, res) => {
    res.render("product")
})

server.listen("5000", () => {
    console.log("The server is running horroures")
})
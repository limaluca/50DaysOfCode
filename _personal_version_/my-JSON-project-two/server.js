// This has methods for routing HTTP requests, configuring middleware, rendering HTML views, registering a template engine, and modifying application settings that control how the application behaves
const express = require('express');
const nunjucks = require('nunjucks');
const routes = require('./routes')
const server = express();

server.use(express.static("public"))

// getting the express to use the routes
server.use(routes)

server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server,
    namespaces: false,
    noCache: false
})


server.listen("5000", () => {
    console.log("The server is running horroures")
})
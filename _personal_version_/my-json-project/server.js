// This has methods for routing HTTP requests, configuring middleware, rendering HTML views, registering a template engine, and modifying application settings that control how the application behaves
const express = require('express');
const nunjucks = require('nunjucks');
const { forEach } = require('./data');
const server = express();
const products = require('./data')


//Setting up other files of the project, like the styles
server.use(express.static("public"))

// Setting up the template engine
server.set("view engine", "njk")

// Setting up the template engine
nunjucks.configure("views", {
    express: server,
    namespaces: false
})

// The route definition. The server.get() method specifies a callback function that will be invoked whenever there is an HTTP GET request with a path ('/') relative to the site root.
// req: When something is coming from the browser
// res: Something is going to the browser
server.get("/", (req, res) => {
    //by passing a object called ITEMS with the array cards, we can
    //send the data imported to the front-end
    res.render("home", { items: products })
})

server.get("/product-page", (req, res) => {
    res.render("product-page")
})

server.get("/product", (req, res) => {
    const id = req.query.id;

    //If product exist it will be true and it goes directly to the route return
    // because if not we will see the not found message
    const product = products.find(function(product) {
        return product.id == id
    })

    if (!product) {
        return res.send("not found")
    }


    return res.render("product-page", { item: product })

})

server.use((req, res) => {
    res.status(404).render("not-found")
})

server.listen("5000", () => {
    console.log("The server is running horroures")
})
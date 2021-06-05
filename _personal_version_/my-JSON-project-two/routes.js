const express = require('express');
const routes = express.Router();


routes.get("/", (req, res) => {
    res.redirect("companies")
})

routes.get("/companies", (req, res) => {
    res.render("companies")
})

routes.get("/candidates", (req, res) => {
    res.render("candidates")
})

module.exports = routes;
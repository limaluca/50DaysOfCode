const express = require('express');
const routes = express.Router();

//*********NEWSSSSSSSSS*********
// This will enable to use all the functions
//created at companies.js 
const companies = require('./companies')


routes.get("/", (req, res) => {
    res.redirect("companies")
})

routes.get("/companies", (req, res) => {
    res.render("companies/index")
})

routes.get("/companies/create", (req, res) => {
    res.render("companies/create")
})

routes.get("/companies/:id", companies.show)

routes.get("/candidates", (req, res) => {
    res.render("candidates")
})


routes.post("/companies", companies.post)



module.exports = routes;
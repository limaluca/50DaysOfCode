//*********NEWSSSSSSSSS*********
// This file will hold different functions, the CRUD in specific
// It is separated due organization

//This will enable to use files including JSON
const fileSystem = require('fs')

const data = require('./data.json')

exports.post = (req, res) => {

    //Creating an array of keys for
    // each input sent to the body
    const keys = Object.keys(req.body);

    for (let key of keys) {
        //By looping through the array of keys we can specify
        //for each key of the body like: req.body.avatar_url == req.body[key]
        if (req.body[key] == "") {
            return res.send("PREENCHA TODOS OS CMAPOS!!!!")
        }
    }

    data.companies.push(req.body)



    //fileSystem.writeFile(#1 "data.JSON", #2 JSON.stringify(req.body), #3 function(err)
    //#1 is the JSON created on the root because there is no path 
    //#2 transforms the js to JSON
    //#3 is the callback function
    fileSystem.writeFile("data.JSON", JSON.stringify(data, null, 4), function(err) {
            if (err) return res.send("Write file error!")
            return res.redirect("/companies")
        })
        //     return res.send(req.body)
}
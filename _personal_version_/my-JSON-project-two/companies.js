//*********NEWSSSSSSSSS*********
//      This file will hold different functions, the CRUD in specific
//      It is separated due organization
//This will enable to use files including JSON
const fileSystem = require('fs');
const data = require('./data.json');
const { getHiringDate } = require('./utils')

exports.show = (req, res) => {
    const { id } = req.params;

    const foundCompany = data.companies.find(function(company) {
        return company.id == id;
    })

    if (!foundCompany) {
        return res.send("company not found")
    }







    //*********NEWSSSSSSSSS*********
    // Using spread operator to handle the data before sending it to the front-end
    // I need to put the data there...
    const company = {
        ...foundCompany,
        hiring_date: new Intl.DateTimeFormat("br-pt").format(foundCompany.hiring_date), //ou usar a funcao getHiringDate
        working_hours: "",
        work_field: foundCompany.work_field.split(","),
    }

    return res.render("companies/show", { company })
}


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

    let { avatar_url, company_name, local, type_of_work, working_hours, work_field, hiring_date } = req.body

    //*********NEWSSSSSSSSS*********
    //Begining of treating and organizing the data
    hiring_date = Date.parse(req.body.contract_date)
    const id = data.companies.length + 1;


    //this will add the raw data to the JSON. Then it will be converted to JSON notation
    data.companies.push({
        id,
        avatar_url,
        company_name,
        local,
        type_of_work,
        working_hours,
        work_field,
        hiring_date
    })





    //fileSystem.writeFile(#1 "data.JSON", #2 JSON.stringify(req.body), #3 function(err)
    //#1 is the JSON created on the root because there is no path 
    //#2 transforms the js to JSON
    //#3 is the callback function
    fileSystem.writeFile("data.JSON", JSON.stringify(data, null, 4), function(err) {
        if (err) return res.send("Write file error!")
        return res.redirect("/companies")
    })
}
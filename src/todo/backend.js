var bodyParser = require('body-parser');
const express = require("express");
const app = express();



app.use(express.json());
app.use(express.urlencoded({ extended: false }))

app.use(bodyParser.json());



var cors = require('cors')
app.use(cors())


const port = process.env.PORT || 4000

app.listen(port, () => {


    app.get('/get', (req, res) => {
        const dat = ["obj1", "obj2"]
        res.send(dat)



    })






    app.post('/post', (req, res) => {
        console.log(req.body)

    })



})
const express = require("express");
var bodyParser = require('body-parser');
let router = require('express').Router();


const { MongoClient, ServerApiVersion } = require('mongodb');



const app = express();

// app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }))



// app.use(bodyParser.json());


const PORT = 3000;



app.listen(PORT, () => {




    // app.get('/get', (req, res) => {

    // const uri = "mongodb+srv://mehdi:mehdimongodb@cluster0.xuahs.mongodb.net/?retryWrites=true&w=majority";
    // const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 })





    // client.connect(err => {

    //     client.db("database0").collection("col0").find({}).toArray()
    //         .then((ans) => {

    // res.set({
    //     "Access-Control-Allow-Origin": "*",
    //     "Access-Control-Allow-Credentials": true
    // })

    //             res.send(ans)


    //         })
    //         .catch((err) => console.log(err))

    // });

    // const arr = ["hai bhaeee", "kia hua" , "bolo"]


    // res.send(arr)



    // })


    // app.post('/posst', (req, res) => {


    // //     res.set({


    // Access-Control-Allow-Origin: https://localhost:3000
    // //         "Access-Control-Allow-Credentials": true
    // //     })

    //     console.log("I got a request")
    //     console.log(req.body)




    // })



    app.post('/user', (req, res) => res.send(req.body))



    app.get('/get', (req, res) => res.send("han bhae"))



    app.post('/posst', update);




    function update(req, res) {




        const uri = "mongodb+srv://mehdi:mehdimongodb@cluster0.xuahs.mongodb.net/?retryWrites=true&w=majority";
        const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 })





        client.connect(err => {

            client.db("database0").collection("col1").insertOne(req.body)
                .then(() => console.log("success", req.body))
                .catch((err) => console.log(err))

        })

        client.close();


    }




});




const express = require("express");

const { MongoClient, ServerApiVersion } = require('mongodb');



const app = express();


const PORT = 4000;



app.listen(PORT, () => {

    app.get('/get', (req, res) => {

        // const uri = "mongodb+srv://mehdi:mehdimongodb@cluster0.xuahs.mongodb.net/?retryWrites=true&w=majority";
        // const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 })





        // client.connect(err => {

        //     client.db("database0").collection("col0").find({}).toArray()
        //         .then((ans) => {

                    res.set({
                        "Access-Control-Allow-Origin": "*",
                        "Access-Control-Allow-Credentials": true
                    })

        //             res.send(ans)


        //         })
        //         .catch((err) => console.log(err))

        // });

                    console.log(req.url)
       const  arr = ["hai bhaeee" , "kia hua"]


        res.send(arr)


    })




});
const app= require('express')();
const PORT= 9801;
const cors= require('cors');


var bodyParser = require('body-parser');
const server= require('./server');
const { getData } = require('./src/controller/user.controller');

app.use(cors())

app.listen(PORT, async ()=> {
    await server();
    console.log(`server ${PORT}`)});



app.get('/', getData);

// app.post('/id', function (req, res) {
//     res.status(200).send({

//     })
// })

// app.post("/add", async (req,res)=>{
//     res.status(200).send({
//         "name": "",
//         "email":"",
//         "phone":"",
//         "description":"",
//         "location":"",
//         "gender":"",
//         "exp":"",
//         "cat":""
// })
// })


//   res.status(201).send(book);

//     }catch(err){
//       res.status(404).json({err:"something went wrong"})
//   }



// var express = require('express');
// var http = require('http');
// var fs = require('fs');
// var connect = require('connect');

// var app = express();
// app.get('/', function(req, res) {
//         res.send('Hello World');
//     });

// var server = app.listen(8789, function(){
//     var host = server.address().address;
//     var port = server.address().port;
//     console.log("Example app listening at http://%s:%s", host, port);
// });




// const {MongoClient} = require('mongodb');
// const url='mongodb://localhost:27017';
// // const database='member_collection'

// const client = new MongoClient(url);

// async function getData(){
//     let result= client.connect();
//     let db = result.db('member_collection');
//     let collection = db.collection('a');
//     let response = await collection.find({}).toArray();
//     console.log(response);
// }

// getData();
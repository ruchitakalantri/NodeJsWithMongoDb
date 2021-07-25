// const mysql = require('mysql2');

// // connection pool : pool of connetion.. multiple connection 
// const pool = mysql.createPool({
//     //db engine
//     host : 'localhost',
//     user : 'root',
//     database : 'node-complete',
//     password : 'password'
// });

// // promise : callback inn struture way
// module.exports = pool.promise();

// const Sequelize = require('sequelize');

// // new sequelize object : will atomatically connect to database
// const sequelize = new Sequelize('node-complete' , 'root' , 'password' , {
//     dialect : 'mysql' ,
//      host : 'localhost'
//     });

//     module.exports = sequelize;

// mongo db -- database connection
const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;


// use client to connect to mongo db database

const mongoConnnect = (callback) => {
    MongoClient
    .connect('mongodb+srv://ruchita:oF9oOjrvKYR4PziK@cluster0.t1cyv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
    .then( client => {
       console.log('Conneceted');
       callback(client);
    })
    .catch(err => { 
        console.log(err)
    });
}

module.exports = mongoConnnect;
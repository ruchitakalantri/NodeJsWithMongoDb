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

let _db ;

// use client to connect to mongo db database

const mongoConnect = (callback) => {
    MongoClient
    .connect('mongodb+srv://ruchita:oF9oOjrvKYR4PziK@cluster0.t1cyv.mongodb.net/shop?retryWrites=true&w=majority')
    .then( client => {
       console.log('Conneceted');
       _db = client.db();
       callback();
    })
    .catch(err => { 
        console.log(err)
        throw err;
    });
}
const getDb = () => {
    if (_db) {
        return _db;
    }
    throw 'NO DATABASE FOUND!'
}

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
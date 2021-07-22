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

const Sequelize = require('sequelize');

// new sequelize object : will atomatically connect to database
const sequelize = new Sequelize('node-complete' , 'root' , 'password' , {
    dialect : 'mysql' ,
     host : 'localhost'
    });

    module.exports = sequelize;
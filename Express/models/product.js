const getDb = require('../util/database').getDb;

class Product {
  constructor(title, price, description,imageUrl){
    this.title = title;
    this.price = price;
    this.description = description;
    this.imageUrl = imageUrl;

  }

  save() {
    // connect to mongo db and save product
    // connection
    const db = getDb();
    // collection
    db.collection('products')
      .insertOnne(this)
      .then(result => {
        console.log(result);
      })
      .catch( err => {
        console.log(err);
      });
  }
}

// sequelize model
// const Product = sequelize.define('product' , {
//   id: {
//     type : Sequelize.INTEGER,
//     autoIncrement : true ,
//     allowNull : false ,
//     primaryKey : true
//   } ,
//   title : Sequelize.STRING ,
//   price : {
//     type : Sequelize.DOUBLE,
//     allowNull : false
//   },
//   imageUrl : {
//     type : Sequelize.STRING,
//     allowNull : false
//   } ,
//   description : {
//     type : Sequelize.STRING,
//     allowNull : false
//   }
// });

module.exports = Product;
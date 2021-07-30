const mongodb = require('mongodb');
const getDb = require('../util/database').getDb;

const ObjectId = mongodb.ObjectID;

class User {
  constructor(username , email , cart , id) {
    this.name = username;
    this.email = email;
    this.cart = cart; // {items : []}
    this._id = id;
  }

  save() {
    const db = getDb();
    return db
      .collection('users')
      .insertOne(this);

  }

  addToCart(product) {
    // const cartProduct = this.cart.items.findIndex(cp => {
    //   return cp.ObjectID-id === product._id
    // });

    // add product to cart
    //product.quantity = 1
    // ... : JS spread operator 
    // overwrite old cart to new cart
    const updatedCart = {
      items : [{
        productId : new ObjectId(product._id) , 
        quantity : 1
     }]};
    const db = getDb();
    return db.collection('users')
      .updateOne(
        { _id : new ObjectId(this._id)} , 
        { $set : {cart : updatedCart}}
      );
  }

  // .. find will give curser
  //.find({_id : new ObjectId(userId)}).next();
  // use findOne : will give 1 element

  static findById(userId) {
    const db = getDb();
    return db
      .collection('users')
      .findOne({_id : new ObjectId(userId)})
      .then(user => {
        console.log(user);
        return user;
      })
      .catch(err => {
        console.log(err);
      });
  }
}

module.exports = User;

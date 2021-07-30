const mongodb = require('mongodb');
const getDb = require('../util/database').getDb;

const ObjectId = mongodb.ObjectID;

class User {
  constructor(username , email) {
    this.name = username;
    this.email = email;
  }

  save() {
    const db = getDb();
    return db
      .collection('users')
      .insertOne(this);

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

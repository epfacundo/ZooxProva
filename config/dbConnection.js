let mongoose = require('mongoose');

const server = 'localhost:27017'; 
const database = 'zoox';      

class Database {
  constructor() {
    this._connect()
  }
  
_connect() {
     mongoose.connect(`mongodb://${server}/${database}`, { useNewUrlParser: true , useUnifiedTopology: true, useFindAndModify: false  })
       .then(() => {
       })
       .catch(err => {
         console.error('Database connection error')
       })
  }
}

module.exports = new Database()
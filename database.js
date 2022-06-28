const Sequelize = require('sequelize')
require('dotenv').config()

let database = process.env.DATABASE
let user = process.env.USER 
let password = process.env.PASSWORD 
let host = process.env.HOST 
let port = process.env.PORT 

var db = {}

db.initialize = async () => {
    const sequelize = new Sequelize(database, user, password, {
        host: host,
        port: port,
        dialect: 'mssql'
    })
    
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
    
    const bookModel = require('./datamodels/book-model.js')
    const authorModel = require('./datamodels/author-model.js')
    
    const Book = bookModel(sequelize, Sequelize)
    const Author = authorModel(sequelize, Sequelize)
    
    Author.hasMany(Book, {
        foreignKey: 'authorId'
      })
    Book.belongsTo(Author);
    
    console.log(Book)
    
    db[Book.name] = Book
    db[Author.name] = Author
    
    db.sequelize = sequelize
    
    console.log(db)
}

module.exports = db
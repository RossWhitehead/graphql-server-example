const {DataSource} = require('apollo-datasource')
const _ = require('lodash')

const books = [
  {
    id: 1,
    title: 'The Awakening',
    authorId: 1,
  },
  {
    id: 2,
    title: 'City of Glass',
    authorId: 2,
  }
]

class BooksDataSource extends DataSource{
  constructor(){
    super()
  }

  initialize(config){
  }

  getBooks(){
    return books
  }

  getBookById(id){
    return _.filter(books, {id: id})[0]
  }
}

module.exports = BooksDataSource
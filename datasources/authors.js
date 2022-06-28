const {DataSource} = require('apollo-datasource')
const _ = require('lodash')

const authors = [
  {
    id: 1,
    name: 'Mark Bell',
  },
  {
    id: 2,
    name: 'Candid Lee',
  }
]

class AuthorsDataSource extends DataSource{
  constructor(){
    super()
  }

  initialize(config){
  }

  getAuthors(){
    return authors
  }

  getAuthorById(id){
    return _.filter(authors, {id: id})[0]
  }
}

module.exports = AuthorsDataSource
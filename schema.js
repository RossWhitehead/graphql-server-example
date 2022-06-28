const { gql } = require('apollo-server') 

module.exports = gql`
type Book {
  id: ID
  title: String
  author: Author
}

type Author {
  id: ID
  name: String
  books: [Book]
}

type Query {
  books: [Book]
  bookById(title:String): [Book]
  authors: [Author]
}
`
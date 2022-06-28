const _ = require('lodash')

module.exports = {
    Query: {
      books:  async (obj, args, { db }) => { 
        //console.log(db)
        return await db.book.findAll()
      },
      bookById: async (obj, { id }, { db }) =>
        db.book.findByPk(id),
      authors: async () => db.author.findAll()
    },
    Author: {
      books(author, args, { db }) {
        const books = async () => db.book.findAll()
        const authorsBooks = _.filter(books, {authorId: author.id})
        return authorsBooks
      }
    },
    Book: {
      author(book, args, { db }) {
        const booksAuthor = db.book.findByPk(book.id)
        return booksAuthor
      }
    }
  }
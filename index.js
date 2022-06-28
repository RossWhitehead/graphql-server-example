const { ApolloServer } = require('apollo-server')
const db = require('./database')

const typeDefs = require('./schema')
const resolvers = require('./resolvers');

(async () => {
  await db.initialize()

  const server = new ApolloServer({ typeDefs, resolvers, context: { db } })
  
  server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  })
})()

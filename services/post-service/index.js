const { ApolloServer } = require('apollo-server')
const { buildFederatedSchema } = require('@apollo/federation')
const { prisma } = require('./post-db/generated/prisma-client')

const resolvers = require('./src/resolvers')
const typeDefs = require('./src/schema')

const server = new ApolloServer({
  schema: buildFederatedSchema([{ typeDefs, resolvers }]),
  context: req => ({
    ...req,
    db: prisma
  })
})

server
  .listen({ port: 5002 })
  .then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`)
  })
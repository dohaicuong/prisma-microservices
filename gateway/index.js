const { ApolloServer } = require('apollo-server-express')
const { ApolloGateway } = require('@apollo/gateway')
const express = require('express')

const serviceList = [
  { name: 'account-service', url: 'http://localhost:5001/graphql' },
  { name: 'post-service', url: 'http://localhost:5002/graphql' },
]
const gateway = new ApolloGateway({ serviceList })

;(async () => {
  const { schema, executor } = await gateway.load()

  const server = new ApolloServer({
    schema, executor,
    tracing: true
    // cache, formatError, formatReponse
  })
  const app = express()

  app.get('/serviceList', (req, res) => res.send(serviceList))
  server.applyMiddleware({ app, path: '/' })

  app.listen(5000, () => console.log(`🚀 Server ready at http://localhost:5000`))
})()
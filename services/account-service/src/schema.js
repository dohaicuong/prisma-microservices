const { ApolloServer, gql } = require('apollo-server')

module.exports = gql`
  extend type Query {
    me: User
  }

  type User @key(fields: "id") {
    id: ID!

    email: String!
    name: String
  }
`
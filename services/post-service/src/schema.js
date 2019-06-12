const { ApolloServer, gql } = require('apollo-server')

module.exports = gql`
  extend type Query {
    posts: [Post!]!
  }

  type Post @key(fields: "id") {
    id: ID!
    title: String
    content: String

    author: User
  }

  extend type User @key(fields: "id") {
    id: ID! @external

    posts: [Post!]!
  }
`
import { gql } from 'apollo-server-micro'

export const urlGraphQL = "/api/v1/graphql"

export const typeDefs = gql`
  type Message {
      id: ID
      message: String
  }
  type Query {
      hello: String!
      messages: [Message]
  }
`

import { ApolloServer } from 'apollo-server-micro'
import { typeDefs } from '../../../graphql/v1/schema'
import { resolvers } from '../../../graphql/v1/resolvers'
import Cors from 'micro-cors'

const url = "/api/v1/graphql"

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
})
const startApolloServer = apolloServer.start()

export default Cors()(
  async function handler(req, res) {
    await startApolloServer
    await apolloServer.createHandler({ path: url })(req, res)
  }
)

export const config = {
  api: {
    bodyParser: false,
  },
}

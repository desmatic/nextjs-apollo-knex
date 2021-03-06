import { ApolloServer } from 'apollo-server-micro'
import cors from 'micro-cors'
import { typeDefs, urlGraphQL } from '../../../graphql/v1/schema'
import { resolvers } from '../../../graphql/v1/resolvers'
import MyDB, { myDBConfig } from '../../../graphql/v1/datasources/mydb'

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => {
    return {
      mydb: new MyDB(myDBConfig),
    }
  }
})
const startApolloServer = apolloServer.start()

export default cors()(
  async function handler(req, res) {
    if (req.method === 'OPTIONS') {
      res.end()
      return false
    }

    await startApolloServer
    await apolloServer.createHandler({ path: urlGraphQL })(req, res)
  }
)

export const config = {
  api: {
    bodyParser: false,
  },
}

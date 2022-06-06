export const resolvers = {
  Query: {
    hello: (_parent, _args, _context) => {
      return "hello world!!"
    },
    messages: async (_parent, _args, { dataSources }) => {
      const results1 = await dataSources.mydb.getMessages()
      .then((results) => {
        return results
      })
      .catch((err) => {
        console.error(err)
        return {}
      })
      console.log(results1[0])
      return results1[0]
    },
  },
}

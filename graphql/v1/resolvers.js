export const resolvers = {
  Query: {
    // returns hello world
    hello: (_parent, _args, _context) => {
      return "hello world!!"
    },
  },
};

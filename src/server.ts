import { createYoga, createSchema } from 'graphql-yoga'
 
export const schema = createSchema({
  typeDefs: /* GraphQL */ `
    type Query {
      hello: String
    }
  `,
  resolvers: {
    Query: {
      hello: () => 'world'
    }
  }
})

 
const yoga = createYoga({ schema })
 
const server = createServer(yoga)
 
server.listen(4000, () => {
  console.info('Server is running on http://localhost:4000/graphql')
})

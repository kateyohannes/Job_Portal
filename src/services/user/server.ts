
import { createYoga, createSchema } from "graphql-yoga"

const schema = createSchema({
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
const server = Bun.serve({
    fetch: yoga
})

console.info(
    `Server is running on ${new URL(
        yoga.graphqlEndpoint,
        `http://${server.hostname}:${server.port}`
    )}`
)
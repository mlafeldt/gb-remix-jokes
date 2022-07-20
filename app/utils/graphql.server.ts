import { GraphQLClient } from "graphql-request"

export const client = new GraphQLClient(process.env.GRAFBASE_API_URL!, {
  headers: {
    "x-api-key": process.env.GRAFBASE_API_KEY!,
  },
})

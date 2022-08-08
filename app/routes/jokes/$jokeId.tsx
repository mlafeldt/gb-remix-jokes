import type { LoaderFunction } from "@remix-run/node"
import { json } from "@remix-run/node"
import { Link, useLoaderData } from "@remix-run/react"

import { GetJokeByIdDocument } from "~/graphql/generated"
import type { Query, Joke } from "~/graphql/generated"

import { client } from "~/utils/graphql.server"

type LoaderData = { joke: Joke }

export const loader: LoaderFunction = async ({ params }) => {
  const resp = await client.request<Query>(GetJokeByIdDocument, { id: params.jokeId })
  const joke = resp.joke

  if (!joke) throw new Error("Joke not found")
  const data: LoaderData = { joke }
  return json(data)
}

export default function JokeRoute() {
  const data = useLoaderData<LoaderData>()

  return (
    <div>
      <p>Here's your hilarious joke:</p>
      <p>{data.joke.content}</p>
      <Link to=".">{data.joke.name} Permalink</Link>
    </div>
  )
}

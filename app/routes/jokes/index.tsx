import type { LoaderFunction } from "@remix-run/node"
import { json } from "@remix-run/node"
import { useLoaderData, Link } from "@remix-run/react"

import { GetJokesDocument } from "~/graphql/generated"
import type { Query, Joke } from "~/graphql/generated"

import { client } from "~/utils/graphql.server"

type LoaderData = { randomJoke?: Joke }

export const loader: LoaderFunction = async () => {
  const resp = await client.request<Query>(GetJokesDocument, { first: 100 })
  const jokes = resp.jokeCollection!.edges!.map((edge) => edge!.node)

  const randomRowNumber = Math.floor(Math.random() * jokes.length)
  const randomJoke = jokes[randomRowNumber]

  const data: LoaderData = { randomJoke }
  return json(data)
}

export default function JokesIndexRoute() {
  const data = useLoaderData<LoaderData>()

  if (!data.randomJoke) {
    return <p>Please add a joke first.</p>
  }

  return (
    <div>
      <p>Here's a random joke:</p>
      <p>{data.randomJoke.content}</p>
      <Link to={data.randomJoke.id}>"{data.randomJoke.name}" Permalink</Link>
    </div>
  )
}

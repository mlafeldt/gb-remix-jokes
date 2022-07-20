import { json, LinksFunction, LoaderFunction } from "@remix-run/node"
import { Outlet, Link, useLoaderData } from "@remix-run/react"

import { GetJokesDocument } from "~/graphql/generated"
import type { Query, Joke } from "~/graphql/generated"

import { client } from "~/utils/graphql.server"

import stylesUrl from "~/styles/jokes.css"

type LoaderData = { jokes: Array<Joke> }

export const loader: LoaderFunction = async () => {
  const resp = await client.request<Query>(GetJokesDocument, { first: 5 })
  const jokes = resp.jokeCollection!.edges!.map((edge) => edge!.node)

  const data: LoaderData = { jokes }

  return json(data)
}

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: stylesUrl }]
}

export default function JokesRoute() {
  const data = useLoaderData<LoaderData>()

  return (
    <div className="jokes-layout">
      <header className="jokes-header">
        <div className="container">
          <h1 className="home-link">
            <Link to="/" title="Remix Jokes" aria-label="Remix Jokes">
              <span className="logo">🤪</span>
              <span className="logo-medium">J🤪KES</span>
            </Link>
          </h1>
        </div>
      </header>
      <main className="jokes-main">
        <div className="container">
          <div className="jokes-list">
            <Link to=".">Get a random joke</Link>
            <p>Here are a few more jokes to check out:</p>
            <ul>
              {data.jokes.map((joke) => (
                <li key={joke?.id}>
                  <Link to={joke.id.replace("Joke#", "")}>{joke.name}</Link>
                </li>
              ))}
            </ul>
            <Link to="new" className="button">
              Add your own
            </Link>
          </div>
          <div className="jokes-outlet">
            <Outlet />
          </div>
        </div>
      </main>
    </div>
  )
}

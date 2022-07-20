import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Joke = {
  __typename?: 'Joke';
  content: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type JokeConnection = {
  __typename?: 'JokeConnection';
  edges?: Maybe<Array<Maybe<JokeEdge>>>;
  /** Information to aid in pagination */
  pageInfo: PageInfo;
};

/** Input to create a new Joke */
export type JokeCreateInput = {
  content: Scalars['String'];
  name: Scalars['String'];
};

export type JokeCreatePayload = {
  __typename?: 'JokeCreatePayload';
  joke?: Maybe<Joke>;
};

export type JokeDeletePayload = {
  __typename?: 'JokeDeletePayload';
  deletedId: Scalars['ID'];
};

export type JokeEdge = {
  __typename?: 'JokeEdge';
  cursor: Scalars['String'];
  node: Joke;
};

/** Input to create a new Joke */
export type JokeUpdateInput = {
  content?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type JokeUpdatePayload = {
  __typename?: 'JokeUpdatePayload';
  joke?: Maybe<Joke>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Create a Joke */
  jokeCreate?: Maybe<JokeCreatePayload>;
  /** Delete a Joke by ID */
  jokeDelete?: Maybe<JokeDeletePayload>;
  /** Update a Joke */
  jokeUpdate?: Maybe<JokeUpdatePayload>;
};


export type MutationJokeCreateArgs = {
  input: JokeCreateInput;
};


export type MutationJokeDeleteArgs = {
  id: Scalars['ID'];
};


export type MutationJokeUpdateArgs = {
  id: Scalars['ID'];
  input: JokeUpdateInput;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']>;
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  startCursor?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  /** Get a Joke by ID */
  joke?: Maybe<Joke>;
  /** Paginated query to fetch the whole list of `Joke`. */
  jokeCollection?: Maybe<JokeConnection>;
};


export type QueryJokeArgs = {
  id: Scalars['ID'];
};


export type QueryJokeCollectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

export type GetJokesQueryVariables = Exact<{
  first: Scalars['Int'];
}>;


export type GetJokesQuery = { __typename?: 'Query', jokeCollection?: { __typename?: 'JokeConnection', edges?: Array<{ __typename?: 'JokeEdge', node: { __typename?: 'Joke', id: string, name: string, content: string } } | null> | null } | null };

export type GetJokeByIdQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetJokeByIdQuery = { __typename?: 'Query', joke?: { __typename?: 'Joke', id: string, name: string, content: string } | null };

export type CreateJokeMutationVariables = Exact<{
  name: Scalars['String'];
  content: Scalars['String'];
}>;


export type CreateJokeMutation = { __typename?: 'Mutation', jokeCreate?: { __typename?: 'JokeCreatePayload', joke?: { __typename?: 'Joke', id: string } | null } | null };


export const GetJokesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getJokes"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"jokeCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"content"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetJokesQuery, GetJokesQueryVariables>;
export const GetJokeByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getJokeById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"joke"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"content"}}]}}]}}]} as unknown as DocumentNode<GetJokeByIdQuery, GetJokeByIdQueryVariables>;
export const CreateJokeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createJoke"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"content"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"jokeCreate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"content"},"value":{"kind":"Variable","name":{"kind":"Name","value":"content"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"joke"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<CreateJokeMutation, CreateJokeMutationVariables>;
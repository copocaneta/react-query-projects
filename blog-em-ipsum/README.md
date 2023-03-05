# Blog-em Ipsum

## Details:

- gets data from [[http://json](https://jsonplaceholder.typicode.com/)](https://jsonplaceholder.typicode.com/)
- very simple, focus on react query concepts
  - fetching data
  - loading / error states
  - react query dev tools
  - pagination
  - prefetching
  - mutations

## dev steps:

- `yarn add react-query`
- create query client
  - client that manages queries and cache
- apply QueryProvider
  - provides cache and client config to children
  - takes queruy client as the value
- run `useQuery`
  - hook that queries the server

## React Query dev tools

- shows queries (by keys)
  - status of queries
  - last updated timestamp
- Data explorer
- Query explorer
- [https://react-query.tanstack.com/devtools](https://react-query.tanstack.com/devtools)

## Installation

- Run `npm install`

## Running the App

- Run `npm start`. The app will be found at [http://localhost:3000]

## Server

- This app uses the [JSON Placeholder](https://jsonplaceholder.typicode.com/) server.

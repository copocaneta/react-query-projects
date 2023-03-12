# Infinite SWAPI

### A project to demonstrate React Query useInfiniteQuery, for the Udemy course "React Query: Server State Management for React"

## `useInfiniteQuery`:

### shape of data is different than `useQuery`

- object with 2 properites:
  - `pages`: (array of objects for each page of data)
  - `pageParams`: recording what our params is for every page
- Every query has its own element in the pages array
- `pageParams` keeps track of the keys of queries that have been retrieved.
  - rarely used, won't use here

### syntax also differs from `useQuery`.

- `pageParam` is a parameter passed to the `queryFn`
  - `useInfiniteQuery("sw-people", ({pageParam = defaultUrl}) => fetchUrl(pageParam))`
  - **Current Value of** `pageParam` is maintained by React Query.
- `useInfiniteQuery` options
  - `getNextPageParam`: (`lastpage`, `allPages`)
    - **Updates** `pageParam`
    - **Might use all of the pages of data** (`allPages`)
    - we will use just the `lastPage` of **data** (**specfically** the `next` **property**)

### Properties of the returned object:

- `fetchNextPage`
  - function to call when the user needs more data
- `hasNextPage`
  - **based on retuurn value** of `getNextpagePagem` function`
  - if `undefined`, no more data
- `isFectchingNextPage`
  - **For displaying a loading spinner**
  - We'll see an example of when it's useful to distinguish between `isFetching` and `isFetchingNextPage`.

## Installation

#. Download this directory, or clone or fork this repo
#. `npm install --legacy-peer-deps`

**Note** The `--legacy-peer-deps` is very important since this project uses [React Infinite Scroller](https://www.npmjs.com/package/react-infinite-scroller), which doesn't (yet) support React 17.

## Running the App

Run `npm start`. The app will be found at [http://localhost:3000]

## Server

This app uses the [Star Wars API](https://swapi.dev/) server.

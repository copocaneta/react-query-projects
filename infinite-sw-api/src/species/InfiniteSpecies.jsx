import InfiniteScroll from 'react-infinite-scroller';
import { useInfiniteQuery } from 'react-query';
import { Species } from './Species';

const initialUrl = 'https://swapi.dev/api/species/';
const fetchUrl = async (url) => {
  const response = await fetch(url);
  return response.json();
};

export function InfiniteSpecies() {
  const {
    data,
    isError,
    error,
    isLoading,
    isFetching,
    hasNextPage,
    fetchNextPage
  } = useInfiniteQuery(
    'sw-species',
    ({ pageParam = initialUrl }) => fetchUrl(pageParam),
    {
      getNextPageParam: (lastPage) =>
        lastPage.next || undefined
    }
  );
  // TODO: get data for InfiniteScroll via React Query
  if (isLoading) {
    return <div className="loading">Loading...</div>;
  }
  if (isError) {
    return <div className="error">Error: {error}</div>;
  }
  return (
    <>
      {isFetching && (
        <div className="loading">Loading...</div>
      )}
      <InfiniteScroll
        loadMore={fetchNextPage}
        hasMore={hasNextPage}
      >
        {data.pages.map((page) => {
          return page.results.map((result) => {
            return (
              <Species
                key={result.name}
                name={result.name}
                language={result.language}
                averageLifespan={result.average_lifespan}
              />
            );
          });
        })}
      </InfiniteScroll>
    </>
  );
}

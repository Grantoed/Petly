import React from 'react';
import { useState, useEffect } from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useTheme } from 'styled-components';
// import { useLocation, useNavigate } from 'react-router-dom';
// import { Suspense } from 'react';
// import { Outlet } from 'react-router-dom';
import { BlogCategoriesNav } from './BlogCategoriesNav';
import { PostsList } from './PostsList';
import { fetchPosts } from 'api/posts';
import { Loader } from 'components/global/Loader';
import { BlogContainer, Title, LoadMoreBtn, ListBox } from './BlogComponent.styled';
import { InputSearch } from 'components/global/InputSearch';
import { Container } from 'components/global/Container';
import { Box } from 'components/global/Box';

const PAGE_SIZE = 5; // number of items per page

export const BlogComponent = () => {
  // const location = useLocation();
  // const navigate = useNavigate();
  // const pathname = location.pathname;
  const theme = useTheme();
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    setSearchQuery(searchQuery);

    return () => {};
  }, [searchQuery]);

  const {
    data,
    isLoading,
    isSuccess,
    isError,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery(
    ['searchPosts', searchQuery],
    async ({ pageParam = 0 }) =>
      await fetchPosts({ offset: pageParam, count: PAGE_SIZE, search: searchQuery }),
    {
      getNextPageParam: (lastPage, allPages) => {
        if (lastPage.length === 0) return undefined;
        const lastPost = lastPage[lastPage.length - 1];
        const totalPages = Math.ceil(lastPost.totalCount / PAGE_SIZE);
        return allPages.length >= totalPages ? undefined : allPages.length * PAGE_SIZE;
      },
      staleTime: 5 * 60 * 1000,
    }
  );

  // if (isLoading) {
  //   return <Loader />;
  // }

  if (isSuccess) {
  }

  return (
    <Container pb={100} pt={26}>
      <BlogContainer>
        <Box display="flex" flexDirection="column" justifyContent="center">
          <Title>Community</Title>
          <InputSearch change={setSearchQuery} value={searchQuery} debounceDelay={300} />
          <BlogCategoriesNav />

          {isLoading && <Loader />}

          {isError &&
            ([401, 403].includes(error.response.status) ? (
              <p>Please login...</p>
            ) : (
              <p>An error occurred while fetching the data. Please try again later.</p>
            ))}

          {isSuccess && (
            <ListBox>
              {data?.pages?.flat()?.length === 0 && <p>No notices here yet...</p>}
              {data.pages.map((page, i) => (
                <React.Fragment key={i}>
                  <PostsList data={page} />
                </React.Fragment>
              ))}
            </ListBox>
          )}

          {hasNextPage && data.pages[data.pages.length - 1].length === PAGE_SIZE && (
            <LoadMoreBtn
              type="button"
              onClick={() => fetchNextPage()}
              disabled={isFetchingNextPage}
              style={{
                backgroundColor: isFetchingNextPage && theme.colors.tagBg,
                color: isFetchingNextPage && theme.colors.bt,
                border: isFetchingNextPage && `2px solid ${theme.colors.trsp}`,
                pointerEvents: isFetchingNextPage && 'none',
                cursor: isFetchingNextPage ? 'not-allowed' : 'pointer',
              }}
            >
              {isFetchingNextPage ? 'Loading more...' : 'Load More'}
            </LoadMoreBtn>
          )}
        </Box>
      </BlogContainer>
    </Container>
  );
};

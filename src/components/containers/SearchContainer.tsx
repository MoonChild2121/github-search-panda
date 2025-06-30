import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { flex } from '../../../styled-system/patterns';
import { SearchBar } from '../sections/SearchBar';
import { CardGrid } from '../sections/CardGrid';
import type { SearchType } from '../../constants/search';
import { fetchGithubResults, clearResults, type EntityType } from '../../store/githubSlice';
import type { AppDispatch } from '../../store';

const mapSearchTypeToEntity = (searchType: SearchType): EntityType => {
  return searchType === 'users' ? 'user' : 'repository';
};

export const SearchContainer = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchType, setSearchType] = useState<SearchType>('users');
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    // Clear results when search type changes
    dispatch(clearResults());
  }, [searchType, dispatch]);

  useEffect(() => {
    const searchTimeout = setTimeout(() => {
      if (searchQuery.trim()) {
        dispatch(fetchGithubResults({
          query: searchQuery,
          entity: mapSearchTypeToEntity(searchType)
        }));
      } else {
        dispatch(clearResults());
      }
    }, 500); // Debounce search for 500ms

    return () => clearTimeout(searchTimeout);
  }, [searchQuery, searchType, dispatch]);

  return (
    <div className={flex({
      direction: 'column',
      gap: 8,
      w: 'full',
      align: 'center',
      py: 4
    })}>
      <SearchBar
        searchQuery={searchQuery}
        searchType={searchType}
        onSearchQueryChange={setSearchQuery}
        onSearchTypeChange={setSearchType}
      />
      <CardGrid />
    </div>
  );
}; 
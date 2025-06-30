import { flex } from '../../../styled-system/patterns';
import { Input } from '../common/Input';
import { Select } from '../common/Select';
import { SEARCH_OPTIONS } from '../../constants/search';
import type { SearchType } from '../../constants/search';

interface SearchBarProps {
  searchQuery?: string;
  searchType?: SearchType;
  onSearchQueryChange?: (value: string) => void;
  onSearchTypeChange?: (value: SearchType) => void;
}

export const SearchBar = ({
  searchQuery = '',
  searchType = 'users',
  onSearchQueryChange = () => {},
  onSearchTypeChange = () => {}
}: SearchBarProps) => {
    return (
        <div className={flex({ 
          direction: 'column',
          align: 'center',
          w: 'full'
        })}>
          <div className={flex({ 
            maxW: 'container.xl',
            justify: 'center',
            gap: 4,
            px: 4,
            w: 'full'
          })}>
            <Input
              placeholder="Start typing to search..."
              value={searchQuery}
              onChange={(e) => onSearchQueryChange(e.target.value)}
            />
            <Select
              options={[...SEARCH_OPTIONS]}
              value={searchType}
              onChange={(e) => onSearchTypeChange(e.target.value as SearchType)}
            />
          </div>
        </div>
    );
}; 
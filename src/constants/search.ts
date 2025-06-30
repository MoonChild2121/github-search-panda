export const SEARCH_OPTIONS = [
  { value: 'users', label: 'Users' },
  { value: 'repos', label: 'Repositories' }
] as const;
 
export type SearchType = typeof SEARCH_OPTIONS[number]['value']; 
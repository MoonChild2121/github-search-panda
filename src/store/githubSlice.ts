import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export type EntityType = 'user' | 'repository'

interface GithubState {
  loading: boolean
  error: string | null
  // cache: { [key: string]: any[] }
  cache: Record<string, any[]>
  lastResults: any[]
  lastQuery: string
  lastEntity: EntityType
}

const initialState: GithubState = {
  loading: false,
  error: null,
  cache: {},
  lastResults: [],
  lastQuery: '',
  lastEntity: 'user',
}

export const fetchGithubResults = createAsyncThunk(
  'github/fetchResults',
  async (
    { query, entity }: { query: string; entity: EntityType },
    { getState, rejectWithValue }
  ) => {
    const state = getState() as { github: GithubState }
    const cacheKey = `${entity}:${query}`
    if (state.github.cache[cacheKey]) {
      // Already cached
      return { results: state.github.cache[cacheKey], query, entity }
    }
    const token = import.meta.env.VITE_PERSONAL_TOKEN
    let url = ''
    if (entity === 'user') {
      url = `https://api.github.com/search/users?q=${encodeURIComponent(query)}+in:name+type:user&per_page=30`
    } else {
      url = `https://api.github.com/search/repositories?q=${encodeURIComponent(query)}&sort=stars&order=desc&per_page=30`
    }
    const res = await fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/vnd.github+json',
      },
    })
    if (!res.ok) {
      const error = await res.json()
      return rejectWithValue(error.message || 'GitHub API error')
    }
    const data = await res.json()
    return { results: data.items, query, entity }
  }
)

const githubSlice = createSlice({
  name: 'github',
  initialState,
  reducers: {
    clearResults(state) {
      state.lastResults = []
      state.lastQuery = ''
      state.lastEntity = 'user'
      state.error = null
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchGithubResults.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchGithubResults.fulfilled, (state, action) => {
        state.loading = false
        state.error = null
        const { results, query, entity } = action.payload
        const cacheKey = `${entity}:${query}`
        state.cache[cacheKey] = results
        state.lastResults = results
        state.lastQuery = query
        state.lastEntity = entity
      })
      .addCase(fetchGithubResults.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload as string || 'Unknown error'
      })
  },
})

export const { clearResults } = githubSlice.actions
export default githubSlice.reducer 
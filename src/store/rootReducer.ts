import { combineReducers } from '@reduxjs/toolkit'
import githubReducer from './githubSlice'

export const rootReducer = combineReducers({
  github: githubReducer,
})

export type RootState = ReturnType<typeof rootReducer>

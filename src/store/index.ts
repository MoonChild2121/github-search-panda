import { configureStore } from '@reduxjs/toolkit'
import { rootReducer } from './rootReducer'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import githubReducer from './githubSlice'
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['github'], // add slice names you want to persist
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // needed for redux-persist
    }),
})

export const persistor = persistStore(store)

export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store
export type AppState = ReturnType<typeof store.getState> & {
  github: ReturnType<typeof githubReducer>
}

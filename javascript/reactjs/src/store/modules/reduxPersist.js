import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'

export default (reducers) => {
  const persistedReducers = persistReducer(
    {
      key: '@consumo-api',
      storage,
      whitelist: ['auth'] // nome do reducer que você quer persistir
    },
    reducers
  )

  return persistedReducers
}

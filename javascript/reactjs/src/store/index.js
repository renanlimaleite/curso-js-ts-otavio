import { persistStore } from 'redux-persist'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import rootReducer from './modules/rootReducer'
import rootSaga from './modules/rootSaga'

import persistedReducers from './modules/reduxPersist'

const sagaMiddlewares = createSagaMiddleware()

const store = createStore(
  persistedReducers(rootReducer),
  applyMiddleware(sagaMiddlewares)
)

sagaMiddlewares.run(rootSaga)

export const persistor = persistStore(store)

export default store

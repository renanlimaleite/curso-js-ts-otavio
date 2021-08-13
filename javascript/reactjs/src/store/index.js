import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import rootReducer from './modules/rootReducer'
import rootSaga from './modules/rootSaga'

const sagaMiddlewares = createSagaMiddleware()

const store = createStore(rootReducer, applyMiddleware(sagaMiddlewares))

sagaMiddlewares.run(rootSaga)

export default store

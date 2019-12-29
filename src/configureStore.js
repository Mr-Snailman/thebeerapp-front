import { createBrowserHistory } from 'history'
import logger from 'redux-logger'
import promise from 'redux-promise-middleware'
import rootReducerFunc from './ducks'
import { routerMiddleware } from 'connected-react-router'
import thunk from 'redux-thunk'
import { applyMiddleware, createStore } from 'redux'

// Redux Middleware and Initial Store setup
export const history = createBrowserHistory()

export default (preloadedState) => {
  const middleware = [ routerMiddleware(history), thunk, promise, ]
  if (process.env.NODE_ENV !== 'production') {
    middleware.push(logger)
  }

  return createStore(rootReducerFunc(history), preloadedState, applyMiddleware(...middleware))
}


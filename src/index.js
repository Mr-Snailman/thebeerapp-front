import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from './ducks'
import logger from 'redux-logger'
import promise from 'redux-promise-middleware'
import thunk from 'redux-thunk'

// Redux Middleware and Initial Store setup
const middleware = [ thunk, promise ]
if (process.env.NODE_ENV !== 'production') {
  middleware.push(logger)
}
// TODO: Add dynamic config to preload redux-store
const store = createStore(reducers, {}, applyMiddleware(...middleware))

// Render the application
ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()

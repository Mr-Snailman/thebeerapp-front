import App from './App'
import { ConnectedRouter } from 'connected-react-router'
import { Provider } from 'react-redux'
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import configureStore, { history } from './configureStore'
import * as serviceWorker from './serviceWorker'

// TODO: Add dynamic config to preload redux-store
const store = configureStore()

// Render the application
ReactDOM.render(
  <Provider store={ store }>
    <ConnectedRouter history={ history }>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()

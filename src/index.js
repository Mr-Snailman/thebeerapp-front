import App from './App'
import axios from 'axios'
import { ConnectedRouter } from 'connected-react-router'
import { Provider } from 'react-redux'
import React from 'react'
import ReactDOM from 'react-dom'
import configureStore, { history } from './configureStore'
import * as serviceWorker from './serviceWorker'

//axios.defaults.withCredentials = true
axios.defaults.baseURL = 'http://localhost:8080'

// TODO: Add dynamic config to preload redux-store
const preloadedState = {
  config: {
    publicPath: '/',
    routes: {
      root: '/',
      beerRecipes: '/beer/recipes',
    }
  }
}
const store = configureStore(preloadedState)

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

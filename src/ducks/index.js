import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import beerRecipes from './beerRecipes'

export default (history) => combineReducers({
  // Config is static from top level; needs a place in store, but no reducer
  config: (state = {}, action) => state,
  router: connectRouter(history),
  beerRecipes: beerRecipes,
})

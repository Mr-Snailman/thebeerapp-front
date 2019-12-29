import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import beerRecipes from './beerRecipes'

export default (history) => combineReducers({
  router: connectRouter(history),
  beerRecipes: beerRecipes,
})

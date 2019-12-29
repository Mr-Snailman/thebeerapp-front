import axios from 'axios'
import { combineActions, createAction, handleActions } from 'redux-actions'

const URI = '/recipes/'

const type = {
  DELETE_BEER_RECIPE: '@beerapp/recipes/DELETE_BEER_RECIPE',
  DELETE_BEER_RECIPE_FULFILLED: '@beerapp/recipes/DELETE_BEER_RECIPE_FULFILLED',
  CREATE_BEER_RECIPE: '@beerapp/recipes/CREATE_BEER_RECIPE',
  CREATE_BEER_RECIPE_FULFILLED: '@beerapp/recipes/CREATE_BEER_RECIPE_FULFILLED',
  GET_ALL_BEER_RECIPES: '@beerapp/recipes/GET_ALL_BEER_RECIPES',
  GET_ALL_BEER_RECIPES_FULFILLED: '@beerapp/recipes/GET_ALL_BEER_RECIPES_FULFILLED',
  GET_BEER_RECIPE: '@beerapp/recipes/GET_BEER_RECIPE',
  GET_BEER_RECIPE_FULFILLED: '@beerapp/recipes/GET_BEER_RECIPE_FULFILLED',
  UPDATE_BEER_RECIPE: '@beerapp/recipes/UPDATE_BEER_RECIPE',
  UPDATE_BEER_RECIPE_FULFILLED: '@beerapp/recipes/UPDATE_BEER_RECIPE_FULFILLED',
}

const thenSuccessClause = (suc) => suc.data
const deleteRecipePromise = (id) => axios.delete(URI + id).then(thenSuccessClause)
const createRecipePromise = (recipe) => axios.post(URI, recipe).then(thenSuccessClause)
const getAllRecipesPromise = () => axios.get(URI).then(thenSuccessClause)
const getRecipePromise = (id) => axios.get(URI + id).then(thenSuccessClause)
const updateRecipePromise = (id, recipe) => axios.put(URI + id, recipe).then(thenSuccessClause)

export const actions = {
  deleteRecipe: createAction(type.DELETE_BEER_RECIPE, deleteRecipePromise),
  createRecipe: createAction(type.CREATE_BEER_RECIPE, createRecipePromise),
  getAllRecipes: createAction(type.GET_ALL_BEER_RECIPES, getAllRecipesPromise),
  getRecipe: createAction(type.GET_BEER_RECIPE, getRecipePromise),
  updateRecipe: createAction(type.UPDATE_BEER_RECIPE, updateRecipePromise),
}

const initialState = {
  recipes: [],
  selectedRecipe: {},
}

export default handleActions({
  [type.DELETE_BEER_RECIPE_FULFILLED]: (state, {payload}) => ({
    ...state,
    recipes: state.recipes.filter(el => payload !== el.id),
  }),
  [type.CREATE_BEER_RECIPE_FULFILLED]: (state, {payload}) => ({
    ...state,
    recipes: [...state.recipes, payload],
    selectedRecipe: payload,
  }),
  [type.GET_ALL_BEER_RECIPES_FULFILLED]: (state, {payload}) => ({
    ...state,
    recipes: payload,
  }),
  [combineActions(type.GET_BEER_RECIPE_FULFILLED, type.UPDATE_BEER_RECIPE_FULFILLED)]: (state, {payload}) => ({
    ...state,
    recipes: state.recipes.map(el => payload.id === el.id ? payload : el),
    selectedRecipe: payload,
  }),
}, initialState)


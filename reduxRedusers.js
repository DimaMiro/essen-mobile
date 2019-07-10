import { combineReducers } from 'redux';
import ACTION_TYPES from './constants/ActionTypes';
const recipeReducer = function(state = [], action) {
    switch (action.type) {
        case ACTION_TYPES.ADD_RECIPE:
            return [
                ...state,
                {
                    recipe: action.recipe,
                }
            ]
        default:
          return state
      }
}

const list = (state, action) => {
    switch (action.type) {
        case ACTION_TYPES.ADD_LIST:
            return {
                id: action.id,
                name: action.name,
                ingredients: [action.ingredients]
            }
        default: 
            return state
    }
}

const listReducer = (state = [], action) => {
    switch (action.type) {
        case ACTION_TYPES.ADD_LIST:
            return [
                ...state,
                Object.assign(
                {
                    id: action.id,
                    name: action.name,
                    ingredients: [action.ingredients]
                }, action.list)
            ]
        case ACTION_TYPES.UPDATE_LIST:
            return state.map((list, index) => {
                
            })

        default:
          return state
      }
}

const reducers = combineReducers({
    recipeState: recipeReducer,
    listState: listReducer
});
export default reducers;
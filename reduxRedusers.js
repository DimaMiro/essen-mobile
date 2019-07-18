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

const listReducer = (state = [], action) => {
    switch (action.type) {
        case ACTION_TYPES.ADD_LIST:
            return [
                ...state,
                Object.assign(
                {id: action.id,
                    name: action.name,
                    dishes: [],
                    ingredients: {}
                }, action.payload)
            ]
        case ACTION_TYPES.UPDATE_LIST:
            return state.map(list=>{
                    if (list.id === action.payload.id) {
                        return action.payload
                    }
                    return list
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
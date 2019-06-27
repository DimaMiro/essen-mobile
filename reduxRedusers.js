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

const listReducer = function(state = {}, action) {
    return state;
}

const reducers = combineReducers({
    recipeState: recipeReducer,
    listState: listReducer
});
export default reducers;
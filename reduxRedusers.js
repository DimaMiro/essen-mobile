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

const listReducer = function(state = [], action) {
    switch (action.type) {
        case ACTION_TYPES.ADD_LIST:
            return [
                ...state,
                {
                    list: {
                        listId: (state.length - 1) + 1,
                        listName: action.name,
                        ingredients: [action.ingredients]
                    },
                }
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
import { combineReducers } from 'redux';
import ACTION_TYPES from './constants/ActionTypes';
// const loadingReducer = function(state = {isLoadingComplete = false}, action){
//     if (action.type === 'TOGGLE_LOADING'){
//         var newState = !state.isLoadingComplete
//         return newState
//     }
//     return state
// }
const recipeReducer = function(state = [], action) {
    // if (action.type === 'ADD_RECIPES') {
    //     var newState = state.concat([action.recipes]);
    //     return newState;
    //   }
    // return state
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
    // loadingState: loadingReducer,
    recipeState: recipeReducer,
    listState: listReducer
});
export default reducers;
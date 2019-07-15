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

// const list = (state, action) => {
//     switch (action.type) {
//         case ACTION_TYPES.ADD_LIST:
//             return {
//                 id: action.id,
//                 name: action.name,
//                 dishes: [],
//                 ingredients: {}
//             }
//         case ACTION_TYPES.UPDATE_LIST:
//             return Object.assign(
//                 {id: action.id,
//                     name: action.name,
//                     dishes: [],
//                     ingredients: {}
//                 })
//         default: 
//             return state
//     }
// }

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
                // list(undefined,action)
            ]
        case ACTION_TYPES.UPDATE_LIST:
            return state.map(list=>{
                    if (list.id === action.payload.id) {
                        return action.payload
                    }
                    return list
                })
            // return state.map(list=>{
            //         if (list.id === action.id) {
            //             Object.assign({}, state, action.list)
                        
            //         }
            //     })
            // return state.map((list) => {
            //     if (action.id == list.id) {
            //         return {
            //             ...list,
            //             ...action.list
            //         }
            //     }
                

            //     // console.log(l)
            //     // if (action.list.name == list.name){
            //     //     // return Object.assign({}, state, action.list)
            //         // list(l,action)
            //     // }
            // })

        default:
          return state
      }
}

const reducers = combineReducers({
    recipeState: recipeReducer,
    listState: listReducer
});
export default reducers;
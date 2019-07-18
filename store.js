import { createStore, compose } from 'redux';
import ACTION_TYPES from './constants/ActionTypes';
import reducers from "./reduxRedusers";
import {loadState, saveState} from './localStorage';
import throttle from 'lodash/throttle'



const persistedState = loadState().then(result => {
    if (result !== null) {
        result.map(list=>{
            store.dispatch({
                type: ACTION_TYPES.ADD_LIST,
                payload: list
            })
            
        })
    }
})


const store = createStore(
    reducers,
    compose(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()),
);

store.subscribe(throttle(() => {
    saveState(store.getState().listState)
  }, 1000))


export default store
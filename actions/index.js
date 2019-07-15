import ACTION_TYPES from '../constants/ActionTypes';
let nextId = 0
export const addList = (list) => {
  return {
    type: ACTION_TYPES.ADD_LIST,
    id: nextId++,
    list: list
  }
}

export const updateList = (list) => {
  return {
    type: ACTION_TYPES.UPDATE_LIST,
    list: list
  }
}
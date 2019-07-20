import ACTION_TYPES from '../constants/ActionTypes';
import uuid from "uuid"
export const addList = (list) => {
  return {
    type: ACTION_TYPES.ADD_LIST,
    payload: {
      id: uuid.v4(),
      ...list
    }
  }
}

export const updateList = (list) => {
  return {
    type: ACTION_TYPES.UPDATE_LIST,
    payload: list
  }
}

export const deleteList = (id) => {
  return {
    type: ACTION_TYPES.DELETE_LIST,
    payload: id
  }
}
import {ADD_TODO_ITEM, CHANGE_INPUT_VALUE, DELETE_TODO_ITEM} from "./actionTpyes";

export const getInputChangeAction = value => ({
  type: CHANGE_INPUT_VALUE,
  value
})

export const getAddItemAction = () => ({
  type: ADD_TODO_ITEM
})

export const getDeleteItemAction = (value) => ({
  type: DELETE_TODO_ITEM,
  value
})
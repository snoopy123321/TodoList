import {ADD_TODO_ITEM, CHANGE_INPUT_VALUE, DELETE_TODO_ITEM} from "./actionTpyes";

const defaultState = {
  inputValue: '',
  list: []
}
// reducer可以接收state，但是不能更改state
// action发出，store可以转发给reducer
const variable = (state = defaultState, action) => {
  if (action.type === CHANGE_INPUT_VALUE) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.inputValue = action.value
    return newState
  }
  if(action.type === ADD_TODO_ITEM){
    const newState = JSON.parse(JSON.stringify(state))
    // 另一种往list添加的方法
    // newState.list = [...newState.list, newState.inputValue]
    newState.list.push(newState.inputValue)
    newState.inputValue = ''
    return newState
  }
  if (action.type === DELETE_TODO_ITEM) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.list.splice(action.value, 1)
    return newState
  }
  return state
}

export default variable
import React, {useState} from 'react'
import 'antd/dist/antd.css';
import {Button, Input, List} from "antd";
import store from './store/index'
import {getAddItemAction, getDeleteItemAction, getInputChangeAction} from "./store/actionCreators";


function TodoList (){
  const [state, setState] = useState(store.getState())
// test git
  store.subscribe(handleStoreChange)

  function handleInputChange(e){
    const action = getInputChangeAction(e.target.value)
    store.dispatch(action)
  }
  function handleStoreChange(){
    setState(store.getState())
  }
  function handleBtnClick(){
    const action = getAddItemAction()
    store.dispatch(action)
  }
  function handleItemDelete(index){
    const action = getDeleteItemAction(index)
    store.dispatch(action)
  }

  return (
    <div style={{margin:'10px 0 0 10px'}}>
      <div>
        <Input
          value={state.inputValue}
          placeholder='请输入'
          style={{width:'300px', marginRight:'10px'}}
          onChange={handleInputChange}
        />
        <Button
          type='primary'
          onClick={handleBtnClick}
        >提交</Button>
      </div>
      <List
        style={{marginTop:'10px', width:'300px'}}
        bordered
        dataSource={state.list}
        renderItem={(item, index) => <List.Item onClick={handleItemDelete.bind(this, index)}>{item}</List.Item>}
      />
    </div>
  )
}
export default TodoList

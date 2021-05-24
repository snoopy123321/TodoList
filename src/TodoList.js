import React,{Fragment,useState}from 'react'
import TodoItem from './TodoItem'
import './style.css'

function TodoList(){

  const [inputValue,setInputValue] = useState('')
  const [list,setList] = useState([])

  function handleInputChange(e){
    setInputValue(e.target.value)
  }
  function handleBtnClick(){
    setList([...list,inputValue])
    setInputValue('')
  }
  function handleItemDelete(index){
    const lists = [...list]
    lists.splice(index,1)
    setList(lists)
  }
  function getTodoItem(){
    return list.map((item,index)=>{
      return (
        <TodoItem
          key={index}
          content={item}
          index={index}
          deleteItem={handleItemDelete}
        />
      )
    })
  }

  return (
      <Fragment>
        <label htmlFor='insert area'>输入内容：</label>
        <input
          id='insert area'
          className={'input'}
          value={inputValue}
          onChange={handleInputChange}/>
        <button onClick={handleBtnClick}>提交</button>
        <ul>
          {getTodoItem()}
        </ul>
      </Fragment>
  )

}

export default TodoList

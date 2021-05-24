import React from 'react'

function TodoItem(props){
  function handleClick() {
    props.deleteItem(props.index)
  }

  return(
    <div onClick={handleClick}>{props.content}</div>
  )
}

export default TodoItem

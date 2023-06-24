import useTodo from '../hooks/useTodo.js'
import TodoItem from './TodoItem.jsx'
import { useState } from 'react'

const TodoList = () => {
  const [inputValue, setInputValue] = useState('')
  const {list, addTodo, removeTodo, updateTodo} = useTodo()

  return (
    <div className={"bg-gray-200"}>
      <form>
        <input type="text" onChange={({target}) => {setInputValue(target.value)}}/>
        <button type="button" onClick={() => {addTodo(inputValue)}}>Guardar</button>
      </form>

      <ul>
        {list.map((todo, index) => (
          <TodoItem
            todo={todo}
            removeTodo={removeTodo}
            index={index}
            updateTodo={updateTodo}
          />
        ))}
      </ul>
    </div>
  )
}

export default TodoList

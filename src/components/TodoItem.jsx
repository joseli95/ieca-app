const TodoItem = ({todo, removeTodo, updateTodo, index}) => {
  return (
    <li className={"p-4 rounded-lg bg-slate-200 shadow-sm"}>
      <input
        type="checkbox"
        checked={todo.done}
        onChange={({target}) => {updateTodo(index, target.value)}}/>
      <span>{todo.text}</span>
      <button onClick={() => removeTodo(index)}>Eliminar</button>
    </li>
  )
}

export default TodoItem

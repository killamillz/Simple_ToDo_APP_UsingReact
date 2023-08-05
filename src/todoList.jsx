/* eslint-disable react/prop-types */

import TodoITem from './todoITem'

export default function TodoList({ todos, toggleTodo, deleteTodos }) {
  return (
     <ul className="list">
     {todos.length === 0 && `No Todos`}
     {todos.map((todo) => {
          return <TodoITem {...todo} key={todo.id} toggleTodo={toggleTodo} deleteTodos={deleteTodos}/>
          
     })}
     </ul>
  )
}

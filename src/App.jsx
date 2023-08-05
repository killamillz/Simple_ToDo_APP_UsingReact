/* eslint-disable react/jsx-key */
import { useState } from "react"
import "./styles.css"

export default function App() {
     const [newItem, setNewItem] = useState("")
     const [todos, setTodos] = useState([])

     function handleSubmit(e){
          e.preventDefault()

          setTodos(currentTodos => {
               return [
                    ...currentTodos,
                    { id: crypto.randomUUID(), title: newItem, completed: false }
               ]
          })

          setNewItem("")
     }

     function toggleTodo(id, completed) {
          setTodos(currentTodos => {
               return currentTodos.map(todo => {
                    if (todo.id === id) {
                         return { ...todo, completed }
                    }
                    return todo
               })
          })
     }

     function deleteTodos(id) {
          setTodos(currentTodos => {
               return currentTodos.filter(todo => todo.id !== id)
          })
     }
 

  return (
     <>
          <div >
               <form onSubmit={handleSubmit} className="new-item-form">
                    <div className="form-row">
                         <label htmlFor="item">New Task</label>
                         <input value={newItem}onChange={ e => setNewItem(e.target.value)} type="text" id="item" />
                    </div>
                    <button className="btn">Add</button>
               </form>

               <div className="container">
                    <h1 className="header">Todo List</h1>
                    <ul className="list">
                    {todos.length === 0 && `No Todos`}
                    {todos.map((todo) => {
                         return (
                         <li key={todo.id}>
                              <label>
                                   <input type="checkbox"  checked={todo.completed}
                                   onChange={e => toggleTodo(todo.id, e.target.checked)}
                                   />
                                   <p>{todo.title}</p>
                                   
                              </label>
                              <button className="btn btn-danger" onClick={() => deleteTodos(todo.id)}>Delete</button>
                         </li>
                         )
                    })}
                    </ul>
               </div>
          </div>
     </>
    
  )
}


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
     }
 

  return (
     <>
          <div >
               <form onSubmit={handleSubmit} className="new-item-form">
                    <div className="form-row">
                         <label htmlFor="item">New Task</label>
                         <input value={newItem}onChange={ e => setNewItem(e.target.value)}type="text" id="item" />
                    </div>
                    <button className="btn">Add</button>
               </form>

               <div className="container">
                    <h1 className="header">Todo List</h1>
                    <ul className="list">
                    {todos.map((todo) => {
                         return <li>
                              <label>
                                   <input type="checkbox " checked={todo.completed}/>
                                   {todo.title} 
                              </label>
                              <button className="btb btn-danger">Delete</button>
                         </li>
                    })}
                    </ul>
               </div>
          </div>
     </>
    
  )
}


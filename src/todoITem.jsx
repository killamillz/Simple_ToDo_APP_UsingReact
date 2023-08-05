/* eslint-disable react/prop-types */


export default function TodoITem({ completed, id, title, toggleTodo, deleteTodos}) {
  return (
     <li key={id}>
     <label>
          <input type="checkbox"  checked={completed}
          onChange={e => toggleTodo(id, e.target.checked)}
          />
          <p>{title}</p>
          
     </label>
     <button className="btn btn-danger" onClick={() => deleteTodos(id)}>Delete</button>
</li>
  )
}

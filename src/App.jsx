import { useState } from "react";
import "./styles.css";

export default function App(){
  const [newItem, setNewItem] =useState("");
  const[todos, setTodos] = useState([]);

// This function helps to summit the Todo.
  function handleSumbit(e){
    e.preventDefault();
    setTodos ( currentTodos => {
      return [
        ...currentTodos,
        {id:crypto.randomUUID(), title: newItem, completed: false},
      ]
    })
    setNewItem("");
  }

  // We use this function to move to the next todo.
  function toogleTodo(id,completed){
    setTodos(currentTodos => {
      return currentTodos.map(todo =>{
        if (todo.id === id) {
          return {...todo,completed}
        }
        return todo
      })
    })
  }

  // This function wll help to delete or remove the todo from the list.
  function deleteTodo(id){
    setTodos(currentTodos =>{
      return currentTodos.filter(todo => todo.id !== id)
    })
  }

  // This the Main Part where HTML and React is used with Some javascript to make the the page working.
  return ( <>
  <form onSubmit={handleSumbit} className="new-item-form">
  <div className="form-now">
    <label htmlFor="item">New Item</label>
    <input value={newItem} onChange={e => setNewItem(e.target.value)} type="text" id="item"/>
  </div>
  <button className="btn">Add</button>
  </form>
  <h1 className="header">TODO List</h1>
  <ul className="list">
    {todos.length ===0 && "No Todos You have"}
    {todos.map(todo => {
      return (
      <li key={todo.id}>
      <label>
        <input type="checkbox" checked={todo.completed}
        onChange={e => toogleTodo(todo.id, e.target.checked)}/>
        {todo.title}
      </label>
      <button onClick={() => deleteTodo(todo.id)} className="btn btn-remove">Remove</button>
    </li>
      )
    })}
  </ul>
  </>
  )
}
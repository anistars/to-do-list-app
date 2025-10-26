import { useState } from 'react'
import './App.css'
import Header from './components/Header.jsx'
import ToDoList from './components/ToDoList.jsx'

function App() {
  const [todos, setTodos] = useState([])
  const [newTodo, setNewTodo] = useState('')

  const addTask = () => {
    if (newTodo.trim() === '') return
    const newTask = {
      id: Date.now(),
      text: newTodo,
      completed: false,
    }
    setTodos([...todos, newTask])
    setNewTodo('')
    console.log(todos)
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const toggleComplete = (id) => {
    setTodos(todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed }
      }
      return todo
    }))
  }

  const updateTodo = (id, newTask) => {
    setTodos(todos.map(todo => {
      if (todo.id === id) {
        console.log(newTask)
        return { ...todo, text: newTask }
      }
      return todo
    }))
  }

  return (
    <div className="app-container min-vh-100 w-100 d-flex flex-column">
          <Header />
          <div className="container my-5 flex-grow-1 d-flex justify-content-center align-items-start">
        <div className="card shadow-lg w-100" style={{ maxWidth: '600px' }}>
          <div className="card-body">
            <div className="input-group mb-4">
            <input
              type="text"
              placeholder="Add a new task..."
              className="form-control"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)} />

            <button onClick={addTask} className="btn btn-primary">
              Add Task
            </button>
          </div>
          <ToDoList
            todos={todos}
            onDelete={deleteTodo}
            onToggle={toggleComplete}
            onEdit={updateTodo}
          />
        </div>
      </div>
    </div>
    <footer className="text-center py-3 text-muted small">
        © {new Date().getFullYear()} My To-Do App
      </footer>
    </div>
  )
}

export default App

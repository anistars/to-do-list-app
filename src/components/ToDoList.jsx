import ToDoItem from './ToDoItem'

function ToDoList({ todos, onDelete, onToggle, onEdit }) {
  if (todos.length === 0) {
    return (
      <p className="text-center text-muted mt-3">
        No tasks yet. Add one to get started!
      </p>
    )
  }

  return (
    <ul className="list-group">
      {todos.map((todo) => (
        <ToDoItem
          key={todo.id}
          todo={todo}
          onDelete={onDelete}
          onToggle={onToggle}
          onEdit={onEdit}
        />
      ))}
    </ul>
  )
}

export default ToDoList

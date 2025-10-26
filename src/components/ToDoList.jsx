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
    //List of Tasks to be displayed
    <ul className="list-group">
      {todos.map((todo) => (
        //Mapping through the list of tasks and passing props to ToDoItem component
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

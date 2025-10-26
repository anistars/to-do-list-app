import { useState } from 'react'

function ToDoItem({ todo, onDelete, onToggle, onEdit }) {
  const [isEditing, setIsEditing] = useState(false)
  const [editedText, setEditedText] = useState(todo.text)

  const handleEditSave = () => {
    onEdit(todo.id, editedText)
    setIsEditing(false)
  }

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <div className="d-flex align-items-center gap-2">
        <input
          type="checkbox"
          className="form-check-input"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
        />
        {isEditing ? (
          <input
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
            className="form-control form-control-sm"
            style={{ width: '250px'  }}
          />
        ) : (
          <span
            className={`${
              todo.completed ? 'text-decoration-line-through text-secondary' : ''
            }`}
          >
            {todo.text}
          </span>
        )}
      </div>

      <div className="d-flex gap-2">
        {isEditing ? (
          <button onClick={handleEditSave} className="btn btn-success btn-sm">
            <i className="bi bi-check-lg me-1"></i>Save
          </button>
        ) : (
          <button
            className="btn btn-warning btn-sm text-white"
            onClick={() => setIsEditing(true)}
            style={{ marginRight: '0.5rem' }}
          >
            <i className="bi bi-pencil-square me-1"></i>Edit
          </button>
        )}
        <button className="btn btn-danger btn-sm" onClick={() => onDelete(todo.id)}>
          <i className="bi bi-trash me-1"></i>Delete
        </button>
      </div>
    </li>
  )
}

export default ToDoItem

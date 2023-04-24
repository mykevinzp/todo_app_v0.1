import React from 'react'

export const Task = ({ todo, toggleComplete, deleteTask }) => {
    return (
        <div className='task-output'>
            <ul>
                <li onClick={() => toggleComplete(todo.id)} className={`${todo.completed ? 'taskCompleted' : ""}`}>{todo.todo}</li>
            </ul>
            <button onClick={() => deleteTask(todo.id)}>delete</button>
        </div>
    )
}

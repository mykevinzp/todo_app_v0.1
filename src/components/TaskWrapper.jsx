import { useState } from 'react'
import { TaskForm } from './TaskForm'
import { v4 as uuidv4 } from 'uuid'
import { Task } from './Task';

uuidv4();

export const TaskWrapper = () => {

    const [tasks, setTasks] = useState([])

    const addTask = task => {
        setTasks([...tasks, { id: uuidv4(), todo: task, completed: false }])
    }

    const toggleComplete = id => {
        setTasks(tasks.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo))
    }

    const deleteTask = id => {
        setTasks(tasks.filter(todo => todo.id !== id))
    }

    return (
        <div className='task-wrapper'>
            <h1>WHAT'S TODAY'S TASK</h1>
            <TaskForm addTask={addTask} />
            {tasks.map((taskes, index) => (
                <Task
                    todo={taskes}
                    key={index}
                    toggleComplete={toggleComplete}
                    deleteTask={deleteTask}
                />
            ))}
        </div>
    )
}

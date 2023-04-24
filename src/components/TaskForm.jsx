import { useState } from "react"

export const TaskForm = ({ addTask }) => {
    const [writeTask, setWriteTask] = useState("")

    const handleSubmit = e => {
        e.preventDefault();

        addTask(writeTask);

        setWriteTask("")
    }





    return (
        <form className='task-form' onSubmit={handleSubmit}>
            <input
                type='text'
                value={writeTask}
                placeholder='enter your task here'
                onChange={(e) => setWriteTask(e.target.value)}
            />

            <button disabled={!writeTask} type="submit">Add Task</button>
        </form>
    )
}

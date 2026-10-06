import React, { useState } from 'react'
import { useServices } from '../context/Services'

const TaskForm = () => {
  const {
    tasks,
    setTasks
  } = useServices()
  const [val, setVal] = useState('')

  function handleSubmitTask(e) {
    e.preventDefault()
    if(!val) return
    setTasks(prev => [
      ...prev, {
        id: crypto.randomUUID(),
        title: val,
        completed: false
      }
    ])
    setVal('')
  }

  return (
    <div>
      <form onSubmit={handleSubmitTask}>
        <input
          type="text"
          placeholder='Masukan text..'
          value={val}
          onChange={(e) => setVal(e.target.value)}
        />
        <button>Add Task</button>
      </form>
      
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            {task.title}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TaskForm
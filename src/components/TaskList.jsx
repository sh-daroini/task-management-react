import React from 'react'
import { useServices } from '../context/Services'
import TaskItem from './TaskItem'

const TaskList = () => {
  const {
    filteredTasks,
    toggleTask,
    deleteTask
  } = useServices()
  return (
    <section aria-label="Daftar tugas">
      {filteredTasks.length > 0 ? (
        <ul className="divide-y divide-white/[0.07]">
          {filteredTasks.map(task => (
            <TaskItem
              key={task.id}
              task={task}
              toggleTask={toggleTask}
              deleteTask={deleteTask}
            />
          ))}
        </ul>
      ) : (
        <div className="rounded-xl border border-dashed border-slate-700/80 px-5 py-10 text-center">
          <div aria-hidden="true" className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-indigo-500/10 text-xl text-indigo-300">✓</div>
          <p className="text-sm font-medium text-slate-200">Belum ada tugas di sini</p>
          <p className="mt-1 text-sm text-slate-500">Tambahkan tugas baru atau pilih filter lain.</p>
        </div>
      )}
    </section>
  )
}

export default TaskList

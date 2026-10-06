import React from 'react'

const TaskItem = ({ task, toggleTask, deleteTask }) => {
  return (
    <li className="group flex items-center justify-between gap-4 py-4 first:pt-1 last:pb-1">
      <label className="flex min-w-0 flex-1 cursor-pointer items-center gap-3">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleTask(task.id)}
          className="h-4 w-4 shrink-0 cursor-pointer rounded border-slate-600 bg-slate-900 text-indigo-500 focus:ring-2 focus:ring-indigo-500/40 focus:ring-offset-0"
        />
        <span className={`break-words text-sm transition-colors ${task.completed ? 'text-slate-500 line-through' : 'text-slate-200'}`}>
          {task.title}
        </span>
      </label>
      <button
        type="button"
        onClick={() => deleteTask(task.id)}
        aria-label={`Hapus tugas ${task.title}`}
        className="shrink-0 rounded-lg px-3 py-2 text-xs font-semibold text-slate-500 transition hover:bg-rose-500/10 hover:text-rose-300 focus:outline-none focus:ring-2 focus:ring-rose-400/40 sm:opacity-0 sm:group-hover:opacity-100 sm:focus:opacity-100"
      >
        Hapus
      </button>

    </li>
  )
}

export default TaskItem

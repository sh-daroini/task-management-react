import React, { useState } from 'react'
import { useServices } from '../context/Services'

const TaskForm = () => {
  const { setTasks } = useServices()
  const [val, setVal] = useState('')

  function handleSubmitTask(e) {
    e.preventDefault()
    const title = val.trim()
    if (!title) return
    setTasks(prev => [
      ...prev, {
        id: crypto.randomUUID(),
        title,
        completed: false
      }
    ])
    setVal('')
  }

  return (
    <section aria-labelledby="task-form-heading" className="rounded-2xl border border-white/10 bg-slate-950/50 p-5 sm:p-6">
      <div className="mb-4">
        <h2 id="task-form-heading" className="text-base font-semibold text-white">Tambah tugas</h2>
        <p className="mt-1 text-sm text-slate-400">Catat hal yang ingin kamu selesaikan.</p>
      </div>
      <form onSubmit={handleSubmitTask} className="flex flex-col gap-3 sm:flex-row">
        <input
          type="text"
          placeholder="Contoh: Selesaikan laporan mingguan"
          value={val}
          onChange={(e) => setVal(e.target.value)}
          aria-label="Nama tugas"
          className="input-task"
        />
        <button type="submit" className="btn-submit">
          <span aria-hidden="true" className="text-lg leading-none">+</span> Tambah tugas
        </button>
      </form>
    </section>
  )
}

export default TaskForm

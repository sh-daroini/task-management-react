import React from 'react'
import { useServices } from '../context/Services'

const TaskFilter = () => {
  const { filter, setFilter } = useServices()
  const filters = [
    { value: 'all', label: 'Semua' },
    { value: 'active', label: 'Berjalan' },
    { value: 'completed', label: 'Selesai' },
  ]

  return (
    <div role="group" aria-label="Filter tugas" className="inline-flex w-full rounded-xl border border-white/10 bg-slate-950/60 p-1 sm:w-auto">
      {filters.map(({ value, label }) => (
        <button
          key={value}
          type="button"
          aria-pressed={filter === value}
          onClick={() => setFilter(value)}
          className={`flex-1 rounded-lg px-3 py-2 text-sm font-medium transition sm:flex-none sm:px-4 ${filter === value ? 'bg-indigo-500/20 text-indigo-200 shadow-sm ring-1 ring-inset ring-indigo-400/20' : 'text-slate-400 hover:bg-white/5 hover:text-slate-200'}`}
        >
          {label}
        </button>
      ))}
    </div>
  )
}

export default TaskFilter

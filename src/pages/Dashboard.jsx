import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';
import TaskFilter from '../components/TaskFilter';
import { useServices } from '../context/Services';

const Dashboard = () => {
  const { user, logout } = useAuth();
  const { tasks } = useServices();
  const navigate = useNavigate();
  const completedCount = tasks.filter(task => task.completed).length;
  const activeCount = tasks.length - completedCount;

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    /* Wrapper Utama: Latar belakang gelap yang senada dengan Login */
    <div className="relative min-h-screen bg-slate-950 text-white overflow-hidden">

      {/* Efek Ambient Glow / Latar Belakang */}
      <div className="absolute w-96 h-96 bg-indigo-600 rounded-full -top-20 -right-20 blur-[150px] opacity-20 pointer-events-none"></div>
      <div className="absolute w-96 h-96 bg-purple-600 rounded-full bottom-0 left-0 blur-[150px] opacity-10 pointer-events-none"></div>

      {/* NAVBAR: Kaca Transparan (Glassmorphism) */}
      <nav className="relative z-10 border-b border-white/10 bg-white/[0.02] backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">

            {/* Logo / Brand */}
            <div className="flex-shrink-0">
              <span className="text-xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                MyDashboard
              </span>
            </div>

            {/* Menu Sisi Kanan: Informasi User & Tombol Logout */}
            <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-slate-900/60 p-1.5 pl-2 sm:gap-3 sm:pl-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-400 to-violet-600 text-sm font-bold text-white shadow-inner shadow-white/20">
                {(user?.name || user?.email || 'U').charAt(0).toUpperCase()}
              </div>
              <div className="min-w-0 pr-1">
                <p className="text-[10px] font-medium uppercase tracking-[0.14em] text-slate-500">Akun</p>
                <p className="max-w-28 truncate text-sm font-semibold text-slate-100 sm:max-w-40">
                  {user?.name || user?.email || 'Pengguna'}
                </p>
              </div>
              <span aria-hidden="true" className="h-7 w-px bg-white/10" />
              <button
                type="button"
                onClick={handleLogout}
                className="group inline-flex h-10 items-center justify-center gap-2 rounded-xl border border-transparent px-3 text-sm font-medium text-slate-400 transition hover:border-rose-400/20 hover:bg-rose-500/10 hover:text-rose-200 focus:outline-none focus:ring-2 focus:ring-rose-400/40"
                aria-label="Keluar dari akun"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.8" stroke="currentColor" className="h-4 w-4 transition-transform group-hover:translate-x-0.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75" />
                </svg>
                <span className="hidden sm:inline">Keluar</span>
              </button>
            </div>

          </div>
        </div>
      </nav>

      {/* DASHBOARD CONTENT AREA */}
      <main className="relative z-10 mx-auto max-w-5xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <section className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-500/[0.10] via-white/[0.035] to-violet-500/[0.06] p-5 shadow-2xl shadow-black/20 backdrop-blur-xl sm:p-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-indigo-300">Ruang kerjamu</p>
              <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Hai, {user?.name || 'Pengguna'} <span aria-hidden="true">👋</span>
              </h1>
              <p className="mt-2 max-w-xl text-sm leading-6 text-slate-400 sm:text-base">
                Susun prioritas dan selesaikan pekerjaanmu satu per satu.
              </p>
            </div>
            <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-950/40 px-4 py-3 sm:min-w-44">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-400/10 text-indigo-300" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="h-5 w-5"><path strokeLinecap="round" strokeLinejoin="round" d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01" /></svg>
              </span>
              <div>
                <p className="text-xs text-slate-400">Total tugas</p>
                <p className="text-xl font-bold tabular-nums text-white">{tasks.length}</p>
              </div>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3 border-t border-white/[0.08] pt-5 sm:grid-cols-3">
            <div className="rounded-xl bg-slate-950/30 px-4 py-3">
              <p className="text-xs text-slate-400">Belum selesai</p>
              <p className="mt-1 text-lg font-semibold tabular-nums text-indigo-200">{activeCount}</p>
            </div>
            <div className="rounded-xl bg-slate-950/30 px-4 py-3">
              <p className="text-xs text-slate-400">Selesai</p>
              <p className="mt-1 text-lg font-semibold tabular-nums text-emerald-300">{completedCount}</p>
            </div>
            <div className="col-span-2 hidden rounded-xl bg-slate-950/30 px-4 py-3 sm:col-span-1 sm:block">
              <p className="text-xs text-slate-400">Progres</p>
              <div className="mt-2 flex items-center gap-3">
                <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/10">
                  <div className="h-full rounded-full bg-gradient-to-r from-indigo-400 to-emerald-400 transition-all" style={{ width: `${tasks.length ? (completedCount / tasks.length) * 100 : 0}%` }} />
                </div>
                <span className="text-xs font-medium tabular-nums text-slate-300">{tasks.length ? Math.round((completedCount / tasks.length) * 100) : 0}%</span>
              </div>
            </div>
          </div>
        </section>

        <div className="mx-auto mt-6 max-w-4xl overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] shadow-2xl shadow-black/20 backdrop-blur-xl sm:mt-8">
          <div className="space-y-6 p-4 sm:p-6">
            <TaskForm />
            <div className="flex flex-col gap-4 border-b border-white/[0.07] pb-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-lg font-semibold text-white">Daftar tugas</h2>
                <p className="mt-1 text-sm text-slate-400">Atur dan pantau progres pekerjaanmu.</p>
              </div>
              <TaskFilter />
            </div>
            <TaskList />
          </div>
        </div>
      </main>

    </div>
  );
};

export default Dashboard;

import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import TaskForm from '../components/TaskForm';

const Dashboard = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

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
            <div className="flex items-center gap-4">
              <div className="hidden sm:block text-right">
                <p className="text-xs text-slate-400 font-medium">Logged in as</p>
                <p className="text-sm font-semibold text-slate-200">User Session</p>
              </div>

              {/* Tombol Logout bertema Red-Outline Subtle */}
              <button
                onClick={handleLogout}
                className="logout-btn"
              >
                {/* SVG Icon Logout (Heroicons) */}
                <svg xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-4 h-4 text-red-400 transition-colors duration-200 group-hover:text-white">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                </svg>
                <span>Logout</span>
              </button>
            </div>

          </div>
        </div>
      </nav>

      {/* DASHBOARD CONTENT AREA */}
      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="p-8 border border-white/10 shadow-2xl bg-white/[0.03] backdrop-blur-xl rounded-2xl">
          <h1 className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent mb-4">
            Selamat Datang di Dashboard!
          </h1>

          <div className="p-4 bg-slate-900/60 border border-slate-800 rounded-xl overflow-x-auto">
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
              Active Security Token
            </p>
            <code className="text-sm text-indigo-400 break-all font-mono selection:bg-indigo-500 selection:text-white">
              {user?.token || "No token detected"}
            </code>
          </div>
        </div>

        <div>
          <TaskForm />
        </div>
      </main>

    </div>
  );
};

export default Dashboard;

import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
import { createContext, useContext, useEffect, useState } from "react";

const ServicesContext = createContext(null);
const TASKS_STORAGE_KEY = 'task-manager-tasks';

function loadTasks() {
  try {
    const savedTasks = localStorage.getItem(TASKS_STORAGE_KEY);
    if (!savedTasks) return [];

    const parsedTasks = JSON.parse(savedTasks);
    return Array.isArray(parsedTasks) ? parsedTasks : [];
  } catch (error) {
    console.error('Gagal membaca daftar tugas dari localStorage:', error);
    return [];
  }
}

export const ServicesProvider = ({ children }) => {
  const [tasks, setTasks] = useState(loadTasks)
  const [filter, setFilter] = useState('all')
  const { login } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    try {
      localStorage.setItem(TASKS_STORAGE_KEY, JSON.stringify(tasks));
    } catch (error) {
      console.error('Gagal menyimpan daftar tugas ke localStorage:', error);
    }
  }, [tasks]);

  const filteredTasks = tasks.filter(task => {
    if (filter === 'active') return !task.completed
    if (filter === 'completed') return task.completed
    return true
  })

  function handleFormLogin(e) {
    e.preventDefault();
    login({ token: "dummy_token", name: "Syaihan" });
    navigate("/dashboard");
  }

  function toggleTask(id) {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  }

  const deleteTask = (id) => {
    setTasks(prevTasks =>
      prevTasks.filter(task => task.id !== id)
    );
  };

  const handleOAuthLogin = () => {
    window.location.href = 'https://backend-api.com'
  }
  const value = {
    tasks,
    setTasks,
    filter,
    setFilter,
    handleFormLogin,
    handleOAuthLogin,
    filteredTasks,
    toggleTask,
    deleteTask
  };

  return (
    <ServicesContext.Provider value={value}>
      {children}
    </ServicesContext.Provider>
  );
}

export const useServices = () => {
  const context = useContext(ServicesContext);
  if (!context) {
    throw new Error('useServices harus digunakan di dalam ServicesProvider');
  }
  return context;
}

import React, { useEffect } from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { useServices } from '../context/Services'

const Login = () => {
  const { handleFormLogin, handleOAuthLogin } = useServices()
  const { login } = useAuth()
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()

  useEffect(() => {
    const token = searchParams.get('token')
    if (token) {
      login({ token })
      navigate('/dashboard')
    }
  }, [searchParams, login, navigate])

  return (
    <div className="relative flex items-center justify-center min-h-screen px-4 overflow-hidden bg-slate-950 login-container">

      {/* Efek Ambient Glow / Blob Abstrak */}
      <div className="absolute w-72 h-72 bg-indigo-600 rounded-full -top-10 -left-10 blur-[100px] opacity-30 animate-pulse pointer-events-none"></div>
      <div className="absolute w-96 h-96 bg-purple-600 rounded-full -bottom-10 -right-10 blur-[120px] opacity-20 pointer-events-none"></div>

      {/* Container Card Login (Efek Glassmorphic) */}
      {/* Ditambahkan z-10 agar konten form berada di atas layer blob dan tetap jelas terbaca */}
      <div className="relative w-full max-w-md p-8 border border-white/10 shadow-2xl bg-white/[0.03] backdrop-blur-xl rounded-2xl z-10">

        {/* Header Form */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold tracking-tight text-white">Welcome Back</h2>
          <p className="mt-2 text-sm text-slate-400">Please enter your details to sign in.</p>
        </div>

        {/* Form Email & Password */}
        <form onSubmit={handleFormLogin} className="space-y-5">
          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
              Email Address
            </label>
            <input
              name="email"
              type="email"
              placeholder="name@company.com"
              required
              className="w-full px-4 py-3 text-white bg-white/5 border border-slate-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all placeholder-slate-600"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
              Password
            </label>
            <input
              name="password"
              type="password"
              placeholder="••••••••"
              required
              className="w-full px-4 py-3 text-white bg-white/5 border border-slate-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all placeholder-slate-600"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 font-semibold text-white bg-indigo-600 rounded-xl hover:bg-indigo-500 active:scale-[0.98] transition-all shadow-lg shadow-indigo-600/30"
          >
            Sign In
          </button>
        </form>

        {/* Pembatas */}
        <div className="relative flex py-5 items-center">
          <div className="flex-grow border-t border-slate-800"></div>
          <span className="flex-shrink mx-4 text-xs text-slate-500 uppercase tracking-wider">Or continue with</span>
          <div className="flex-grow border-t border-slate-800"></div>
        </div>

        {/* Tombol OAuth Google */}
        <button
          onClick={handleOAuthLogin}
          className="flex items-center justify-center w-full gap-3 py-3 text-sm font-medium text-white transition-all bg-slate-900 border border-slate-800 rounded-xl hover:bg-slate-800/80 active:scale-[0.98]"
        >
          {/* SVG Icon Google */}
          <svg className="w-5 h-5" viewBox="0 0 24 24" xmlns="http://w3.org">
            <path
              fill="#EA4335"
              d="M12.24 10.285V14.4h6.887c-.275 1.565-1.88 4.604-6.887 4.604-4.33 0-7.866-3.577-7.866-8s3.536-8 7.866-8c2.46 0 4.105 1.025 5.047 1.926l3.227-3.11C18.436 2.07 15.604 1 12.24 1 6.033 1 1 6.033 1 12.24s5.033 11.24 11.24 11.24c6.478 0 10.793-4.537 10.793-10.985 0-.74-.078-1.32-.176-1.97l-10.617-.225z"
            />
          </svg>

          Sign in with Google
        </button>

        {/* Link ke halaman Register */}
        <p className="mt-8 text-sm text-center text-slate-400">
          Belum punya akun?{' '}
          <Link to="/register" className="font-semibold text-indigo-400 hover:text-indigo-300 hover:underline transition-colors">
            Daftar di sini
          </Link>
        </p>

      </div>
    </div>
  )
}

export default Login

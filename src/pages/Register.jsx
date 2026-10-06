import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    // Kirim data registrasi ke backend...
    alert('Registrasi Berhasil! Silakan Login.');
    navigate('/login');
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <input type="text" placeholder="Nama" required />
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Daftar</button>
      </form>
      <p>Sudah punya akun? <Link to="/login">Login</Link></p>
    </div>
  );
};

export default Register;

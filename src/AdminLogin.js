import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'admin' && password === 'admin123') {
      localStorage.setItem('isAdmin', 'true');  // Set admin status in localStorage
      history.push('/add-blog');  
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className='flex items-center justify-center min-h-screen px-4 md:px-0' >
      <div className="max-w-md">
        <h1 className="text-2xl font-semibold font-header mb-4 text-center">Admin Login</h1>
        <form onSubmit={handleLogin} className="bg-black font-sans text-white p-6 rounded">
          <label>UserName</label>
          <input
            type="text"
            placeholder="Username"
            className="w-full p-2 mb-4 outline-none text-black rounded"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label>Password</label>
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 mb-4 outline-none text-black rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="bg-blue-400 hover:bg-blue-500 text-white px-4 py-2 rounded w-full">
            Login
          </button>
        </form>
      </div>
      </div>
    );
  };

  export default LoginPage;

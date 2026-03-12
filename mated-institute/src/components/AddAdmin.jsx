import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AddAdmin.css';

const AddAdmin = () => {
  const navigate = useNavigate();
  const [token] = useState(localStorage.getItem('adminToken'));
  const [form, setForm] = useState({ username: '', password: '' });
  const [msg, setMsg] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMsg('');
    try {
      const res = await fetch('/api/admin/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok) {
        setMsg('Admin created');
        setTimeout(() => navigate('/admin'), 1000);
      } else {
        setMsg(data.error || 'Failed to add');
      }
    } catch (err) {
      console.error(err);
      setMsg('Request error');
    }
  };

  // if not logged in just redirect to login page
  if (!token) {
    navigate('/admin');
    return null;
  }

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    navigate('/admin');
  };

  return (
    <section className="add-admin-page">
      <div className="container">
        <button className="btn logout" onClick={handleLogout} style={{ float: 'right' }}>
          Logout
        </button>
        <h2>Add Administrator</h2>
        <form onSubmit={handleSubmit} className="login-form">
          <input
            name="username"
            placeholder="Username"
            value={form.username}
            onChange={handleChange}
            required
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
          />
          <button type="submit" className="btn">
            Create
          </button>
        </form>
        {msg && <p className="error-msg">{msg}</p>}
      </div>
    </section>
  );
};

export default AddAdmin;

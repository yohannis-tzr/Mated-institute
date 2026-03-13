import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminPanel.css';

const AdminPanel = () => {
  const [token, setToken] = useState(localStorage.getItem('adminToken'));
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loginForm, setLoginForm] = useState({ username: '', password: '' });
  const [loginError, setLoginError] = useState('');
  const navigate = useNavigate();
  // state for add-admin page removed; navigation will handle it

  useEffect(() => {
    if (token) {
      fetchBookings();
    }
  }, [token]);

  const handleLogout = () => {
    setToken(null);
    localStorage.removeItem('adminToken');
    navigate('/admin');
  };

  const fetchBookings = () => {
    setLoading(true);
    fetch('http://localhost:4002/api/bookings', {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => {
        if (!res.ok) throw new Error('Unauthorized');
        return res.json();
      })
      .then((data) => {
        setBookings(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
        if (err.message === 'Unauthorized') {
          setToken(null);
          localStorage.removeItem('adminToken');
        }
      });
  };

  const handleDone = async (id) => {
    if (!window.confirm('Are you sure you want to delete this booking?')) return;
    try {
      const res = await fetch(`http://localhost:4002/api/bookings/${id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` },
      });
      if (res.ok) {
        setBookings((bks) => bks.filter((b) => b.id !== id));
      } else {
        console.error('delete failed');
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginForm((f) => ({ ...f, [name]: value }));
  };


  const handleLogin = async (e) => {
    e.preventDefault();
    setLoginError('');
    try {
      const res = await fetch('http://localhost:4002/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(loginForm),
      });
      const data = await res.json();
      if (res.ok && data.token) {
        setToken(data.token);
        localStorage.setItem('adminToken', data.token);
      } else {
        setLoginError(data.error || 'Login failed');
      }
    } catch (err) {
      console.error(err);
      setLoginError('Login error');
    }
  };

  // no longer using change password functionality

  if (!token) {
    return (
      <section className="admin-panel">
        <div className="container">
          <h2>Admin Login</h2>
          <form onSubmit={handleLogin} className="login-form">
            <input
              name="username"
              placeholder="Username"
              value={loginForm.username}
              onChange={handleLoginChange}
              required
            />
            <input
              name="password"
              type="password"
              placeholder="Password"
              value={loginForm.password}
              onChange={handleLoginChange}
              required
            />
            <button type="submit" className="btn">
              Login
            </button>
            {loginError && <p className="error-msg">{loginError}</p>}
          </form>
        </div>
      </section>
    );
  }

  return (
    <section className="admin-panel">
      <div className="container">
        <h2>Admin - Bookings</h2>
        <button
          className="btn logout"
          onClick={handleLogout}
        >
          Logout
        </button>

        {loading && <p>Loading...</p>}
        {!loading && (
          <>
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Type</th>
                  <th>Details</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((b) => (
                  <tr key={b.id}>
                    <td>{b.id}</td>
                    <td>{b.type}</td>
                    <td>
                      {b.type === 'private' ? (
                        <div>
                          <p>Name: {b.name}</p>
                          <p>Age: {b.age}</p>
                          <p>Sex: {b.sex}</p>
                          <p>Level: {b.level}</p>
                          {b.phone && <p>Phone: {b.phone}</p>}
                          {b.email && <p>Email: {b.email}</p>}
                        </div>
                      ) : b.type === 'company' ? (
                        <div>
                          <p>Company: {b.company}</p>
                          <p>Employees: {b.employees}</p>
                          {b.phone && <p>Phone: {b.phone}</p>}
                          {b.email && <p>Email: {b.email}</p>}
                        </div>
                      ) : b.type === 'consultation' ? (
                        <div>
                          <p>Name: {b.name}</p>
                          {b.phone && <p>Phone: {b.phone}</p>}
                          {b.email && <p>Email: {b.email}</p>}
                          {b.subject && <p>Subject: {b.subject}</p>}
                          {b.message && <p>Message: {b.message}</p>}
                        </div>
                      ) : (
                        <div>
                          <p>Name: {b.name}</p>
                          {b.phone && <p>Phone: {b.phone}</p>}
                          {b.email && <p>Email: {b.email}</p>}
                        </div>
                      )}
                    </td>
                    <td>
                      <button
                        className="btn delete"
                        onClick={() => handleDone(b.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button
              className="btn add-admin"
              onClick={() => navigate('/admin/add')}
            >
              Add Admin
            </button>
            <button className="btn logout bottom" onClick={handleLogout}>
              Logout
            </button>
          </>
        )}

      </div>
    </section>
  );
};

export default AdminPanel;

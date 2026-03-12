import React, { useEffect, useState } from 'react';
import './AdminPanel.css';

const AdminPanel = () => {
  const [token, setToken] = useState(localStorage.getItem('adminToken'));
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loginForm, setLoginForm] = useState({ username: '', password: '' });
  const [loginError, setLoginError] = useState('');
  const [changeForm, setChangeForm] = useState({ oldPassword: '', newPassword: '' });
  const [changeMsg, setChangeMsg] = useState('');

  useEffect(() => {
    if (token) {
      fetchBookings();
    }
  }, [token]);

  const fetchBookings = () => {
    setLoading(true);
    fetch('/api/bookings', {
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

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginForm((f) => ({ ...f, [name]: value }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoginError('');
    try {
      const res = await fetch('/api/admin/login', {
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

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setChangeForm((f) => ({ ...f, [name]: value }));
  };

  const handleChangePassword = async (e) => {
    e.preventDefault();
    setChangeMsg('');
    try {
      const res = await fetch('/api/admin/change-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(changeForm),
      });
      const data = await res.json();
      if (res.ok) {
        setChangeMsg('Password updated');
        setChangeForm({ oldPassword: '', newPassword: '' });
      } else {
        setChangeMsg(data.error || 'Failed to update');
      }
    } catch (err) {
      console.error(err);
      setChangeMsg('Request error');
    }
  };

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
          onClick={() => {
            setToken(null);
            localStorage.removeItem('adminToken');
          }}
        >
          Logout
        </button>

        {loading && <p>Loading...</p>}
        {!loading && (
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Type</th>
                <th>Details</th>
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
                      </div>
                    ) : (
                      <div>
                        <p>Company: {b.company}</p>
                        <p>Employees: {b.employees}</p>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        <section className="change-password">
          <h3>Change password</h3>
          <form onSubmit={handleChangePassword} className="login-form">
            <input
              name="oldPassword"
              type="password"
              placeholder="Current password"
              value={changeForm.oldPassword}
              onChange={handleChangeInput}
              required
            />
            <input
              name="newPassword"
              type="password"
              placeholder="New password"
              value={changeForm.newPassword}
              onChange={handleChangeInput}
              required
            />
            <button type="submit" className="btn">
              Update
            </button>
          </form>
          {changeMsg && <p className="error-msg">{changeMsg}</p>}
        </section>
      </div>
    </section>
  );
};

export default AdminPanel;

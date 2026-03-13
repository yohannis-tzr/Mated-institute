import React, { useState } from 'react';
import './Booking.css';

const Booking = () => {
  const [type, setType] = useState('private');
  const [form, setForm] = useState({
    name: '',
    age: '',
    sex: '',
    level: '',
    company: '',
    employees: '',
    phone: '',
    email: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = { type, ...form, phone: form.phone, email: form.email };
    try {
      const res = await fetch('http://localhost:4002/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok) {
        setStatus('success');
        setForm({ name: '', age: '', sex: '', level: '', company: '', employees: '', phone: '', email: '' });
      } else {
        console.error('booking error', data);
        setStatus(data.error || 'error');
      }
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  return (
    <section className="booking">
      <div className="container">
        <h2>Book a Session</h2>
        <form onSubmit={handleSubmit} className="booking-form">
          <div className="type-selector">
            <label>
              <input
                type="radio"
                name="type"
                value="private"
                checked={type === 'private'}
                onChange={() => setType('private')}
              />
              Private
            </label>
            <label>
              <input
                type="radio"
                name="type"
                value="company"
                checked={type === 'company'}
                onChange={() => setType('company')}
              />
              Company
            </label>
          </div>

          {type === 'private' ? (
            <>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Full Name"
                required
              />
              <input
                name="age"
                type="number"
                value={form.age}
                onChange={handleChange}
                placeholder="Age"
                required
              />
              <select name="sex" value={form.sex} onChange={handleChange} required>
                <option value="">Sex</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
              <select
                name="level"
                value={form.level}
                onChange={handleChange}
                required
              >
                <option value="">Level of knowledge</option>
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
                <option value="expert">Expert</option>
              </select>
            </>
          ) : (
            <>
              <input
                name="company"
                value={form.company}
                onChange={handleChange}
                placeholder="Company Name"
                required
              />
              <input
                name="employees"
                type="number"
                value={form.employees}
                onChange={handleChange}
                placeholder="Number of Employees"
                required
              />
            </>
          )}

          <input
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            required
          />
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email Address"
            required
          />

          <button type="submit" className="btn">
            Submit
          </button>
        </form>
        {status === 'success' && <p className="success-msg">Booking submitted!</p>}
        {status === 'error' && <p className="error-msg">Something went wrong.</p>}
        {status && status !== 'success' && status !== 'error' && <p className="error-msg">{status}</p>}
      </div>
    </section>
  );
};

export default Booking;

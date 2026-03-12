import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 4000;
const JWT_SECRET = process.env.JWT_SECRET || 'change_this_secret';

app.use(express.json());

// helper middleware for auth
function authMiddleware(req, res, next) {
  const auth = req.headers.authorization;
  if (!auth || !auth.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  const token = auth.slice(7);
  try {
    req.user = jwt.verify(token, JWT_SECRET);
    next();
  } catch (e) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
}

// initialize database and start server
let db;
async function initDb() {
  db = await open({
    filename: path.join(__dirname, 'bookings.db'),
    driver: sqlite3.Database,
  });

  await db.exec(`
    CREATE TABLE IF NOT EXISTS bookings (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      type TEXT NOT NULL,
      name TEXT,
      age INTEGER,
      sex TEXT,
      level TEXT,
      company TEXT,
      employees INTEGER
    )
  `);

  await db.exec(`
    CREATE TABLE IF NOT EXISTS admins (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      username TEXT UNIQUE,
      password TEXT
    )
  `);

  // ensure default admin
  const row = await db.get('SELECT * FROM admins WHERE username = ?', 'admin');
  if (!row) {
    const hash = await bcrypt.hash('123456', 10);
    await db.run('INSERT INTO admins (username, password) VALUES (?, ?)', 'admin', hash);
    console.log('default admin user created (admin / 123456)');
  }
}

// routes
app.post('/api/bookings', async (req, res) => {
  const { type, name, age, sex, level, company, employees } = req.body;
  try {
    const result = await db.run(
      `INSERT INTO bookings (type, name, age, sex, level, company, employees)
       VALUES (?, ?, ?, ?, ?, ?, ?)`,
      type,
      name || null,
      age || null,
      sex || null,
      level || null,
      company || null,
      employees || null
    );
    res.json({ id: result.lastID });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to save booking' });
  }
});

// require auth for listing bookings
app.get('/api/bookings', authMiddleware, async (req, res) => {
  try {
    const rows = await db.all('SELECT * FROM bookings ORDER BY id DESC');
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch bookings' });
  }
});

// allow deletion of individual booking
app.delete('/api/bookings/:id', authMiddleware, async (req, res) => {
  const { id } = req.params;
  try {
    await db.run('DELETE FROM bookings WHERE id = ?', id);
    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to delete booking' });
  }
});

app.post('/api/admin/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await db.get('SELECT * FROM admins WHERE username = ?', username);
    if (!user) return res.status(401).json({ error: 'Invalid credentials' });
    const ok = await bcrypt.compare(password, user.password);
    if (!ok) return res.status(401).json({ error: 'Invalid credentials' });
    const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Login failed' });
  }
});

app.post('/api/admin/change-password', authMiddleware, async (req, res) => {
  const { oldPassword, newPassword } = req.body;
  try {
    const user = await db.get('SELECT * FROM admins WHERE id = ?', req.user.id);
    const ok = await bcrypt.compare(oldPassword, user.password);
    if (!ok) return res.status(400).json({ error: 'Incorrect current password' });
    const hash = await bcrypt.hash(newPassword, 10);
    await db.run('UPDATE admins SET password = ? WHERE id = ?', hash, user.id);
    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to change password' });
  }
});

// create a new admin user
app.post('/api/admin/add', authMiddleware, async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) return res.status(400).json({ error: 'Missing fields' });
  try {
    const hash = await bcrypt.hash(password, 10);
    await db.run('INSERT INTO admins (username, password) VALUES (?, ?)', username, hash);
    res.json({ success: true });
  } catch (err) {
    console.error(err);
    if (err.message.includes('UNIQUE')) {
      return res.status(400).json({ error: 'Username already exists' });
    }
    res.status(500).json({ error: 'Failed to add admin' });
  }
});

// serve frontend build in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../dist')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
  });
}

// start after DB init
initDb()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server listening on http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.error('Failed to initialize database', err);
    process.exit(1);
  });

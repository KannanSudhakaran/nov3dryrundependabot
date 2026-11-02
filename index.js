const express = require('express');
const _ = require('lodash');
const jwt = require('jsonwebtoken');

const app = express();
app.use(express.json());

const SECRET = 'lab-only-secret';

app.get('/health', (req, res) => res.json({ status: 'ok' }));

app.post('/merge', (req, res) => {
  // _.merge on untrusted input: the classic prototype-pollution pattern
  const result = _.merge({}, req.body);
  res.json(result);
});

app.post('/token', (req, res) => {
  const token = jwt.sign({ user: req.body.user || 'guest' }, SECRET, { expiresIn: '1h' });
  res.json({ token });
});

if (require.main === module) {
  app.listen(3000, () => console.log('Listening on http://localhost:3000'));
}

module.exports = app;
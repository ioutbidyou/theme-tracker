const express = require('express');
const fs = require('fs');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/track', (req, res) => {
  const store = req.query.store || 'unknown';
  const timestamp = new Date().toISOString();
  const log = `${timestamp} - ${store}\n`;

  fs.appendFile('log.txt', log, err => {
    if (err) console.error('Error logging store:', err);
  });

  res.send('Tracked');
});

app.listen(port, () => {
  console.log(`Theme tracker running on port ${port}`);
});
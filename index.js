const express = require('express');
const app = express();
const port = 3000;

let hookBody = undefined;

app.post('/hook', (req, res) => {
  hookBody = req.body;
  res.send('ok');
});

app.get('/hook', (req, res) => {
  res.send(hookBody);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

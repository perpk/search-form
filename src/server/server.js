const express = require('express');

const app = express();
app.use(express.json());
app.use(express.urlencoded());

app.post('/api/search', (req, res) => {
  console.log(req.body);
  res.json([
    'peach',
    'pear',
    'orange',
    'tangerine',
    'durian',
    'bananas',
    'grapes',
    'apples',
    'pommegranade'
  ]);
});

app.get('/', (_, res) => {
  res.sendFile('./index.html', {
    root: __dirname.replace('/src/server', '/dist')
  });
});

app.get('/main.js', (_, res) => {
  res.sendFile('./main.js', {
    root: __dirname.replace('/src/server', '/dist')
  });
});

app.listen(3000, () => {
  console.log('started');
});

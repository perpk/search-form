const express = require('express');
const _ = require('lodash');
const app = express();
app.use(express.json());
app.use(express.urlencoded());

const data = [
  {
    fruit: 'peach',
    info: {
      price: '1€',
      vitamins: ['B'],
      origin: 'Southern Europe'
    }
  },
  {
    fruit: 'pear',
    info: {
      price: '2€',
      vitamins: ['C'],
      origin: 'Europe'
    }
  },
  {
    fruit: 'orange',
    info: {
      price: '3€',
      vitamins: ['C'],
      origin: 'Asia'
    }
  },
  {
    fruit: 'tangerine',
    info: {
      price: '2€',
      vitamins: ['C'],
      origin: 'Asia'
    }
  },
  {
    fruit: 'durian',
    info: {
      price: '1€',
      vitamins: ['A', 'C', 'D'],
      origin: 'Asia'
    }
  },
  {
    fruit: 'bananas',
    info: {
      price: '5€',
      vitamins: ['B'],
      origin: 'South America'
    }
  },
  {
    fruit: 'grapes',
    info: {
      price: '3€',
      vitamins: ['C'],
      origin: 'Europe'
    }
  },
  {
    fruit: 'apples',
    info: {
      price: '1€',
      vitamins: ['C', 'B'],
      origin: 'Europe'
    }
  },
  {
    fruit: 'pommegranade',
    info: {
      price: '2€',
      vitamins: ['C', 'A'],
      origin: 'Southern Europe'
    }
  }
];

app.post('/api/search', (req, res) => {
  console.log(req.body);
  res.json(_.map(data, (item) => item.fruit));
});

app.post('/api/info', (req, res) => {
  const matches = _.filter(data, (item) => {
    return item.fruit.includes(req.body.value);
  });
  res.json(matches);
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

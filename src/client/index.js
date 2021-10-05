const autoComplete = require('@tarekraafat/autocomplete.js');

import './index.css';

const autoCompleteJS = new autoComplete({
  placeHolder: 'namespace:artifact',
  data: {
    src: async () => {
      try {
        const source = await fetch('/api/search', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            search: document.getElementById('autoComplete').value
          })
        });
        const data = await source.json();
        return data;
      } catch (err) {
        console.log(err);
        return err;
      }
    }
  },
  resultItem: {
    highlight: true
  },
  events: {
    input: {
      focus: () => {
        if (autoCompleteJS.input.value.length) autoCompleteJS.start();
      }
    }
  },
  resultItem: {
    highlight: true
  }
});

document
  .querySelector('#autoComplete')
  .addEventListener('selection', function (event) {
    this.value = event.detail.selection.value;
  });

document
  .querySelector('#getResults')
  .addEventListener('click', async function (_) {
    await getResults();
  });

const getResults = async () => {
  await fetch('/api/info', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      value: document.getElementById('autoComplete').value
    });
  });
}

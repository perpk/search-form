const autoComplete = require('@tarekraafat/autocomplete.js');

import './index.css';

const autoCompleteJS = new autoComplete({
  placeHolder: 'namespace:artifact',
  data: {
    //src: ['tofu', 'lentils', 'cabbage']
    src: async () => {
      // const input = document.getElementById('autoComplete').value;
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
        console.log(data);
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

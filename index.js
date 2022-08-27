import {add} from './math.js'

const buttonId = document.getElementById('add');

buttonId?.addEventListener('click', function() {
  const valueOne = Math.floor(Math.random() * 10);
  const valueTwo = Math.floor(Math.random() * 10);
  add(valueOne, valueTwo);
})


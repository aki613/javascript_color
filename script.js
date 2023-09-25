// JavaScript
console.log('Hello world!');

console.log(document.getElementById('myColor').value);
document.getElementById('bodyText').textContent = '文字の置き換え';
document.getElementById('myColor').value;

const color = document.getElementById('myColor');
const text = document.getElementById('bodyText');

text.textContent = color.value;

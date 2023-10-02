// JavaScript


console.log('Hello world!');

console.log(document.getElementById('myColor').value);
document.getElementById('bodyText').textContent = '文字の置き換え';
document.getElementById('myColor').value;

text.textContent = color.value;

const color = document.getElementById('myColor');
const text = document.getElementById('bodyText');

function changeColor(){
    // カラーコードを表示
      text.textContent = color.value;
    }
    
    // 背景色を変更
  document.body.style.backgroundColor = color.value;


// カラーピッカーで色が選択されたら、changeColorを動作させる
color.addEventListener('input', changeColor);


text.textContent = color.value;

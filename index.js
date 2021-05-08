//入力されるテキスト
let answer;
//正誤判定
let correct = false;

while (correct = false) {
  answer = prompt('日本の首都は？');

  if (answer === '東京') {
    alert('正解です!');
    correct = true;
  } else {
    alert('不正解です!');
  }
}

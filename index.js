// Import stylesheets
import './style.css';

// Write Javascript code!
// const appDiv = document.getElementById('app');
// appDiv.innerHTML = `<h1>JS Starter</h1>`;

// Function candidate has to implement
function strangeTask(arr, n) {
  let arr1 = [];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > n) {
      var num = 0;
      while (arr[i] >= 1) {
        var r = arr[i] % 10;
        arr[i] = Math.floor(arr[i] / 10);
        num += r;
      }
      if (num < n) arr1.push(num);
    } else {
      if (arr[i] < n) arr1.push(arr[i]);
    }
  }
  return arr1.length;
}

//Driver Code
// var n = readline();
// var temp = readline().trim();
// var s = temp.split(' ');
// for (i = 0; i < n; i++) {
//   s[i] = Number(s[i]);
// }
var s = [4, 111, 112, 15, 103, 22];
var n = s.length;
var num = strangeTask(s, n);
console.log('ans is here');
console.log(num);
// print(num);

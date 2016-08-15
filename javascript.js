var text0 ="TEXT 0";
/*
var text1 ="TEXT 1";
var text2 ="TEXT 2";
var text1_1 ="TEXT 1_1";
*/

$(".main-text").text(text0);

function changeTextDa() {
  var centerText = document.getElementById('centerText');
  if (centerText.innerHTML === 'TEXT 0') {
    centerText.innerHTML = 'TEXT 1';
  } else if  (centerText.innerHTML === 'TEXT 1') {
    centerText.innerHTML = 'TEXT 1_1';
     }  else  {
    centerText.innerHTML = 'TEXT 1_1_1';
  }

}

function changeTextNe() {
  var centerText = document.getElementById('centerText');
  if (centerText.innerHTML === 'TEXT 0') {
    centerText.innerHTML = 'TEXT 2';
  } else {
    centerText.innerHTML = 'TEXT 2';
  }
}

document.getElementById('btnProduct').onclick = function () {
  calcCost();
};
// (document.getElementById('btnProduct')) --> Ссылаемся на элемент по идентификатору 
// (onclick) --> указываем, что все будет работать по клику
// (= function) --> приравниваем все к функции
// (calcCost()) --> функция

function calcCost() {
  var sP = document.getElementById('selectProduct').value;
  var qP = document.getElementById('quantityProduct').value;
  var total = sP * qP;
  document.getElementById('priceProduct').innerHTML = total;
  document.getElementById('infoProduct').style.display = 'block';

  if (sP == 0 || qP == 0) {
    document.getElementById('infoProduct').style.display = 'none';
    alert('Заполните все данные')
    return;
  }
}
//function calcCost() --> ссылаемся на функцию
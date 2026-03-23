document.getElementById('cardForm').onsubmit = function() {
  var number = document.getElementById('cardNumber').value;
  var name = document.getElementById('cardName').value;
  var date = document.getElementById('validThru').value;
  var cvc = document.getElementById('cvv').value;

  document.getElementById('result').innerHTML =
    'Номер: ' + number + '<br />' +
    'Имя: ' + name + '<br />' +
    'Срок: ' + date + '<br />' +
    'CVV: ' + cvc;

  return false;
}
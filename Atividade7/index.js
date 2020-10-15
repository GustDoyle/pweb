var n1 = prompt('Primeiro número:');
var n2 = prompt('Segundo número:');
var n3 = prompt('Terceiro número:');

maiorNumero(n1, n2, n3);

function maiorNumero(n1, n2, n3) {
  var arrayNumeros = [n1, n2, n3];

  arrayNumeros.sort((a, b) => a - b);

  alert(arrayNumeros[arrayNumeros.length - 1]);
}

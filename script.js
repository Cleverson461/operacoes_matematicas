/*
  Capturar 2 números e fazer as operações matemáticas de soma, subtração, multiplicação,
  divisão e resto da divisão.

  E para cada operação


  # Melhorar a lógica de programação, mostrar um alerta com o resultado

    - Perguntas corretas
    - Entender o problema

    [] Operadores matemáticos

*/

let num1 = Number(prompt("Digite o primeiro numero!"));
let num2 = Number(prompt("Digite o segundo numero!"));

const sum = num1 + num2;
const subtracao = num1 - num2;
const multiplicacao = num1 * num2;
const divisao = num1 / num2;
const rest = num1 % num2;

alert(`Soma ${sum}`);
alert(`Subtração ${subtracao}`);
alert(`Multiplicacao ${multiplicacao}`);
alert(`Divisao ${divisao}`);
alert(`Resto ${rest}`);

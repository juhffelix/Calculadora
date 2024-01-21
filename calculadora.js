function adicao(num1, num2) {
  return num1 + num2;
}

function subtracao(num1, num2) {
  return num1 - num2;
}

function multiplicacao(num1, num2) {
  return num1 * num2;
}

function divisao(num1, num2) {
  // Função para verificar divisão por 0
  if (num2 !== 0) {
    return num1 / num2;
  } else {
    return "Divisão por zero não é permitida";
  }
}

let numero1 = parseFloat(prompt("Digite o primeiro número na calculadora:"));
let numero2 = parseFloat(prompt("Digite o segundo número na calculadora:"));

// Realiza as operações e exibe os resultados
console.log("Adição:", adicao(numero1, numero2));
console.log("Subtração:", subtracao(numero1, numero2));
console.log("Multiplicação:", multiplicacao(numero1, numero2));
console.log("Divisão:", divisao(numero1, numero2));

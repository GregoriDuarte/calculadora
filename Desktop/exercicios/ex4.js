exercicio4.js
function executarOperacao(num1, num2, operacao) {
    return operacao(num1, num2);
  }
  
  function soma(a, b) {
    return a + b;
  }
  
  function subtracao(a, b) {
    return a - b;
  }
  
  function multiplicacao(a, b) {
    return a * b;
  }
  
  function divisao(a, b) {
    if (b === 0) {
      return "Erro: divisão por zero";
    }
    return a / b;
  }
  
  console.log(executarOperacao(100, 20, soma));        
  console.log(executarOperacao(2231, 9, subtracao));     
  console.log(executarOperacao(30, 3, multiplicacao)); 
  console.log(executarOperacao(10, 2, divisao));       
  console.log(executarOperacao(15, 7, divisao));     
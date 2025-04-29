exercicio3.js
function contarVogais(str) {
    const vogais = ['a', 'e', 'i', 'o', 'u'];
    
    str = str.toLowerCase();
    
    let contador = 0;
    for (let i = 0; i < str.length; i++) {
      if (vogais.includes(str[i])) {
        contador++;
      }
    }
    
    return contador;
  }
  
  let resultado = contarVogais("Exemplo de String");
  console.log(resultado);
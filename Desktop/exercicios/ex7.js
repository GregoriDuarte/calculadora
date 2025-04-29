exercicio7.js
function contagemRegressiva() {
    let tempo = 10; 
  
    const intervalo = setInterval(() => {
      console.log(tempo);
      tempo--;
  
      if (tempo < 0) {
        clearInterval(intervalo); 
        console.log("Tempo esgotado!"); 
      }
    }, 1000);
  }
  
  contagemRegressiva();
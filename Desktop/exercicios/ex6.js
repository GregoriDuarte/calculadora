exercicio6.js
function mostrarRelogio() {

    const data = new Date();
    

    const hora = String(data.getHours()).padStart(2, '0');
    const minuto = String(data.getMinutes()).padStart(2, '0');
    const segundo = String(data.getSeconds()).padStart(2, '0');
    

    console.clear();
    console.log(`${hora}:${minuto}:${segundo}`);
  }
  
  setInterval(mostrarRelogio, 1000);
  
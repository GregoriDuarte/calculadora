exercicio5.js
function mostrarDataHoraAtual() {

    const data = new Date();
    
    const dia = String(data.getDate()).padStart(2, '0');  
    const mes = String(data.getMonth() + 1).padStart(2, '0');  
    const ano = data.getFullYear();
    
    const hora = String(data.getHours()).padStart(2, '0');
    const minuto = String(data.getMinutes()).padStart(2, '0');
    const segundo = String(data.getSeconds()).padStart(2, '0');
    
    const dataHoraFormatada = `Hoje é ${dia}/${mes}/${ano} e agora são ${hora}:${minuto}:${segundo}`;
    

    console.log(dataHoraFormatada);
  }
  

  mostrarDataHoraAtual();
  
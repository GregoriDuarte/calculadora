exercicio8.js
let usuario = {
    nome: "Gregori Duarte",
    email: "gregori.duarte@aluno.senai.br",
    idade: 2
  };
  
  console.log("Objeto original:", usuario);
  
  let usuarioJSON = JSON.stringify(usuario);
  
  console.log("Objeto convertido para JSON:", usuarioJSON);
  
  let usuarioReconstruido = JSON.parse(usuarioJSON);
  
  console.log("Objeto reconvertido de volta para objeto:", usuarioReconstruido);
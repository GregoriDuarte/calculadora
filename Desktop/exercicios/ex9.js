exercicio9.js
let respostaApi = `{
    "tarefas": [
      { "descricao": "Lavar a louça", "concluida": true },
      { "descricao": "Estudar ingles", "concluida": false },
      { "descricao": "academia", "concluida": true }
    ]
  }`;
  
  let dados = JSON.parse(respostaApi);

  function imprimirTarefasConcluidas() {
    let tarefasConcluidas = dados.tarefas.filter(tarefa => tarefa.concluida);
  
    console.log("Tarefas concluídas:");
    tarefasConcluidas.forEach(tarefa => {
      console.log(tarefa.descricao);
    });
  }
  
  imprimirTarefasConcluidas();
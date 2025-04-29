let aluno = {
  nome: "Gregori Duarte",
  idade: 21,
  curso: "Engenharia (Uber)",
  notas: [7.5, 8.0, 9.5, 9.0]
};

function calcularMedia(aluno) {
  let soma = aluno.notas.reduce((acumulador, nota) => acumulador + nota, 0);
  let media = soma / aluno.notas.length;
  aluno.media = media.toFixed(2);
}


calcularMedia(aluno);


console.log(aluno);
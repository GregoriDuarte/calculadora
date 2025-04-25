const Tabuleiro = [];
let BarcoNaufragado = 0;
let quantidadeTiros = 10;

for (let l = 0; l < 5; l++) {
  Tabuleiro[l] = [];
  for (let c = 0; c < 5; c++) {
    Tabuleiro[l][c] = false;
  }
}

let barcosColocados = 0;
while (barcosColocados < 5) {
  let x = Math.floor(Math.random() * 5);
  let y = Math.floor(Math.random() * 5);
  if (!Tabuleiro[x][y]) {
    Tabuleiro[x][y] = true;
    barcosColocados++;
  }
}

function atirar() {
  if (quantidadeTiros === 0 || BarcoNaufragado === 5) {
    document.getElementById("mensagem").innerText = "Jogo Encerrado!";
    return;
  }

  let x = parseInt(document.getElementById("posX").value);
  let y = parseInt(document.getElementById("posY").value);

  if (isNaN(x) || isNaN(y) || x < 0 || x > 4 || y < 0 || y > 4) {
    document.getElementById("mensagem").innerText = "Coordenada inválida!";
    return;
  }

  if (Tabuleiro[x][y] === true) {
    document.getElementById("mensagem").innerText = "**** Barco Naufragado ****";
    BarcoNaufragado++;
    Tabuleiro[x][y] = false;
    document.getElementById("mensagem").innerText = "**** Tiro na Água ****";
  }

  quantidadeTiros--;

  document.getElementById("status").innerText =
    "Tiros restantes: " + quantidadeTiros + " | Barcos Naufragados: " + BarcoNaufragado;

  if (quantidadeTiros === 0 || BarcoNaufragado === 5) {
    document.getElementById("mensagem").innerText += "\nFIM DE JOGO";
  }
}
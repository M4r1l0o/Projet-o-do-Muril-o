const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");
const contadores = document.querySelectorAll(".contador");

const objetivos = [
  new Date("2024-12-31T23:59:59"),
  new Date("2024-12-31T23:59:59"),
  new Date("2024-12-31T23:59:59"),
  new Date("2024-12-31T23:59:59")
];

function formatarTempo(ms) {
  const dias = Math.floor(ms / (1000 * 60 * 60 * 24));
  const horas = Math.floor((ms % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((ms % (1000 * 60)) / 1000);
  
  return `${dias}d ${horas}h ${minutos}m ${segundos}s`;
}

function atualizarContadores() {
  let tempoAtual = new Date();
  
  contadores.forEach((contador, index) => {
    const tempo = objetivos[index] - tempoAtual;
    if (tempo > 0) {
      contador.textContent = formatarTempo(tempo);
    } else {
      contador.textContent = "Objetivo concluído!";
    }
  });
}

atualizarContadores();
setInterval(atualizarContadores, 1000);

for (let i = 0; i < botoes.length; i++) {
  botoes[i].onclick = function () {
    for (let j = 0; j < botoes.length; j++) {
      botoes[j].classList.remove("ativo");
      textos[j].classList.remove("ativo");
    }

    botoes[i].classList.add("ativo");
    textos[i].classList.add("ativo");
  };
}

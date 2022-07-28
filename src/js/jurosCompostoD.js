const valor = document.querySelector(".valor");
const porcentagem = document.querySelector(".porcentagem");
const resposta = document.querySelector(".resposta");
const dia = document.querySelector(".data");
const click = document.querySelector(".click");

function pegaValor() {
  valor.addEventListener("input", function () {
    valorFinal = valor.value;
    investimento = parseInt(valorFinal);
  });

  porcentagem.addEventListener("input", function () {
    porcentagemFinal = porcentagem.value;
    taxa_juros = parseInt(porcentagemFinal);
  });

  dia.addEventListener("input", function () {
    data = dia.value;
  });
}
pegaValor();
let juros_composto = 0;
meses = 1;
function jurosCompostoD() {
  for (let i = 0; i < meses; i++) {
    juros_composto = (investimento * taxa_juros) / 100;
    investimento += juros_composto;
  }
  conta = (juros_composto / 30) * data;
  resposta.textContent = conta.toFixed(3);
}

click.addEventListener("click", function () {
  jurosCompostoD();
});

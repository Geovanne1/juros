const valor = document.querySelector(".valor");
const porcentagem = document.querySelector(".porcentagem");
const resposta = document.querySelector(".resposta");
const dia = document.querySelector(".data");
const click = document.querySelector(".click");

function valorAtualizado() {
  valor.addEventListener("input", function () {
    valorFinal = valor.value;
    investimento = parseInt(valorFinal);
  });
  porcentagem.addEventListener("input", function () {
    porcentagemFinal = porcentagem.value;
    taxa_juros = parseInt(porcentagemFinal);
  });
  dia.addEventListener("input", function () {
    meses = dia.value;
  });
}
valorAtualizado();
let juros_composto = 0;
function jurosComposto() {
  for (var i = 0; i <= meses; i++) {
    juros_composto = (investimento * taxa_juros) / 100;
    investimento += juros_composto;
    console.log(juros_composto);
  }
  resposta.textContent = juros_composto.toFixed(3);
}

click.addEventListener("click", function () {
  jurosComposto();
});
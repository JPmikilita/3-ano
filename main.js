const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");

for (let i = 0; i < botoes.length; i++){
    botoes[i].onclick = function (){
        for (let j = 0; j < botoes.length; j++){
            botoes[j].classList.remove("ativo");
            botoes[j].classList.remove("ativo");
        }
        botoes[i].classList.add("ativo");
        botoes[i].classList.add("ativo");
    }
}
const contadores = document.querySelectorAll(".contador");
const tempoObjetivo = new Date("2024-12-01T00:00:00");
function calculaTempo (tempoObjetivo1){

let tempoAtual = new Date();



contadores[0].textContent = tempoObjetivo1 - tempoAtual;
let segundos = Math.floor(tempoFinal / 1000);
let minutos = Math.floor(segundos / 60);
let horas = Math.floor(segundos / 60);
let dias = Math.floor(segundos / 24);

segundos %= 60;
minutos %= 60;
horas %= 24;

return dias + "dias" + horas + "horas" + minutos + "minutos" + segundos + "segundos";

}
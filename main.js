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
const tempoObjetivo1 = new Date("2024-12-28T23:59:59");
const tempoObjetivo2 = new Date("2024-07-05T23:59:59");
const tempoObjetivo3 = new Date("2024-08-01T23:59:59");
const tempoObjetivo4 = new Date("2024-12-01T23:59:59");

const tempos = [
    tempoObjetivo1, tempoObjetivo2, tempoObjetivo3, tempoObjetivo4
]

for (let i=0; i< contadores.length; i++){
    contadores[i].textContent = calculaTempo(tempos[i]);
}
contadores[0].textContent = calculaTempo(tempoObjetivo1);

function calculaTempo (tempoObjetivo1){

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
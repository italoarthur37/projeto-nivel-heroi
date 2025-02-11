const readline = require("readline-sync"); // Precisa do readline-sync para poder executar no node

let nome = readline.question("Digite o nome do seu heroi: ");
let XP = parseInt(readline.question("Digite a quantidade de XP que seu heroi possui: "));

let elo;

if (XP <= 1000) {
    elo = "Ferro";
} else if (XP <= 2000) {
    elo = "Bronze";
} else if (XP <= 5000) {
    elo = "Prata";
} else if (XP <= 7000) {
    elo = "Ouro";
} else if (XP <= 8000) {
    elo = "Platina";
} else if (XP <= 9000) {
    elo = "Ascendente";
} else if (XP <= 10000) {
    elo = "Imortal";
} else {
    elo = "Radiante";
}

console.log(`O Herói de nome ${nome} está no nível de ${elo}`);
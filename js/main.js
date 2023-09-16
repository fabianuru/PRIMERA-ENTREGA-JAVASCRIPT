//TIRAR DADO
function tirarDado (){
     resultado =Math.ceil(Math.random() *6);
    return resultado
}

//ROUND
let round = 0;

//BESTIAS VS MUTANTES
let cantidadBestias = 10;
let cantidadMutantes =10;

//AMBOS CON VIDA
function ambosVivos() {
    return (cantidadBestias > 0) && (cantidadMutantes > 0);
}

while(ambosVivos()) {
round +=1;
    
console.log ("-----Round " + round +"-----");

let ataqueBestia = tirarDado ();
let defensaBestia = tirarDado ();

let ataqueMutante = tirarDado ();
let defensaMutante = tirarDado ();

console.log("-----BESTIA-----")
console.log ("Poder de ataque: " + ataqueBestia )
console.log ("Poder de defensa : " + defensaBestia)


console.log("-----MUTANTE-----")
console.log ("Poder de ataque : " + ataqueMutante )
console.log ("Poder de defensa : " + defensaMutante)

console.log("-----RESULTADO-----round" + round+ "-----")


if (ataqueBestia >= defensaMutante && ataqueMutante >= defensaBestia) {
    console.log ("Mueren las 2 criaturas")
    cantidadBestias -= (ataqueMutante- defensaBestia);
    cantidadMutantes -=(ataqueBestia-defensaMutante);
    console.log("Las Bestias pierden: " + (ataqueMutante- defensaBestia)+ " vidas");
    console.log("Los Mutantes pierden: " + (ataqueBestia-defensaMutante)+ " vidas");
    
} else if (ataqueBestia < defensaMutante && ataqueMutante < defensaBestia){
    console.log ("Ambas criaturas Sobreviven")
} else if (ataqueBestia >= defensaMutante && ataqueMutante < defensaBestia) {
    console.log ("Mutante Muere")
    cantidadMutantes -=(ataqueBestia-defensaMutante);

    console.log ("Bestia Sobrevive")
    console.log("Los Mutantes pierden: " + (ataqueBestia-defensaMutante)+ " vidas");
} else {
    console.log("Mutante Sobrevive")
    console.log("Bestia Muere")
    cantidadBestias -= (ataqueMutante- defensaBestia);

    console.log("Las Bestias pierden: " + (ataqueMutante- defensaBestia)+ " vidas");
}

console.log("VIDA BESTIAS: "+ cantidadBestias)
console.log("VIDA MUTANTES: "+ cantidadMutantes)

}

console.log ("----------RESULTADO FINAL----------")

if (cantidadBestias > cantidadMutantes) {
console.log("El juego ha terminado. Las Bestias ganan");
} else {
    console.log("El juego ha terminado. Los Mutantes ganan");
}
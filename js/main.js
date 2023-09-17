//TIRAR DADO
function tirarDado (){
     resultado =Math.ceil(Math.random() *6);
    return resultado
}

//ROUND
let round = 0;

//BESTIAS VS MUTANTES
let cantidadBestias = 8;
let cantidadMutantes =8;

//AMBOS CON VIDA
function ambosVivos() {
    return (cantidadBestias > 0) && (cantidadMutantes > 0);
}
//CONFIRMACIÓN
let nombreUsuario = prompt("Ingrese un nombre de usuario para continuar") 

while (!nombreUsuario) {
    nombreUsuario = prompt("Por favor ingresar un nombre de usuario para continuar") 
}


let confirmacion = confirm("Hola " + nombreUsuario +  "\n Bienvenid@ a la arena de CoderDeath, estas a punto de presenciar una de las batallas mas emocionantes, espeluznantes y sangrientas de la historia \n \n PARA CONTINUAR NECESITAMOS QUE DES TU CONSENTIMIENTO")

while (!confirmacion) {
    confirmacion = confirm("Debes dar tu consentimiento para continuar \n \n ¿Estas de acuerdo con continuar?")

}

while(ambosVivos()) {
round +=1;
    
console.log ("-----Round " + round +"-----");



let ataqueBestia = tirarDado ();
let defensaBestia = tirarDado ();

let ataqueMutante = tirarDado ();
let defensaMutante = tirarDado ();

alert("ROUND: " + round + "\n\n  La horda de Bestias invocan una BESTIA con: \n PODER DE ATAQUE: " + ataqueBestia + "\n PODER DE DEFENSA: " + defensaBestia + " \n\n  El ejército de Mutantes invocan una MUTANTE con:\n PODER DE ATAQUE: " + ataqueMutante + "\n PODER DE DEFENSA: " + defensaMutante)

console.log("-----CRIATURA BESTIA-----")
console.log ("Poder de ataque: " + ataqueBestia )
console.log ("Poder de defensa : " + defensaBestia)

console.log("-----VS-----")

console.log("-----CRIATURA MUTANTE-----")
console.log ("Poder de ataque : " + ataqueMutante )
console.log ("Poder de defensa : " + defensaMutante)

console.log("-----RESULTADO-----round" + round+ "-----")

if (ataqueBestia >= defensaMutante && ataqueMutante >= defensaBestia) {
    console.log ("Mueren las 2 criaturas")
    alert("Ha sido una gran batalla en los campos de CODERDEATH, ambas criaturas murieron en la lucha" + "\n \n Las bestias pierden : " + (ataqueMutante- defensaBestia)+ " vidas \n Los Mutantes pierden: " + (ataqueBestia-defensaMutante)+ " vidas")
    cantidadBestias -= (ataqueMutante- defensaBestia);
    cantidadMutantes -=(ataqueBestia-defensaMutante);
    console.log("Las Bestias pierden: " + (ataqueMutante- defensaBestia)+ " vidas");
    console.log("Los Mutantes pierden: " + (ataqueBestia-defensaMutante)+ " vidas");
    
} else if (ataqueBestia < defensaMutante && ataqueMutante < defensaBestia){
    alert("Ha sido una gran batalla en los campos de CODERDEATH, ambas criaturas sobrevivieron a la batalla \n \n ningún bando pierde vida esta ronda")
    console.log ("Ambas criaturas Sobreviven")
} else if (ataqueBestia >= defensaMutante && ataqueMutante < defensaBestia) {
    alert("La Bestia despedazó y acabó con la vida del Mutante \n \n Los Mutantes pierden: " + (ataqueBestia-defensaMutante)+ " vidas")
    console.log ("Mutante Muere")
    cantidadMutantes -=(ataqueBestia-defensaMutante);
    console.log ("Bestia Sobrevive")
    console.log("Los Mutantes pierden: " + (ataqueBestia-defensaMutante)+ " vidas");
} else {
    alert("El Mutante pudo dominar a la Bestia y acabó con su vida \n \n Las Bestias pierden: " + (ataqueMutante- defensaBestia)+ " vidas")
    console.log("Mutante Sobrevive")
    console.log("Bestia Muere")
    cantidadBestias -= (ataqueMutante- defensaBestia);
    console.log("Las Bestias pierden: " + (ataqueMutante- defensaBestia)+ " vidas");
}
alert ("-----RECUENTO DE BANDO----- \n \n VIDA BESTIAS: "+ cantidadBestias +"\n VIDA MUTANTES: "+ cantidadMutantes)
console.log("VIDA BESTIAS: "+ cantidadBestias)
console.log("VIDA MUTANTES: "+ cantidadMutantes)

}


console.log ("----------RESULTADO FINAL----------")

if (cantidadBestias > cantidadMutantes) {
alert("LA BATALLA POR EL DOMINIO DE CODERDEATH HA FINALIZADO \n \n La horda de bestias gana")
console.log("La batalla ha finalizado. La horda de bestias gana");
} else {
    alert("LA BATALLA POR EL DOMINIO DE CODERDEATH HA FINALIZADO \n \n  El ejército de  Mutantes gana")
    console.log("La batalla ha finalizado. El ejército de  Mutantes gana");
}
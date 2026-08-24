let nombrePelicula = "Shutter: Están entre nosotros";
let plataforma = "Netflix";

let year = 2004;
let nivelMiedo = 5;

let disponible = true;

console.log(nombrePelicula);
console.log(plataforma);
console.log(year);
console.log(nivelMiedo);
console.log(disponible);

console.log("Película recomendada: " + nombrePelicula);
console.log("Disponible en: " + plataforma);
console.log("Nivel de miedo: " + nivelMiedo + " de 5");

let miedoAlto = nivelMiedo >= 4;
console.log("¿Tiene un nivel de miedo alto? " + miedoAlto);

let recomendada = disponible && miedoAlto;
console.log("¿La película cumple con la recomendación? " + recomendada);

let diferenciaNivel = 5 - nivelMiedo;
console.log("Diferencia con el nivel máximo de miedo: " + diferenciaNivel);

alert("Bienvenido. Este sitio contiene recomendaciones para fanáticos del terror.");
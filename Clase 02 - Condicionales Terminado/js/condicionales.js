// let nombre = "    Fer              " //string = cadena de texto
// let numero = 2103 //number = numérica
// let numeroB = 2103.22 //number = numérica con decimales

// nombre.toLowerCase() //fer
// nombre.toUpperCase() //FER
// nombre.trim()        //'Fer'

// console.log()
// console.warn()
// console.error()

// console.log("Nuestro código funciona bien. Todo se ejecuta de acuerdo a lo esperado.");
// console.log("Nuestro código funciona bien. Todo se ejecuta de acuerdo a lo esperado.");
// console.log("Nuestro código funciona bien. Todo se ejecuta de acuerdo a lo esperado.");
// console.log("Nuestro código funciona bien. Todo se ejecuta de acuerdo a lo esperado.");
// console.warn("Nuestro código funciona mal!. Todo se ejecuta de acuerdo a lo esperado.");
// console.log("Nuestro código funciona bien. Todo se ejecuta de acuerdo a lo esperado.");
// console.error("Nuestro código funciona bien. Todo se ejecuta de acuerdo a lo esperado.");
// console.log("Nuestro código funciona bien. Todo se ejecuta de acuerdo a lo esperado.");

let numA = 2103
let numB = 1975
let numC = 2023

if (numA === 2103) {
    console.log("El número es el esperado.")
}

if (numA === numB) {
    console.log("Este mensaje no deberíamos verlo.")
}

//numA == 2103 => comparamos el valor de la variable con un valor escrito a mano
//numA === 2103 => comparamos el valor de la variable y además el tipo de dato, con el valor escrito a mano.

// let unColor = "Azul"

// if (unColor === "azul") {
//     console.log("El color es el esperado.")
// } else {
//     console.warn("El color definido no es el azul.")
// }

// let userName = prompt("Ingresa tu nombre de usuario:")

// if (userName.trim() === "") {
//     console.warn("No te has identificado correctamente.")
// } else {
//     console.log("✅ Bienvenid@ ", userName)
// }

// let mensaje = "Vendo 🖥️. Escucho ofertas." + " ¿Deseas realizar una oferta?"
// //let ofertaBase = 2000

// let ofertar = confirm(mensaje)

// if (ofertar === true) {
//     let ofertaDeUsuario = parseInt(prompt("Ingresa tu oferta:"))
//     if (ofertaDeUsuario < 1000) {
//         console.error("No way! Demasiada baja tu oferta.")
//     } else if (ofertaDeUsuario < 2000) {
//         console.warn("Estirate un poquito más.")
//     } else if (ofertaDeUsuario >= 2000) {
//         console.log("Oferta aceptada! ✅. Gracias por tu compra.")
//     } else {
//         console.warn("No se interpretó tu oferta. Hazla nuevamente.")
//     }
// }

//Operador lógico OR

let correoE = prompt("Ingresa tu Email:")
let passwd = prompt("Ingresa tu contraseña:")

if ((correoE !== "" && passwd !== "") || (correoE === "fer@nando.net")) {
    console.log("Bienvenid@ nuevamente,", correoE)
} else {
    console.warn("Ingresa un correo electrónico y/o contraseña válidos.")
}
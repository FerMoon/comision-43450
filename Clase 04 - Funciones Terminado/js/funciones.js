function login() {
    username = prompt("Ingresa tu nombre de usuario:")
    if (username.trim() !== "") {
        alert("✅ Bienvenid@ " + username)
    } else {
        alert("⛔️ Error en el dato ingresado.")
    }
}
//login()

/*
    deben representar una acción // su nombre debe ser imperativo (dar una orden)
    camelCase cuando tenemos más de una palabra
    PHP calcular_importe_con_iva
*/

//Funciones con parámetros
function calcularImporteConIVA(valorDeIVA) {
    let CostoDelProducto = parseFloat(prompt("Ingresa el valor del producto:"))
    if (CostoDelProducto > 0) {
        console.log("El producto con IVA cuesta:", CostoDelProducto * valorDeIVA)
    }
}
//calcularImporteConIVA(IVA) //paso un IVA definido en una variable o constante
//calcularImporteConIVA(1.17)//paso un IVA estático, del 17%
//calcularImporteConIVA(1.27)//paso un IVA estático, del 27%

function sumar(numA, numB) {
    if (typeof numA === 'number' && typeof numB === 'number') {
        console.log("Resultado de la suma:", numA + numB)
    }
}
// sumar(21, 28)
// sumar(75, 21)
// sumar(1975, 2023)

//Funciones con retorno
function calculadora() {
    let primerNro = parseFloat(prompt("Ingresa el primer número:"))
    let segundoNro = parseFloat(prompt("Ingresa el segundo número:"))
    let operacion = prompt("Elige la operación aritmética: (+, -, *, /").trim()
    switch (operacion) {
        case "+":
            return primerNro + segundoNro
        case "-":
            return primerNro - segundoNro
        case "*":
            return primerNro * segundoNro
        case "/":
            return primerNro / segundoNro
        default:
            console.warn("No pudimos realizar la operación aritmética.")
            const respuesta = confirm("¿Deseas intentar nuevamente?")
            if (respuesta) {
                calculadora()
            } else {
                return "⛔️ Error"
            }
    }
}
// //Llamar a la función
// let resultado = calculadora()
//     console.log("Resultado de la operación:", resultado)



//SCOPE DE VARIABLES

function mostrarUsuario() {
    console.log("Usuario:", username)
}

function ingresaNuevoUsuario() {
    //VARIBLE CON ALCANCE (SCOPE) LOCAL 
    let username = prompt("Ingresa un nuevo nombre de usuario:")
    console.log(username)
}

function filtrarProductos() {
    //código que filtra productos por categoria
    let resultado = "resultado del filtro"
    console.log(resultado)
}

function buscarProducto() {
    //código que busca un producto en un listado de productos
    let resultado = "resultado del filtro"
}

function imprimirResultado() {
    console.log(resultado)
}

// filtrarProductos()
// imprimirResultado()

//Funciones anónimas
const saludar = function() {
    console.log("Hola, coders!")
}
saludar()

//Arrow FUNCTIONS // funciones flecha
const saludarDeNuevo = () => {
    console.log("Hola, coders!")
}

const retornarSumaSimple = (numA, numB)=> numA + numB
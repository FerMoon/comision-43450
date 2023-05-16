const paises = ['Argentina', 'Bolivia', 'Chile', 'Colombia', 'Uruguay', 'Venezuela']
//                   0           1         2         3           4          5         6        7          8

//for       (inicio, limite, incremento)
//for       ... of //DOM
//for       ... in //objetos JS
//forEach   //arrays > funciones de orden superior

// for (let i = 0; i < paises.length; i++) {
//      console.log("Iterando el país.", paises[i])
// }

//SENTENCIA BREAK
// let nroLimite = parseInt(prompt("Ingresa un número menor a 1000:"))

// for (let i = 0; i < nroLimite; i++) {
//     if (i > 200) {
//         break //por si el usuario se va de mambo con el nro. ingresado
//     }
//     console.log("Iterando el país.", i)
// }

//SENTENCIA CONTINUE

// let nroLimite = parseInt(prompt("Ingresa un número menor a 1000:"))
// debugger
// for (let i = 0; i < nroLimite; i++) {
//     if (i === 7 || i === 14 || i === 21) {
//         continue //salteamos determinados números
//     }
//     console.log("Iterando el país.", i)
// }

//CICLO WILE

// let repetir = false

// while (repetir) {
//     let nro = parseInt(prompt("Ingrese n° mayor a 21: "))    
//     if (nro >= 21){
//         repetir = false
//         console.log("Le pegaste!") 
//     }
// }

// let repetir = false

// do {
//     let nro = parseInt(prompt("Ingrese n° mayor a 21: "))    
//     if (nro >= 21){
//         repetir = false
//         console.log("Le pegaste!") 
//     }
// } while (repetir)

let color = prompt("Elija en color de prenda:")

switch (color.toLowerCase().trim()) {
    case "blanco":
        console.log("Tenemos stock del producto en color", color)
        break;
    case "rojo":
        console.log("Tenemos stock del producto en color", color)
        break;
    case "azul":
        console.log("Tenemos stock del producto en color", color)
        break;
    default:
        console.warn("No comprendimos tu elección.")
        break;
}
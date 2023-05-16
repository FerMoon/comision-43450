const IVA = 1.21

// OBJETOS LITERALES - 1999 / 2000
const empleado1 = {
                    nombre: 'Joe McMillian', 
                    cargo: 'CEO', 
                    edad: 38, 
                    ingreso: '1981-03-21' //formato ISO 
                  }

const empleado2 = {
                    nombre: 'Cameron Howe', 
                    cargo: 'Programadora SR', 
                    edad: 31, 
                    ingreso: '1981-03-01' //formato ISO 
                  }

console.log(empleado1.nombre)
console.log(empleado2["nombre"])


// FUNCIONES CONSTRUCTORAS - 2009
// function Producto(id, nombre, importe, stock) {
//     this.id = id
//     this.nombre = nombre
//     this.importe = importe
//     this.stock = stock
//     this.importeConIVA = function(iva) {
//         return (this.importe * iva)
//     }
//     this.verificarPuntoDePedido = function() {
//         if (this.stock < 10) {
//             console.warn("Debes reponer el stock cuanto antes.")
//         } else {
//             console.log("El producto está OK de Stock.")
//         }
//     }
//     this.descontarDeStock = function(unidades) {
//         if (this.stock - unidades < 0) {
//             console.error("No se pueden descontar esas unidades del stock.")
//             return 
//         }
//         return this.stock = this.stock - unidades 
//     }
//     this.normalizarNombre = function() {
//         return this.nombre.toUpperCase()
//     }
// }

    const notebook = new Producto(123, 'Notebook 17 pulgadas', 150000, 12)
    const tablet = new Producto(234, 'Ipad 10.1', 250000, 22)
    const smartphone = new Producto(345, 'Iphone 18', 400000, 14)
    const smartwatch = new Producto(456, 'Apple watch 3.5', 120000, 5)


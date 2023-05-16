// CLASES JS - 2015 ES6
class Producto {
    constructor(id, nombre, importe, stock) {
        this.id = id
        this.nombre = nombre
        this.importe = importe
        this.stock = stock

    }
    importeConIVA(iva) {
        return (this.importe * iva)
    }
    verificarPuntoDePedido() {
        if (this.stock < 10) {
            console.warn("Debes reponer el stock cuanto antes.")
        } else {
            console.log("El producto está OK de Stock.")
        }
    }
    descontarDeStock(unidades) {
        if (this.stock - unidades < 0) {
            console.error("No se pueden descontar esas unidades del stock.")
            return
        }
        return this.stock = this.stock - unidades
    }
    normalizarNombre() {
        return this.nombre.toUpperCase()
    }
}



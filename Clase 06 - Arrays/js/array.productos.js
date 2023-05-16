//Creamos una función para generar números aleatorios.
const creoID = ()=> parseInt(Math.random() * 100000)



























/* DESDE AQUÍ PARA ABAJO, HAGAMOS DE CUENTA QUE NO HAY NADA */

function generarProductos() { //NO LE DEMOS BOLILLA
    // productos.push(new Producto(1234, "NOTEBOOK EXO E17", 79950))
    // productos.push(new Producto(2345, "MACBOOK AIR 13", 749900))
    // productos.push(new Producto(3456, "LENOVO IDEAPAD 13", 199949))
    // productos.push(new Producto(4567, "IPAD PRO 12", 219890))
    // productos.push(new Producto(5678, "LENOVO GAMER 15", 609090))
    // productos.push(new Producto(6789, "MACBOOK PRO 15", 959000))
    // productos.push(new Producto(7890, "ASUS GAMING PRO 17", 679800))
    // productos.push(new Producto(8901, "IPAD MINI 7.9", 229900))
}

function mostrarProductos() { //NO LE DEMOS BOLILLA
    let contenidoTablaHTML = ''
    const tabla = document.querySelector('tbody')
        tabla.innerHTML = ''
        for (producto of productos) {
            contenidoTablaHTML += `<tr>
                                       <td>${producto.id}</td>
                                       <td>${producto.nombre}</td>
                                       <td>$ ${producto.importe.toLocaleString()}</td>
                                   <tr>`
        }
        tabla.innerHTML = contenidoTablaHTML || ''
}
generarProductos()
mostrarProductos()
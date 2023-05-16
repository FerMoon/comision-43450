const totalCuotas = 6

function mostrarCuotas() {
    console.log("TODAS NUESTRAS PRENDAS TIENEN 👇")
    for(let i = 0; i < totalCuotas; i++) {
        console.log((i + 1) + ' cuotas sin interés.')
    }
    console.warn("APROVECHÁ NUESTRAS PROMOCIONES!")
}

function mostrarPrecio(codigo) {
    switch (parseInt(codigo)) {
        case 1:
            alert("El vestido cuesta $ 2500")
            break;
        case 2:
            alert("La remera cuesta $ 1750")
            break;
        case 3:
            alert("La bermuda cuesta $ 2100")
            break;
        case 4:
            alert("El pantalón de jean cuesta $ 4180")
            break;
        default:
            alert("🤔 No entendimos tu selección.")
    }
}

function consultarPrendas() {
    let respuesta = confirm("¿Deseas conocer el precio de alguna prenda?")
    if (respuesta) {
        let codigo = prompt("Ingresa el código numérico de la prenda a consultar:")
            if (codigo) {
                mostrarPrecio(codigo)
                mostrarCuotas()
            }
    } else {
        console.warn("No hay problema. Te esperamos en otro momento.")
    }
}
//SIMULADOR DE PRÉSTAMO
const interesFijo = 1.43


//Simular el préstamo con preguntas al usuario
function SimularPrestamo() {

    let monto = parseInt(prompt("Ingresa el monto del préstamo que necesitas:"))
    let totalCuotas = parseInt(prompt("¿En cuántas cuotas deseas devolverlo? (hasta 36)"))

        if (isNaN(monto) || isNaN(totalCuotas)) {
            console.error("El monto no es numérico. Vuelve a comenzar por favor.")
            return 
        }

        if (totalCuotas >= 1 && totalCuotas <= 36) {
            alert("A continuación, verás el desgloce de las " + totalCuotas + " cuotas para el monto $ " + monto)
            calcularCuotaMensual(monto, totalCuotas, interesFijo)
        } else {
            console.warn("El total de cuotas no puede superar las 36. Por favor, vuelve a comenzar.")
        }
}

function calcularCuotaMensual(monto, meses, interes) {
    console.log("DETALLE DE LAS CUOTAS: 👇")
    let desgloce = (monto * interes) / meses
        for (let i = 0; i < meses; i++) {
            console.log("Cuota " + (i + 1) + " AR$ " + desgloce.toFixed(2))
        }
}
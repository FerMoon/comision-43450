//MACHETE: FUNCIONES QUE DEBEMOS IR CREANDO
//recorrerPaises()
//agregarPais()    
//buscarPais()
//quitarPais()
//ordenarPaises()

function recorrerPaises() {
    console.clear()
    console.table(paises)
}

function agregarPais() {
    let nuevoPais = prompt("Ingresa el nuevo país a cargar:")
        if (paises.includes(nuevoPais)) {
            console.warn("El país ya existe en el array. No se puede agregar.")
        } else {
            paises.push(nuevoPais)
            recorrerPaises()
        }
}

    //paises.pop() //quita el último elemento //.shift() quita el primero de la lista
    //paises.splice(2, 1)
    //paises.splice(2, 1, 'Algo') //reemplaza un elemento por el tercer parámetro

function quitarPais() {
    let pais = prompt("Ingresa el país a quitar:")
    let indice = paises.indexOf(pais)
    if (indice > -1) {
        paises.splice(indice, 1)
        recorrerPaises()
    } else 
    {
        console.warn("No se encontró el país indicado:", pais)
    }
}

function ordenarPaises() {
    //paises.sort()    //ordena de manera ascendente
    //paises.reverse() // invierte el orden de los elementos del array
    paises.sort().reverse() //encademiento de métodos para orden descendente
    recorrerPaises()
}


(function() { //NO LE DEMOS BOLILLA A ESTA PARTE
    const listado = document.querySelector("ol")
        listado.innerHTML = ''
        for (pais of paises)
            listado.innerHTML += `<li>${pais}</li>`
})();
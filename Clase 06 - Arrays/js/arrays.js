//MACHETE: FUNCIONES QUE DEBEMOS IR CREANDO
//recorrerPaises()
//agregarPais()    
//buscarPais()
//quitarPais()
//ordenarPaises()










(function() { //NO LE DEMOS BOLILLA A ESTA PARTE
    const listado = document.querySelector("ol")
        listado.innerHTML = ''
        for (pais of paises)
            listado.innerHTML += `<li>${pais}</li>`
})();
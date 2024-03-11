/*
Hay que programar un carrito de compra de fruta.

El cliente eligirá que fruta quiere haciendo click sobre la imagen.
Un mensaje emergente le preguntará qué cantidad quiere.

Esta información se mostrará a la derecha, bajo "Total carrito", 
en <p id="carrito"></p>, de esta forma:
 Kiwi 2 kg x 4,20€/kg = 8,40 €

El total se actualizará con cada compra
 Total Compra: 8,40€
 
Se dará la opción de añadir o no más productos que se mostrarán
a continuación de los anteriores, y se sumará todo en el total. 
Por ejemplo:  
 Kiwi 2 kg x 4, 20€/kg = 8, 40€
 Pomelo 1 kg x 2,50€/kg = 2,50€
 Total Compra: 10,90€

Puedes modificar el código facilitado si ello te ayuda con el ejercicio,
pero deberás justificarlo.

Recuerda la importancia comentar con detalle el código.

 Lo importante es el cálculo, no los estilos css
 */


const htmlCarrito = document.getElementById("carrito") // carrito container in HTML
let preuFinal = document.getElementById("preuFinal") // the total of carrito in HTML
let totalCompra = 0.00  // to set the default 0.00EUR
preuFinal.innerText = totalCompra

let listaCompra = new Array() //list of shopping list


let tempU = "" // for the uppercase

let posicionElemento = listaCompra.length

// ----------------------- Pomelo ----------------------------
function agregar(nombreFruta){

    let infoFruta = new Object() // to make object in advance
    switch (nombreFruta){
        case "pomelo" :
            infoFruta.precio = 2.5
            infoFruta.nombre = "pomelo"
            tempU = infoFruta.nombre.slice(0,1).toUpperCase() //For the name of HTML List
            infoFruta.nombreCamel = tempU + infoFruta.nombre.slice(1) //For the name of HTML List
            infoFruta.unidad = "/kg"
        break;
        case "kiwi" :
            infoFruta.precio = 4.2
            infoFruta.nombre = "kiwi"
            tempU = infoFruta.nombre.slice(0,1).toUpperCase() //For the name of HTML List
            infoFruta.nombreCamel = tempU + infoFruta.nombre.slice(1) //For the name of HTML List
            infoFruta.unidad = "/kg"
        
    }
    infoFruta.cantidad = parseFloat(prompt(`¿Qué cantidad de ${infoFruta.nombre} desea?`)).toFixed(2)
    
    if(infoFruta.cantidad != "NaN"){

        infoFruta.total = Number(parseFloat(infoFruta.precio*infoFruta.cantidad).toFixed(2)) //calculation

        totalCompra += infoFruta.total 
        console.log("Total ", totalCompra)

        let textCarrito = "" // the containers to add to carrito

        textCarrito += `<p><i class="fa-solid fa-trash-can borrar" onclick="borrar(${posicionElemento})"></i>` //onclick="return this.parentElement.remove() 
        textCarrito += `${infoFruta.nombreCamel} ${infoFruta.cantidad} x ${infoFruta.precio}${infoFruta.unidad} = ${infoFruta.total}€</p>`
        
        htmlCarrito.innerHTML += textCarrito// adding the tag

        listaCompra.push(infoFruta)
        preuFinal.innerText = totalCompra

        posicionElemento++

    } else { // if the user insert text instead of number
        alert("Indique un numero por favor") // alert to guide 
    }

}

// -----------------------------------------------------------------


function borrar(posicion){
    console.log(posicion);
    listaCompra.splice(posicion,1)

}


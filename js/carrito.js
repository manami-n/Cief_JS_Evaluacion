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

 /*
what Im gonna do is,,,

when the person click the image
pop up an prompt asking the cantidad
get that information, and calculate with the price
adding the information on the right side
i can add and remove

preuFinal is the id for final price

    <p><i class="fa-solid fa-trash-can borrar" onclick="borrar()"></i>name 1.2 x 1.5/kg = 5.4€</p>
 */

const htmlCarrito = document.getElementById("carrito") // saving carrito area
let preuFinal = document.getElementById("preuFinal") // setting the total
preuFinal.innerText = parseFloat(0).toFixed(2) // for the beginning 0.00

// ----------------------- Pomelo ----------------------------
document.getElementById("pomelo").addEventListener("click", (e) =>{
    let precio = 2.50
    let cantidad = parseFloat(prompt("¿Qué cantidad de Pomelo desea?")).toFixed(2)
    
/*  Adding it later.  
    if(cantidad == "NaN"){
        alert("Indique un numero por favor")
    
    } else {
*/        
    let sumProduct = parseFloat(precio*cantidad).toFixed(2) //calculation

    let textCarrito = ""

    textCarrito += `<p><i class="fa-solid fa-trash-can borrar" onclick="borrar(this)"></i>` //onclick="return this.parentElement.remove() 
    textCarrito += `Pomelo ${cantidad} x ${precio} = ${sumProduct}€</p>`
    
    htmlCarrito.innerHTML += textCarrito// adding the tag
    preuFinal.innerText = parseFloat(sumProduct*1+preuFinal.innerText*1).toFixed(2) // changing the total

//    }   Adding it later
})

function borrar(e){
    e.parentNode.parentNode.removeChild(e.parentNode);
    preuFinal.innerText = parseFloat(preuFinal.innerText*1-1).toFixed(2) // changing the total
    return
}

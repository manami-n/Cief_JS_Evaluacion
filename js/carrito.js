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

/* ==========================================================
                Setting and defining
   ========================================================== */

const htmlCarrito = document.getElementById("carrito");  // saving HTML <div> where shopping list goes
const htmlPreuFinal = document.getElementById("preuFinal");  // saving HTML <span> where the total payment amount goes
let totalCompra = 0.00;   // totalCompra is the actual number goes to HTML #preuFinal, and set 0 as default
htmlPreuFinal.innerText = totalCompra;  // inserting totalCompra(0) into htmlPreuFinal


let listaCompra = new Array()  // making an array for a shopping cart list
let tempU = ""  // temporary container to make Upper(camel)case with fruits' name 
let posicionElemento = listaCompra.length // counting system for the shopping cart list to identify each added item


/* ==========================================================
                         Adding 
   ========================================================== */

function agregar (nombreFruta) {  // onclick="agregar(this.id)" so it brings #id of div

    let infoFruta = new Object();  // making a new object for all the information of one added item

      // ================   switch condition to add different data ========================
    switch (nombreFruta) {
        case "pomelo" :  // ============ pomelo ==============
            infoFruta.nombre = "pomelo"  // adding the fruits name, used in prompt
            tempU = infoFruta.nombre.slice(0,1).toUpperCase()  // making the fruits name camelcase
            infoFruta.nombreCamel = tempU + infoFruta.nombre.slice(1)  // adding the fruit name in camel, used in shopping cart
            infoFruta.precio = 2.5  // adding the sold price
            infoFruta.unidad = "/kg"  // adding the unit name, used in the shopping cart
        break;

        case "kiwi" :  // ============ kiwi ==============
            infoFruta.nombre = "kiwi"  // adding the fruits name, used in prompt
            tempU = infoFruta.nombre.slice(0,1).toUpperCase()  // making the fruits name camelcase
            infoFruta.nombreCamel = tempU + infoFruta.nombre.slice(1)  // adding the fruit name in camel, used in shopping cart
            infoFruta.precio = 4.2  // adding the sold price
            infoFruta.unidad = "/kg"  // adding the unit name, used in the shopping cart
        break;

        case "limon" :  // ============ limón ==============
            infoFruta.nombre = "limón"  // adding the fruits name, used in prompt
            tempU = infoFruta.nombre.slice(0,1).toUpperCase()  // making the fruits name camelcase
            infoFruta.nombreCamel = tempU + infoFruta.nombre.slice(1)  // adding the fruit name in camel, used in shopping cart
            infoFruta.precio = 1.2  // adding the sold price
            infoFruta.unidad = "/kg"  // adding the unit name, used in the shopping cart
        break;

        case "pinya" :  // ============ piña ==============
            infoFruta.nombre = "piña"  // adding the fruits name, used in prompt
            tempU = infoFruta.nombre.slice(0,1).toUpperCase()  // making the fruits name camelcase
            infoFruta.nombreCamel = tempU + infoFruta.nombre.slice(1)  // adding the fruit name in camel, used in shopping cart
            infoFruta.precio = 2.8  // adding the sold price
            infoFruta.unidad = "/ud"  // adding the unit name, used in the shopping cart
        break;

        case "sandia" :  // ============ sandía ==============
            infoFruta.nombre = "sandía"  // adding the fruits name, used in prompt
            tempU = infoFruta.nombre.slice(0,1).toUpperCase()  // making the fruits name camelcase
            infoFruta.nombreCamel = tempU + infoFruta.nombre.slice(1)  // adding the fruit name in camel, used in shopping cart
            infoFruta.precio = 1.2  // adding the sold price
            infoFruta.unidad = "/kg"  // adding the unit name, used in the shopping cart
        break;
        case "aguacate" :  // ============ aguacate ==============
            infoFruta.nombre = "aguacate"  // adding the fruits name, used in prompt
            tempU = infoFruta.nombre.slice(0,1).toUpperCase()  // making the fruits name camelcase
            infoFruta.nombreCamel = tempU + infoFruta.nombre.slice(1)  // adding the fruit name in camel, used in shopping cart
            infoFruta.precio = 2.5  // adding the sold price
            infoFruta.unidad = "/ud"  // adding the unit name, used in the shopping cart
        break;

        case "freson" :  // ============ fresón ==============
            infoFruta.nombre = "fresón"  // adding the fruits name, used in prompt
            tempU = infoFruta.nombre.slice(0,1).toUpperCase()  // making the fruits name camelcase
            infoFruta.nombreCamel = tempU + infoFruta.nombre.slice(1)  // adding the fruit name in camel, used in shopping cart
            infoFruta.precio = 6.2  // adding the sold price
            infoFruta.unidad = "/kg"  // adding the unit name, used in the shopping cart
        break;

        case "mandarina" :  // ============ mandarina ==============
            infoFruta.nombre = "mandarina"  // adding the fruits name, used in prompt
            tempU = infoFruta.nombre.slice(0,1).toUpperCase()  // making the fruits name camelcase
            infoFruta.nombreCamel = tempU + infoFruta.nombre.slice(1)  // adding the fruit name in camel, used in shopping cart
            infoFruta.precio = 1.9  // adding the sold price
            infoFruta.unidad = "/kg"  // adding the unit name, used in the shopping cart
        break;

        case "manzanaf" :  // ============ manzana Fuji ==============
            infoFruta.nombre = "manzana fuji"  // adding the fruits name, used in prompt
            tempU = infoFruta.nombre.slice(0,1).toUpperCase()  // making the fruits name camelcase
            infoFruta.nombreCamel = tempU + infoFruta.nombre.slice(1)  // adding the fruit name in camel, used in shopping cart
            infoFruta.precio = 4.2  // adding the sold price
            infoFruta.unidad = "/kg"  // adding the unit name, used in the shopping cart
        break;

        case "platano" :  // ============ platanos ==============
            infoFruta.nombre = "plátanos"  // adding the fruits name, used in prompt
            tempU = infoFruta.nombre.slice(0,1).toUpperCase()  // making the fruits name camelcase
            infoFruta.nombreCamel = tempU + infoFruta.nombre.slice(1)  // adding the fruit name in camel, used in shopping cart
            infoFruta.precio = 3.2  // adding the sold price
            infoFruta.unidad = "/kg"  // adding the unit name, used in the shopping cart
        break;

        case "pera" :  // ============ pera ==============
            infoFruta.nombre = "pera"  // adding the fruits name, used in prompt
            tempU = infoFruta.nombre.slice(0,1).toUpperCase()  // making the fruits name camelcase
            infoFruta.nombreCamel = tempU + infoFruta.nombre.slice(1)  // adding the fruit name in camel, used in shopping cart
            infoFruta.precio = 1.8  // adding the sold price
            infoFruta.unidad = "/kg"  // adding the unit name, used in the shopping cart
        break;

        case "manzanag" :  // ============ manzana golden ==============
            infoFruta.nombre = "manzana golden"  // adding the fruits name, used in prompt
            tempU = infoFruta.nombre.slice(0,1).toUpperCase()  // making the fruits name camelcase
            infoFruta.nombreCamel = tempU + infoFruta.nombre.slice(1)  // adding the fruit name in camel, used in shopping cart
            infoFruta.precio = 3.5  // adding the sold price
            infoFruta.unidad = "/kg"  // adding the unit name, used in the shopping cart
    }

    infoFruta.cantidad = prompt(`¿Qué cantidad de ${infoFruta.nombre} desea?`); // adding user input quantity 
    
    // ================   validation for numbers  ========================
    if (infoFruta.cantidad != "NaN") {  // if inserted value is number

        infoFruta.total = Math.round((infoFruta.precio*infoFruta.cantidad)*100) /100  // adding the total by ( price x quantity )
        
        totalCompra = Math.round((totalCompra+infoFruta.total)*100) /100  // updating the total payment amount
        htmlPreuFinal.innerText = totalCompra  // inserting to HTML for the visual part

        //textCarrito is what goes inside HTML list of shopping cart when an item is added
        let textCarrito = ""
        textCarrito += `<p><i class="fa-solid fa-trash-can borrar" onclick="borrar(this, ${posicionElemento})"></i>` 
        textCarrito += `${infoFruta.nombreCamel} ${infoFruta.cantidad} x ${infoFruta.precio}${infoFruta.unidad} = ${infoFruta.total}€</p>`
        
        htmlCarrito.innerHTML += textCarrito// adding the HTML

        listaCompra.push(infoFruta)
        posicionElemento++ //for counting up part for array

    } else {  // if inserted value is string
        alert("Indique un numero por favor")  // alert to guide 
    }

}


/* ==========================================================
                     Deleting
   ========================================================== */

function borrar(elemento, posicion) {
    
    totalCompra = Math.round((totalCompra-listaCompra[posicion].total)*100)/100;
    console.log(totalCompra)
    htmlPreuFinal.innerText = totalCompra;

    listaCompra.splice(posicion, 1);
    
    // Clear the HTML content of the shopping cart
    htmlCarrito.innerHTML = "";
    
    // Regenerate the HTML content for the entire shopping cart
    listaCompra.forEach((infoFruta, index) => {
    let textCarrito = "";
    textCarrito += `<p><i class="fa-solid fa-trash-can borrar" onclick="borrar(this, ${index})"></i>`;
    textCarrito += `${infoFruta.nombreCamel} ${infoFruta.cantidad} x ${infoFruta.precio}${infoFruta.unidad} = ${infoFruta.total}€</p>`;
    htmlCarrito.innerHTML += textCarrito;
    });
}

const caja = document.getElementById("caja");
const texto = document.getElementById("texto");



// Evento

caja.addEventListener("click", cambiarColor);


// Function para cambiar color

function cambiarColor() {
    // Al hacer click queremos que cambie de color, en este caso agregamos clases de boostrap
    caja.classList.add("bg-primary")

    //Como esta es la clase que da el color en un inicio, no nos deja que las demas cambien al ser la clase principal, por ende al hacer click tambien queremos que se elimine
    caja.classList.toggle("bg-success")
}



// El método classList.toggle hace lo siguiente:

// Si el elemento tiene la clase especificada (bg-success), la quitará.
// Si el elemento no tiene la clase especificada, la añadirá.
// Este método es particularmente útil cuando deseas cambiar el estado de un elemento con un solo método, sin necesidad de verificar si la clase está presente o no antes de añadirla o quitarla.
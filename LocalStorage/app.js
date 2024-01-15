// Selecciona el elemento HTML con la clase "storage" y lo asigna a la variable storageInput
const storageInput = document.querySelector(".storage");

// Selecciona el elemento HTML con la clase "text" y lo asigna a la variable text
const text = document.querySelector(".text");

// Selecciona el elemento HTML con la clase "button" y lo asigna a la variable button
const button = document.querySelector(".button");

// Recupera el valor almacenado en el almacenamiento local con la clave "textInput" y lo asigna a la variable storedInput
const storedInput = localStorage.getItem("textInput");

// Verifica si hay un valor almacenado en storedInput y, si es así, establece el contenido de texto del elemento con la clase "text" con ese valor
if (storedInput) {
    text.textContent = storedInput;
}

// Agrega un escuchador de eventos al elemento con la clase "storage" que se dispara cuando hay un evento de entrada (input)
storageInput.addEventListener("input", letra => {
    // Actualiza el contenido de texto del elemento con la clase "text" con el valor ingresado en el campo de entrada
    text.textContent = letra.target.value;
});

// Define una función llamada saveToLocalStorage que guarda el contenido de texto actual en el almacenamiento local con la clave "textInput"
const saveToLocalStorage = () => {
    localStorage.setItem("textInput", text.textContent);
}

// Agrega un escuchador de eventos al elemento con la clase "button" que se dispara cuando el botón es clickeado, y llama a la función saveToLocalStorage
button.addEventListener("click", saveToLocalStorage);

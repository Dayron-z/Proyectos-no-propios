const input = document.getElementById("ingresar-tarea");
const boton = document.querySelector("button");
const listaDeTareas = document.getElementById("lista-de-tareas");

function agregarTarea() {
    // Verificamos si hay algun valor en el input
    if (input.value) {

        // Creamos el div de las tareas que vamos a agregar
        let tareaNueva = document.createElement("div");
        // Le asignamos la clase que va a tener para que tome esos estilos que previamente le asignamos en el css
        tareaNueva.classList.add("tarea");
        // Creamos el elemento p que va a contener el texto de las tareas


        let texto = document.createElement("p");
        // Con el inner text le decimos a texto, que tome todo el contenido ingresa en el input con el .value
        texto.innerText = input.value
        tareaNueva.appendChild(texto)



        //Contenedor de iconos
        let iconos = document.createElement("div");
        iconos.classList.add("iconos");
        tareaNueva.appendChild(iconos);

        //Iconos
        let completar = document.createElement("i");
        completar.classList.add("bi", "bi-check-circle-fill", "icono-completar");
        completar.addEventListener("click" , completarTarea)

        let eliminar = document.createElement("i")
        eliminar.classList.add("bi", "bi-trash3-fill", "icono-eliminar")
        eliminar.addEventListener("click" , eliminarTarea)

        iconos.append(completar, eliminar)



        //Agregar tarea a la lista

        listaDeTareas.appendChild(tareaNueva);
    } else {
        alert("Por favor ingresa alguna tarea");
    }
}




//Toggle nos sirve para no tener que hacer condicionales sobre si se tiene la clase o no, hay que entender a toggle como un encendido y apagado, ya que funciona para hacer que una clase aparezca y desaparezca cada que la funcion se ejecute, en este caso, cada vez que se le de clic al boton de check
function completarTarea(e) {
    let tarea = e.target.parentElement.parentElement;
    tarea.classList.toggle("completada")

}

function eliminarTarea(e) {
    let tarea = e.target.parentElement.parentElement;
    tarea.remove();
}

boton.addEventListener("click", agregarTarea);


// Queda pendiente evento de enter
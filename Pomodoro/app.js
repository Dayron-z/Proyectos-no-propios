// En resumen:

// append se utiliza en el contexto del DOM para agregar elementos como hijos.
// push se utiliza en el contexto de arrays para agregar elementos al final del array.


const tasks = [];
let time = 0;
let timer = null;
let timerBreak = null;
let current = null;

const bAdd = document.querySelector("#bAdd");
const itTask = document.querySelector("#itTask");
const form = document.querySelector("#form");

form.addEventListener("submit", e => {
    //Anulamos el funcionamiento nativo de el envío de formularios que tiene javascript, ya que no queremos que se recargue la página al enviar
    e.preventDefault();

    if (itTask.value !== "") {
        // itTask.value es el valor que se está pasando como argumento a la función createTask
        createTask(itTask.value);
        // Para que cada vez que le de a submit, se limpie el input
        itTask.value = "";
        //
        renderTasks();

    }
});

// value es el parámetro que toma ese valor. El parámetro value es local a la función createTask y se usa para referirse al valor pasado cuando la función fue llamada.


function createTask(value) {

    const newTask = {
        // Esta forma de id me genera un identificador unico ej: pucxtzea8
        id: (Math.random() * 100).toString(36).slice(3),
        title: value,
        completed:false
    };

    // Le pasamos el objeto al array vacío que inicializamos en un prinicipio.
    // unshift, para que se agrueguen de primero, es decir lo contrario a push
    tasks.unshift(newTask);   
};

//Inyectar html

function renderTasks() {
    const html = tasks.map(task => {
        return `
            <div class = "task">
                <div class = "completed">${task.completed ?`<span class="done">Done</span>`:`<button class="start-button" data-id = "${task.id}">Start</button>`}</div>;
                <div class = "title">${task.title}</div>
            </div>
        `;
    });
};


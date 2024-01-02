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
        //Propiedad: Valor
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
        //La propiedad task.completed la tenemos incializada como false, entonces con el operador ternario en primera instancia le estamos preguntando que si task.completed es true, queremos que haga lo que se le asigna en ?, de lo contrario es decir que sea false, le estamos diciendo que ejecute lo de los :, es una forma de ver el funcionmiento del  operador ternario con una propiedad que cuenta con un valor booleano
        return `
            <div class = "task">
                <div class = "completed">${task.completed ?`<span class ="done">Done</span>` : `<button class = "start-button" data-id = "${task.id}">Start</button>`}</div>
                <div class = "title">${task.title}</div>
            </div>
        `
    });

    // Div que dejamos vacío en el html
    const taskContainer = document.querySelector("#tasks")
    //El metodo map me regresa un arreglo de strings, por lo que cada vez que colquemos algo me lo va a mandar con una coma, yo necesito que todo se un mismo string, por eso el uso de join es este caso


    //Es este caso tomamos desde una constante todo el html creado, se puede hacer todo dentro del mismo innerhtml, pero para desarrollos mas grandes es preferible ir con esta metodología, ya que en término de legibildad sería complicado de entender todo dentro del inner 
    taskContainer.innerHTML = html.join("")


    const startButtons = document.querySelectorAll(".task .start-button")

    startButtons.forEach(button =>{
        button.addEventListener("click", e =>{
            if (!timer) {
                const id = button.getAttribute("data-id");
                startButtonHandler(id);
                button.textContent = "In progress..."
            }
        })
    });
};

function startButtonHandler(id) {
    time = 25 * 60;
    current = id;
    //Retorneme solo los elementos que cumplan con la condición
    const taskIndex = tasks.findIndex(task => task.id === id)
    const taskName = document.querySelector("#time #taskName");
    taskName.textContent = tasks[taskIndex].title;




}

//Pendiente por terminar

// ${}
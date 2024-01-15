
// citas
let citas = [];
let indiceDelPaciente;

//Selectores
const nombreMascota = document.getElementById("name_pet");
const nombrePersona = document.getElementById("name_person");
const telefonoPersona = document.getElementById("phone_person");
const fechaDeCita = document.getElementById("date_cite");
const horaDeLaCita = document.getElementById("time_cite");
const sintomas = document.getElementById("description");
const button = document.getElementById("btnSave");

const buttonEliminar = document.querySelector(".btn-danger");



document.addEventListener("DOMContentLoaded",() => {
    const citasCache = JSON.parse(localStorage.getItem("citasCache"));

    if (citasCache) {
        citas = citasCache
        pintarHTML();
    }
})


button.addEventListener("click", (e)=>{
    e.preventDefault();
    obtenerValores();
    pintarHTML();
})
// Obtener valores

function obtenerValores() {




    let infoPaciente = {
        mascota: nombreMascota.value,
        dueño: nombrePersona.value,
        telefono: telefonoPersona.value,
        fecha: fechaDeCita.value,
        hora: horaDeLaCita.value,
        sintomas: sintomas.value
    }

   const infoLista = Object.values(infoPaciente)
    const vacio = infoLista.some((info) => info== "")
    if(vacio) return validation();


    document.querySelector("form").reset();


    if(citas[indiceDelPaciente]){
        citas[indiceDelPaciente] = infoPaciente
        indiceDelPaciente = undefined
    }else{
        citas.push(infoPaciente);
    }



}


//Inyectamos
function pintarHTML() {

    const datos =  document.querySelector("#container-citas")
    datos.innerHTML = "";

    citas.forEach((dato, index)=>{

        datos.innerHTML += `
        <div class="card card_cite"">
            <div class="card-body">
            <h5 class="card-title fs-3 fw-bold">${dato.mascota}</h5>
            <p class="card-text">
            <div class="d-flex gap-2">
                <span class="fw-bold">Propietario:</span>
                <span>${dato.dueño}</span>
            </div>
            <div class="d-flex gap-2">
                <span class="fw-bold">Telefono:</span>
                <span>${dato.telefono}</span>
            </div>
            <div class="d-flex gap-2">
                <span class="fw-bold">Fecha:</span>
                <span>${dato.fecha}</span>
            </div>

            <div class="d-flex gap-2">
                <span class="fw-bold">Hora:</span>
                <span>${dato.hora}</span>
            </div>
            <div class="d-flex gap-2">
                <span class="fw-bold">Sintomas:</span>
                <span>${dato.sintomas}</span>
            </div>
            </p>
            <div class="d-flex gap-2">
            <button class="btn btn-primary" onclick = "editarCita(${index})">Editar</button>
            <button class="btn btn-danger" onclick = "eliminarCita(${index})">Eliminar</button>
            </div>
        </div>
        </div>
    </div>
        `

        // Segunda forma en la que se puede hacer
    //  const deleteB =  datos.querySelector(".btn-danger")
    //  deleteB.addEventListener("click", () => {
    //     eliminarCita(index)
    //  })
    })
    localStorage.setItem("citasCache", JSON.stringify(citas));
}


// En este caso, como la comparativa la vamos a hacer por medio de un atributo del boton, necesitamos traer al evento para usar su target, por eso es imporantante en la funcion, tener como parametro al evento
function eliminarCita(index) {
  citas.splice(index, 1)

    pintarHTML();
}

function editarCita(index) {
    // querySelectorAll nos retorna una lista, por ende la podemos recorrer
    const inputs = document.querySelectorAll(".form-control");
    
    inputs.forEach(input => {
        const inputName = input.getAttribute("name")
        input.value = citas[index][inputName]
    });
    indiceDelPaciente=index

}

// Para mostrar alerta de boostrap
function validation() {
    const forms = document.querySelectorAll(".needs-validation");
    Array.from(forms).forEach((form) => {
        form.classList.add("was-validated");
    })
}
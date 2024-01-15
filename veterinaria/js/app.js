// let citas = [];

// //Selectores
// const formulario = document.querySelector(".formulario");

// formulario.addEventListener("submit", (e) => {
//     // crea un objeto FormData a partir de un formulario HTML específico
//     const datosFormulario = new FormData(formulario);

//     // en el contexto de FormData, forEach toma dos parámetros: el valor del campo y el nombre del campo. Este enfoque es específico para trabajar con formularios y hace que sea fácil recorrer los campos del formulario y acceder a sus valores asociados.
//     const datos = {};
//     datosFormulario.forEach((valor, clave) => {
//         datos[clave] = valor;
//       });
//       citas.push(datos);
//       console.log(citas);
// })



// const formulario = document.querySelector(".formulario");
// // Función para recopilar datos del formulario
// function recopilarDatos() {

//     const datosFormulario = new FormData(formulario);
  
//     const datos = {};
//     datosFormulario.forEach((valor, clave) => {
//       datos[clave] = valor;
//     });
  
//     citas.push(datos);
//   }
  
//   // EventListener para el envío del formulario
//   formulario.addEventListener("submit", (e) => {
//     e.preventDefault(); // Evitar el envío normal del formulario
  
//     recopilarDatos(); // Llamar a la función para recopilar datos
//     console.log(citas);
//   });




let citas = [];

const formulario = document.querySelector(".formulario");

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    obtenerInformacion();
    pintarHTML();

})

function obtenerInformacion() {
    const data = new FormData(formulario)

    datosCitas = {};
    data.forEach((valor, key) => {
        datosCitas[key] = valor;
    });

    citas.push(datosCitas);
}



function pintarHTML() {
    const containerCitas = document.querySelector(".container-cites")
    containerCitas.innerHTML = "";
    citas.forEach((dato, index) => {
        containerCitas.innerHTML += `
        <div class="card card_cite">
            <div class="card-body">
            <h5 class="card-title fs-3 fw-bold">${dato.mascota}</h5>
            <p class="card-text">
                <div class="d-flex gap-2">
                <span class="fw-bold">Propietario:</span>
                <span>${dato.propietario}</span>
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
                <button class="btn btn-primary" onclick = "${index}">Editar</button>
                <button class="btn btn-danger" onclick = "eliminarCita(${index})">Eliminar</button>
            </div>
            </div>
      </div>
        `
    }    
    );

}


function eliminarCita(index) {
    citas.splice(index, 1)
  
      pintarHTML();
  }



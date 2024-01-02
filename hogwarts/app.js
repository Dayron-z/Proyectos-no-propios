const container = document.querySelector(".container-fluid");

let personaje = {
    nombre: "Pepe Potter",
    edad: 17,
    familia: ["Padre", "Madre", "Hermana"],
    casa: undefined,
    animalPatronus: undefined,
    cualidad: undefined,
    linaje: undefined,

    cualidades: {
        cualidad1: ["Valor", "Fuerza", "Audacia"],
        cualidad2: ["Justicia", "Lealtad", "Paciencia"],
        cualidad3: ["Creatividad", "Erudición", "Inteligencia"],
        cualidad4: ["Ambición", "Determinación", "Astucia"]
    }
};

function agregarCualidad(event) {

    const cualidades = {
        cualidad1: ["Valor", "Fuerza", "Audacia"],
        cualidad2: ["Justicia", "Lealtad", "Paciencia"],
        cualidad3: ["Creatividad", "Erudición", "Inteligencia"],
        cualidad4: ["Ambición", "Determinación", "Astucia"]
    }
    const seleccion = cualidades[event.target.id];

    if (seleccion) {
        personaje.cualidad = seleccion;
        linaje.style.display = "block";
        cualidad.style.display = "none";
        console.log(personaje);
    }
}

function agregarLinaje(event) {
    const linajes = {
        linaje1: document.getElementById("linaje1").textContent,
        linaje2: document.getElementById("linaje2").textContent,
        linaje3: document.getElementById("linaje3").textContent
    };

    const seleccion = linajes[event.target.id];

    if (seleccion) {
        personaje.linaje = seleccion;
        linaje.style.display = "none";
        ejecutarSecuencia();
    }
}

function ejecutarSecuencia() {
    mostrarInformacionDelUsuario();

    let diaDelSombrero = document.createElement("div");
    const textoSombrero = document.createElement("p");
    textoSombrero.classList.add("texto-sombrero");
    textoSombrero.textContent = "Día del sombrero seleccionador";

    diaDelSombrero.appendChild(textoSombrero);


    container.insertBefore(diaDelSombrero, container.firstChild);

    const animacionDiv = document.getElementById("animacionDiv");
    animacionDiv.style.display = "block";
    animacionDiv.addEventListener("animationend", function () {
        animacionDiv.style.display = "none";
        mostrarInformacionDelUsuario();

        const casa = document.querySelector(".casa");
        casa.style.color = "black";

        diaDelSombrero.style.display = "none";

        sombreroSeleccionador();
        mostrarInformacionDelUsuario();
    });
}

function mostrarInformacionDelUsuario() {
    const divInformacion = document.getElementById("informacion-personaje");

    const { nombre, edad, familia, casa, animalPatronus, cualidad, linaje } = personaje;

    const informacionHTML = `
        <p>Nombre: ${nombre}</p>
        <p>Edad: ${edad}</p>
        <p>Familia: ${familia.join(", ")}</p>
        <p class="casa">Casa: ${casa}</p>
        <p>Animal Patronus: ${animalPatronus}</p>
        <p>Cualidad: ${cualidad.join(", ")}</p>
        <p>Linaje: ${linaje}</p>
    `;

    divInformacion.innerHTML = informacionHTML;
}

document.addEventListener("click", agregarCualidad);
document.addEventListener("click", agregarLinaje);
console.log(personaje);

function sombreroSeleccionador() {

    if (
        ["Mestizo", "Muggle", "Sangre pura"].includes(personaje.linaje) &&
        personaje.cualidades.cualidad1.every(cualidad => personaje.cualidad.includes(cualidad))
    ) {
        personaje.casa = "Gryffindor";
    } else if (
        ["Mestizo", "Muggle", "Sangre pura"].includes(personaje.linaje) &&
        personaje.cualidades.cualidad2.every(cualidad => personaje.cualidad.includes(cualidad))
        
    ){
        personaje.casa = "Hufflepuff";
    } else if (
        ["Mestizo", "Muggle", "Sangre pura"].includes(personaje.linaje) &&
        personaje.cualidades.cualidad3.every(cualidad => personaje.cualidad.includes(cualidad))
        
    ){
        personaje.casa = "Ravenclaw";
    } else if (
        ["Mestizo", "Muggle", "Sangre pura"].includes(personaje.linaje) &&
        personaje.cualidades.cualidad4.every(cualidad => personaje.cualidad.includes(cualidad))
        
    ){
        personaje.casa = "Sangre Pura";
    } 

    if (personaje.casa !== undefined) {
        setTimeout(()=>{
            noMostrarInformacionDelUsuario();
            
        }, 5000)
    }
}


function noMostrarInformacionDelUsuario() {
    const divInformacion = document.getElementById("informacion-personaje");
    divInformacion.style.display = "none"
}




// let cualidades = parseInt(prompt(`Elige las cualidades que deseas poseer\n
// 1- Valor, fuerza, audacia\n
// 2- Justicia, Lealtad, Paciencia\n
// 3- Creatividad, Erudición, Inteligencia\n
// 4- Ambición, Determinación, Astucia\n`));

// switch (cualidades) {
//     case 1:
//         personaje["cualidad"] = ["Valor", "Fuerza", "Justicia"];

//         opcion = parseInt(prompt(`Elige el tipo de linaje que deseas tener\n
//         1- Mestizo\n
//         2- Muggle\n
//         3- Sangre pura\n`));


//         if (opcion == 1) {
//             personaje["linaje"] = "Mestizo"
//         } else if (opcion == 2){
//             personaje["linaje"] = "Muggle"
//         } else if (opcion ==3){
//             personaje["linaje"] = "Sangre pura"
//         } else {
//             alert("Dato invalido")
//         }

//         personaje.casa = "Gryffindor"

//         break;

//     case 2:
//         personaje["cualidad"] = ["Justicia", "Lealtad", "Paciencia"];
//         opcion = parseInt(prompt(`Elige el tipo de linaje que deseas tener\n
//         1- Mestizo\n
//         2- Muggle`));


//         if (opcion == 1) {
//             personaje["linaje"] = "Mestizo"
//         } else if (opcion == 2){
//             personaje["linaje"] = "Muggle"
//         } else {
//             alert("Dato invalido")
//         }

//         personaje.casa = "Hufflepuff"
//         break;


//     case 3:
//         personaje["cualidad"] = ["Creatividad", "Erudición", "Inteligencia"];


//         opcion = parseInt(prompt(`Elige el tipo de linaje que deseas tener\n
//         1- Mestizo\n
//         2- Muggle\n
//         3- Sangre pura\n`));


//         if (opcion == 1) {
//             personaje["linaje"] = "Mestizo"
//         } else if (opcion == 2){
//             personaje["linaje"] = "Muggle"
//         } else if (opcion ==3){
//             personaje["linaje"] = "Sangre pura"
//         } else {
//             alert("Dato invalido")
//         }

//         personaje.casa = "Ravenclaw"

//         break;

//     case 4:
//         personaje["cualidad"] = ["Ambición", "Determinación", "Astucia"];

//         personaje["linaje"] = "Mestizo"

//         personaje.casa = "Slytherin"


//         break;
        

//     default:
//         break;
// }


// alert(`Tu informacion es la siguiente: \n
//  Nombre: ${personaje.nombre}\n Edad: ${personaje.edad}\n Familia: ${personaje.familia}\n Cualidad: ${personaje.cualidad}\n Linaje: ${personaje.linaje}\n`);



// let clases = {
//     transformaciones: "Profesor Kevin Slughorn",
//     herbologia: "Profesor Maria Umbridge",
//     pociones: "Profesor Liliana McGonagall",
//     encantamientos: "Profesora Jackie",
//     defensaContraLasArtesOscuras: "Profesor Robinson Snape ",
//     animalesMagicos: "Profesor David Filch",
//     historiaDeMagia: "Profesor Ronald Sprout"
// };





// alert("Día del sombrero seleccionador");

// alert("Seleccionando...")


// alert(Tu casa es: ${personaje.casa})




// let claseTransformaciones =  {
//     nombre: "Kevin Slughorn", 
//     horario: "6 am", 
//     random: parseInt((Math.random())*2), 


    
//     realizarTransformacionRiddikulus: function () {

//         if (this.random == 1) {
//             alert("Realizando transformacion con el encantamiento Riddikulus")
//             alert("Transformando la pesadilla a ridiculo")
//             alert("Le pasa algo vergonzoso")
//         } else {
//             alert("No hay un boggart")
//         }

//     }, 
    

//     enfrentarBoggart : function () {
//         if (this.random == 1) {
//             alert("Si hay un boggart")
//             let miedo = prompt("Ingresa tus miedo")
//             alert("El boggart se empieza a transformar")
//             alert("Transformando...")
//             alert("El boggart se transoforma en " + miedo) 
//         }

//     }, 




// }

// let boggartEjemplo = {
//     llamarFunciones1: claseTransformaciones.enfrentarBoggart,
//     llamarFunciones2: claseTransformaciones.realizarTransformacionRiddikulus,
// };

// boggartEjemplo.llamarFunciones1()
// boggartEjemplo.llamarFunciones2()



// opcionAnimal = prompt("¿Ya tienes tu animal patronus? (si o no)").toLowerCase();

// if (opcionAnimal === "no") {
//     alert(${personaje.nombre} es absorbido y es llevado a la enfermería);
// } else {
//     let defensaContraLasArtesOscuras = {
//         generarUnAnimal: function() {
//             let animales = ["perro", "gato", "aguila"];
//             let numeroAnimal = parseInt(Math.random() * animales.length);

//             let animalElegido = animales[numeroAnimal];

//             personaje.animalPatronus = animalElegido

//             alert(El animal patronus es ${animalElegido});
//             alert(El Dementor es detenido);
//         }
//     };

//     defensaContraLasArtesOscuras.generarUnAnimal();
// }




// alert(`Tu informacion es la siguiente: \n
//  Nombre: ${personaje.nombre}\n Edad: ${personaje.edad}\n Familia: ${personaje.familia}\n Cualidad: ${personaje.cualidad}\n Linaje: ${personaje.linaje}\n Animal patronus: ${personaje.animalPatronus}\n`);
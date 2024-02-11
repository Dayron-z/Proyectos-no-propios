//Imports = Los imports siempre van al inicio
//La extensión js es OBLIGATORIA
import {URL_USERS} from "../api/URLS.js"



//Selctores
const fomrulario = document.getElementById("Myform");
const email = document.getElementById("email");
const password = document.getElementById("password");

fomrulario.addEventListener("submit", (e) => {
  e.preventDefault();


  login();
})


async function login() {
  //1 - Petición fetch 
  const response = await fetch(`${URL_USERS}?email=${email.value}`)
  const data  = await response.json();

  if (!email.value || !password.value) {
    alert("campos vacíos")
    return
  }

  console.log(data);
  //Metodo de query params, en caso de no ser capaz de realizar esta forma optar por if
  if (data.length === 0) {
    alert("Usuario inexistente")
    return
  }


    if(data[0].password !== password.value){
      alert("Contraseña incorrecta")
      return
    }

  localStorage.setItem("user",  JSON.stringify(data[0]))
  //La importancia de localstorage al momento de logeranos es para poder usar el guardian en la vista de administrator
  window.location.href = "administrator.html";
}


//Acá finaliza repetir hasta resolver full

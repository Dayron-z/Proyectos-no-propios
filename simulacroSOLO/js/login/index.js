import { get } from "../api/clientHttp.js"; //Js es obligatorio
import {URL_USERS} from "../api/URLS.js"
//Selectores
const myForm = document.getElementById("myForm");
const email = document.getElementById("email");
const password = document.getElementById("password");

myForm.addEventListener("submit", (e) => {
  e.preventDefault();

  login();
})


async function login() {
    const data = await get(`${URL_USERS}?email=${email.value}`)

    if (!email.value || !password.value) {
        alert("Hay campos vacíos")
        return
    };

    if (data.length === 0) {
        alert("Este email no está registrado")
        return
    }

    if (data[0].password !== password.value) {
        alert("Las contraseña es incorrecta")
        return
    }


    localStorage.setItem("data", JSON.stringify(data[0]))
        alert("Log exitoso")
    window.location.href = "administrator.html";

}
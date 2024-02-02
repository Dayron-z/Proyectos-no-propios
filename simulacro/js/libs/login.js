//Selectores login
const formulario = document.getElementById("Myform");
const email = document.getElementById("email");
const password = document.getElementById("password");

console.log(formulario);




formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  validarUsuario();
})




  








async function validarUsuario() {
    const URL = "http://localhost:3000/users";
    const response = await fetch(URL)
    const data = await response.json();
    console.log(data);

    data.forEach(element => {
        if (email.value !== "" && password.value !== "") {
             try {
            if (element.email === email.value && element.password === password.value) {
                alert("Todo correcto");
                window.location.href = "administrator.html"
                localStorage.setItem("data-user-login", JSON.stringify(element))
            }else{
                throw new Error("Malo manito")
            }
        } catch (error) {
            alert(error)
        } 
        }else{
            alert("Ingresa algo")
        }
      
    });
}
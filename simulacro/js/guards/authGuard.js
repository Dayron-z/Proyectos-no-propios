(() => {
  const user = localStorage.getItem("user");

  if (!user) {

    alert("No puedes acceder sin logearte")
    window.location.href = "login.html"
  }
})();

//Paso a paso para guardian
//1  - Haber guardado la data del user en el local storage
//2 - Crear js para guardian y enlazarlo con la seccion que queremos encriptar (En este caso administrator)
//3 - En guard.js crear funcion auto invocable y redirigir al log para que se logee

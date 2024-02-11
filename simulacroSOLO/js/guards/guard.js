(() => {
  const data = localStorage.getItem("data")

  if (!data) {
    alert("No puedes ingresar a esta vista sin estar logeado");
    window.location.href = "login.html";
  }
})()    
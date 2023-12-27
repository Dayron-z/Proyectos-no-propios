const hamburguerIcon = document.querySelector(".nav__hamburguer");
const navOverlay = document.querySelector(".nav__overlay")

hamburguerIcon.addEventListener("click", () => {
    // Con esta parte hacemos que cambie el icono de menu hamburguesa a el de la x. Todo esto se hace mediante la asignacion de clases que tengan estilos que se crucen entre ellos, en este caso lo hicimos agregando una segunda clase, ya que necesitamos las propiedades de la primera pero le hacemos una modificacion desde la segunda clase a su imagen/icon
    hamburguerIcon.classList.toggle("nav__hamburguer--open")

        // Aca es similiar a lo que hicimos con los iconos, en este caso en vez de cambiar las imagenes/iconos, jugamos con la opacidad
    navOverlay.classList.toggle("nav__overlay--show")
})


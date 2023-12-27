const hamburguerIcon = document.querySelector(".nav__hamburguer");
const navOverlay = document.querySelector(".nav__overlay")

hamburguerIcon.addEventListener("click", () => {
    // Con esta parte hacemos que cambie el icono de menu hamburguesa a el de la x. Todo esto se hace mediante la asignacion de clases que tengan estilos que se crucen entre ellos, en este caso lo hicimos agregando una segunda clase, ya que necesitamos las propiedades de la primera pero le hacemos una modificacion desde la segunda clase a su imagen/icon
    hamburguerIcon.classList.toggle("nav__hamburguer--open")

        // Aca es similiar a lo que hicimos con los iconos, en este caso en vez de cambiar las imagenes/iconos, jugamos con la opacidad
    navOverlay.classList.toggle("nav__overlay--show")
})


navOverlay.addEventListener("click", (e)=>{
    e.preventDefault();
    const currentElement = e.target;

    // En la funcion isActive está la explicacion
    if (isActive(currentElement, "nav__parent")){
        //window.innerWidth evalua la condición segun el tamaño de la ventana, en este caso evaluamos unicamente el ancho, que es lo mas usual enm temas de responsive.



        //Pendiente por documentar, revisar video nuevamente (Analizar más en detalle).

        const subMenu = currentElement.parentElement;
        console.log(subMenu);
        if (window.innerWidth <768) {
        }else{

        }
    }
})

// Creamos funcion externa que recibe dos parametros, recibe el currentElement el cual es una constante que creamos que guarda el e.target, al hacer clic, la function pregunta ¿El valor de la clase de createElement incluye este string(nav__parent)?
function isActive(element, string) {
    return element.classList.value.includes(string)
}
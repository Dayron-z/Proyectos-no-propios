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



        //Ya sabemos lo que que queremos, para ello creamos la funcion externa que hara que se retorne lo que contenga la clase que le especificamos, ya cunado nos retorne lo que deseamos, queremos acceder al padre del contendor de estos elementos

        //Orden, primero accedemos al padre de current element, y ahora que tenemos a disposición todos sus hijos, con children buscamos con cual vamos a trabajar especificamente 

        const subMenu = currentElement.parentElement.children[1];
        console.log(subMenu);
        if (window.innerWidth <768) {

            // Si la altura visible (clientHeight) del elemento referenciado por subMenu es igual a 0 (es decir, si actualmente está oculto o tiene altura cero), entonces asigna la altura total del contenido (scrollHeight) del mismo elemento a la variable height.
            // Si la altura visible no es cero (el elemento está visible), asigna 0 a la variable height.
             let height = (subMenu.clientHeight == 0) 
             ? subMenu.scrollHeight
             : 0;

             subMenu.style.height = `${height}px`
        }else{

        }
    }
})

// Creamos funcion externa que recibe dos parametros, recibe el currentElement el cual es una constante que creamos que guarda el e.target, al hacer clic, la function pregunta ¿El valor de la clase de createElement incluye este string(nav__parent)?
function isActive(element, string) {
    return element.classList.value.includes(string)
}
document.addEventListener("DOMContentLoaded", function() {
    const animacionDiv = document.getElementById("animacionDiv");
  
    // Muestra el div y añade un oyente para el evento 'animationend'
    animacionDiv.style.display = "block";
    animacionDiv.addEventListener("animationend", function() {
      // Oculta el div cuando la animación ha finalizado
      animacionDiv.style.display = "none";
    });
  });
  
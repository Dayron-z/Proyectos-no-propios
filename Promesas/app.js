//La base de todo. Cómo se hacía esto cuando las promesas no existían. 
//Esto nos ayudará a entender para que se crearon entonces las promesas y qué aportan
//Glosario request = solicitud 


//Forma obsoleta pero necesaria


// Instanciar significa crear un objeto específico a partir de una clase o constructor, utilizando la palabra clave new. La instancia hereda las propiedades y métodos definidos por la clase y representa un ejemplo único de esa entidad en el programa.

//new sirve justamente para crear la instancia a partir de la clase o del costructor.



//Forma obsoleta pero que se puede ver en sistemas viejos
const request = new XMLHttpRequest();
request.open("GET", "./numero.txt")
//Acá hemos hecho la petición

request.onload = () => {
  console.log(request.status, request.responseText);
}

request.onerror = () => {
  console.log("Error");
}


request.send();




//Las promesas llegan como un mecanismo estandar para ayudar a la legibilidad del codigo 
// https://www.youtube.com/watch?v=ksg6SDwllDs
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Utiliza el método filter para obtener una nueva lista con números pares.
// Guarda el resultado en la variable 'numerosPares'.
// Imprime el resultado en la consola.

pares = numeros.filter(numero => numero % 2 == 0)


console.log(pares);


menorA5 = numeros.filter(numero => numero < 5)

console.log(menorA5);


const personas = [
    {
        nombre: "dayron",
        edad: 20
    },
    {
        nombre: "pepe",
        edad: 16
    },
    {
        nombre: "andres",
        edad: 12
    },
    {
        nombre: "santiago",
        edad: 19
    }
]

mayoresDeEdad = personas.filter(persona => persona.edad >18)

console.log(mayoresDeEdad);


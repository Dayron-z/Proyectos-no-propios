const cantidad = document.getElementById("quantity");
const formulario =  document.getElementById("myForm")

cantidad.addEventListener("input", (e) => {
//SI = Según interpretación
    //SI: Crea un string vacío el cual va a almacenar todo en formato de string para su futura conversion a json 
    let content = "";

    //e.target.value almacena el  valor del input
    const quantity = e.target.value;

    for (let i = 0; i < quantity; i++) {
        content += `  
        <div>
                <label>invitado ${i + 1}</label>
                <input type = "text" id = "name[${i}]">
                <label>Email ${i + 1}</label>
                <input type= "text" id = "email[${i}]">
        </div>`;
        
    };

    document.getElementById("divGuests").innerHTML = content;

});

formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    const quantity = document.getElementById("quantity").value;
    //  Queremos que se obtenga el contenido cuando le demos clic al boton
    const formData = new FormData(e.target)

    const data = Object.fromEntries(formData.entries())

    // Le estamos agregando un array con la key guests al diccionario data
    data.guests = []

    for (let i = 0; i < quantity; i++) {
        const guest = {};
        guest.name = document.getElementById(`name[${i}]`).value
        guest.email = document.getElementById(`email[${i}]`).value

        data.guests.push(guest);
    };
    console.log(data);
    //Endpoint
})
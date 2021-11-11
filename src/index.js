//Fetch para traternos los datos del JSON
fetch("../data/examen.json")
.then((response) => response.json())
.then((data) => bootcampData(data))
.catch((error) => console.log(error))

// Variable que se trae el id desde el HTML
let Miembros = document.getElementById("BoocampMembers")



//Empezamos la fucnion para pintar los datos del JSON hacia el HTML
let bootcampData = (data) => {
    console.log(data.examen)
   
//Hacemos varias funciones FOR OF para pibtarlas con cada dato 
    for (const bootcamp of data.examen) {
        Miembros.innerHTML += `<h3 class="miembros"> ${bootcamp.nombre} ${bootcamp.Apellido} </h3>
        `
    }
    for (const cumpleaños of data.examen) {
        Miembros.innerHTML += ` <h4 class="cumpleaños"> ${cumpleaños.cumpleaños} </h4> `
    }
    for (const edad of data.examen) {
        Miembros.innerHTML += ` <h4 class="edad"> ${edad.Edad} </h4> `
    }
}

// Hacker Edition 
// Variable  independiente para pintarlos en el HTML 
let Datos = (bootcampData) => {
    console.log(bootcampData)
   for (const Pintar of bootcampData) {
       Miembros.innerHTML += `<h3 class="miembros"> ${Pintar.nombre} ${Pintar.Apellido} </h3>
        `
       
   }
}
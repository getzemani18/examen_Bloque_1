fetch("../data/examen.json")
.then((response) => response.json())
.then((data) => bootcampData(data))
.catch((error) => console.log(error))


let Miembros = document.getElementById("BoocampMembers")




let bootcampData = (data) => {
    console.log(data.examen)
   

    for (const bootcamp of data.examen) {
        Miembros.innerHTML += `<h3 class="miembros"> ${bootcamp.nombre} ${bootcamp.Apellido} </h3>
        `
    }
    for (const cumpleaños of data.examen) {
        Miembros.innerHTML += ` <h4 class="cumpleaños"> ${cumpleaños.cumpleaños} </h4> `
    }
    for (const edad of data.examen) {
        Miembros.innerHTML += ` <h4 class="cumpleaños"> ${edad.Edad} </h4> `
    }
}


let Datos = (datos) => {
    console.log(Datos)
   for (const Pintar of datos) {
       Miembros.innerHTML += `<h3 class="miembros"> ${Pintar.nombre} ${Pintar.Apellido} </h3>
        `
       
   }
}
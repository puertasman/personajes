import { personajesAnimados } from './personajes.js'

let table = document.querySelector("#tablaPersonajes")

if (personajesAnimados.length > 0){
    // hay cosas
    let thead = document.createElement("thead")
    thead.innerHTML = "<th>Nombre</th><th>Serie</th>"
    table.appendChild(thead)
    
}
else{
    // no hay cosas
    let p = document.createElement("p")

    p.textContent = `La lista está vacía.`

    table.appendChild(p)
}
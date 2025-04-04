import { personajesAnimados } from './personajes.js'

let table = document.querySelector("#tablaPersonajes")

if (personajesAnimados.length > 0){
    // hay cosas
    let th = document.createElement("thead")
    th.innerHTML = ""
}
else{
    // no hay cosas
    let p = document.createElement("p")

    p.textContent = `La lista está vacía.`

    table.appendChild(p)
}
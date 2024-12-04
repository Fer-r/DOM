import { Empleado, EmpleadoFreelance } from "./helpers/Ejercicio3";
import { GestionUsuarios, GestionUsuariosClase } from "./helpers/Ejercicio7";

document.addEventListener("DOMContentLoaded", () => {
  // Ejercicio 3
  console.log("------------------Ejercicio 3-----------------------");
  const empleado1 = new Empleado("Juan", 25, "junior");
  const empleado2 = new Empleado("Ana", 30, "semiSenior");
  console.log(empleado1.info());
  console.log(empleado2.info());

  const freelance1 = new EmpleadoFreelance("Pedro", 35, 50);
  const freelance2 = new EmpleadoFreelance("Maria", 40, 60);
  console.log(freelance1.info(30));
});
// Ejercicio 7
console.log("----------------------Ejercicio 7------------------");

(async function () {
  // HandlerClickEliminar
  function handlerClickEliminar(e) {
    if (e.target.classList.contains("btn-eliminar")) {
      const index = e.target.dataset.id;
      // esto deberia ser una funcion dentro de la clase gestorUser
      gestorUser.usuarios.splice(index, 1);
      // Esto deberia de ser un componente probablemente
      divListaUsuarios.innerHTML = gestorUser.usuarios
        .map((user, index) => {
          return `<li data-id="${index}">
        ${user.info()}
        <button class="btn-eliminar" data-id="${index}">Eliminar</button>
        </li>`;
        })
        .join("");
    }
  }
  // HandlerClickBuscar
  function handlerClickBuscar(e) {
    e.preventDefault();
    alert("Buscar Usuario");
  }
  const gestorUser = new GestionUsuariosClase();
  await gestorUser.fetchUsuarios();
  // console.log(gestorUser.usuarios);
  const appDiv = document.getElementById("app");
  const h1 = document.createElement("h1");
  h1.textContent = "Uso de POO con JsonPlaceHolder";
  appDiv.appendChild(h1);
  const divBuscarUsuarios = document.createElement("div");
  divBuscarUsuarios.id = "buscar-usuarios";
  appDiv.appendChild(divBuscarUsuarios);
  divBuscarUsuarios.innerHTML = `
<form id="form-usuario">
  <input type="text" id="nombre-buscar" placeholder="Nombre a buscar">
  <button type=submit id="buscar">Buscar</button>
</form>
`;
  const divListaUsuarios = document.createElement("div");
  divListaUsuarios.id = "lista-usuarios";
  appDiv.appendChild(divListaUsuarios);
  divListaUsuarios.innerHTML = gestorUser.usuarios
    .map((user, index) => {
      return `<li data-id="${index}">
      ${user.info()}
      <button class="btn-eliminar" data-id="${index}">Eliminar</button>
      </li>`;
    })
    .join("");

  //eventListeners
  document
    .getElementById("lista-usuarios")
    .addEventListener("click", handlerClickEliminar);
  document
    .querySelector("#form-usuario")
    .addEventListener("submit", handlerClickBuscar);
})();

// Renderizar en el DOM un formulario que permita a traves de un input y el boton de buscar
// buscar por nombres los usuarios de mi clase GestionUsuariosClase. Ademas pintaremos
// en un div llamado listaUsuarios a traves de li la data
// de todos los usuarios (nombre,email y rol) junto al boton de borrar que
// sera un icono de una papelera de reciclaje. Cada vez que pulse la papelera de reciclaje
// se borrara el usuario

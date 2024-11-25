// Crear una clase para modelar un sistema de usuarios que puedan iniciar sesion, cerrar sesion y actualizar su perfil
//------------------------- Solucion con funciones constructioras
// function Usuario(nombre, email, password) {
//   this.nombre = nombre; //Variable publica
//   this.email = email;
//   let _password = password; //Variable privada

import { Producto } from "./components/Producto";

//   // Metodos publicos
//   this.login = function (email, password) {
//     // Quiero evaluar si email y password son correctos
//     if (this.email === email && _password === password) {
//       return `Bienvenido${this.nombre}`;
//     }
//     return "Email o password incorrectos";
//   };

//   this.updateEmail = function (newEmail) {
//     this.email = newEmail;
//     return `Email actualizado a ${this.email}`;
//   };
// }

// // Crear un usuario;
// const usuario1 = new Usuario("Juan", "juan@gmail.com", "123456");
// // Lo mostrarmos en el dom
// document.addEventListener("DOMContentLoaded", () => {
//   const app = document.getElementById("app");
//   function renderUsuario() {
//     app.innerHTML = `<h1>Usuario: ${usuario1.nombre}</h1>
//         <p>Email: ${usuario1.email}</p>
//         <button id="btnLogin">Login</button>`;

//     // Añadir el evento al boton
//     const btnLogin = document.getElementById("btnLogin");
//     btnLogin.addEventListener("click", () => {
//       alert(usuario1.login("pepe@gmail.com", "pass"));
//     });
//   }
// });

// //Solucion con clases
// class UsuarioClass {
//   // Las variable privadas se declaran poniendo una # al nombre
//   #password;
//   constructor(nombre, email, password) {
//     this.nombre = nombre;
//     this.email = email;
//     this.#password = password;
//   }
//   login(email, password) {
//     if (this.email === email && this.#password === password) {
//       return `Bienvenido${this.nombre}`;
//     }
//     return "Email o password incorrectos";
//   }

//   updateEmail(newEmail) {
//     this.email = newEmail;
//     return `Email actualizado a ${this.email}`;
//   }
// }

// const usuario2=new UsuarioClass("jose","jose@hotmail.es","123456")

//Implementar un modelo de producto con funciones constructoras y clases que permita obtener informacioon del producto,
//  actualizar el stock, debiendo registrar/almacenar nombre precio y stock

// ArrayProductos
const productos = [
  new Producto("Portatil", 500, 10),
  new Producto("Movil", 1200, 20),
  new Producto("Tablet", 300, 5),
];

document.addEventListener("DOMContentLoaded", () => {
  const app = document.getElementById("app");
  app.innerHTML = `<h2>Gestion de Productos</h2>
  ${productos
    .map(
      (producto, index) =>
        //  {   return `<li>${producto.obtenerInfo()}</li>`;
        //   }
        `<li>
        ${producto.obtenerInfo()}
        <button class="btn-update-stock" data-index="${index}">Actualizar boton</button>
        </li>`
    )
    .join("")}`;
  document.querySelectorAll("btn-update-stock").forEach((btn) => {
    btn.addEventListener("click", () => {
      alert("Actualizar stock");
    });
  });
});

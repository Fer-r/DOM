/**
 * Gestion dinamica de un carrito de la compra mediante funciones constructororas y poo
 * Objetivo
 * agregar productos al carrito guardadndo nombre cantidad y precio
 * Editar productor permitiendo cambiar la cantidad
 * Eliminar productos del carrito
 * Actualizar el total a pagar dinamicamente
 */

import { Carrito } from "./components/Carrito";
import { Producto } from "./components/Producto";

const carrito = new Carrito();
// Cargar del localStorage al carrito;
function pintarInterfazWeb() {
  const app = document.getElementById("app");
  const pintarCarrito = () => {
    const lista = document.getElementById("lista-productos");
    lista.innerHTML = `
    <h2>Lista: </h2>
    ${carrito.productos
      .map(
        (producto, index) => `<li data-id="${index}">${producto.obtenerInfo()}
        <button class="btn-editar" data-id="${index}">Editar</button>
        <button class="btn-borrar" data-id="${index}">Borrar</button>
        </li>`
      )
      .join("")}
    `;
  };
  const handlerSubmit = (event) => {
    event.preventDefault();
    const nombre = document.getElementById("nombre-producto").value.trim();
    const cantidad = Number(document.getElementById("cantidad-producto").value);
    const precio = Number(document.querySelector("#precio-producto").value);
    if (!nombre || cantidad <= 0 || precio <= 0) {
      alert("Debes insertar valores correctos");
    }
    //   añadimos el producto cantidad y precio a un producto del carrito
    carrito.agregarProducto(nombre, cantidad, precio);
    //   ahora pintamos el carrito
    pintarCarrito();
  };

  const opcionesProducto = (event) => {
    const index = Number(event.target.dataset.id);
    if (event.target.classList.contains("btn-borrar")) {
      carrito.borrarProducto(index);
      pintarCarrito();
    }
    if (event.target.classList.contains("btn-editar")) {
      //   carrito.borrarProducto(index);
    }
  };
  app.innerHTML = `
  <h1>Carrito de la compra de productos</h1>
  <form id="from-producto">
  <input id="nombre-producto" type="text" placeholder="Nombre del producto" required>
  <input id="cantidad-producto" type="number" placeholder="Cantidad" required>
  <input id="precio-producto" type="number" placeholder="Precio" required>
  <button type="submit">Agregar Producto </button>
  </form>

  <div id=lista-productos></div>
  `;
  document
    .getElementById("from-producto")
    .addEventListener("submit", handlerSubmit);

  document.getElementById("lista-productos").addEventListener();
}
// -----------------Inicio de la aplicacion---------------------
document.addEventListener("DOMContentLoaded", pintarInterfazWeb);

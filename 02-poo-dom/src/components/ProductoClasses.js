export class ProductoClasses {
  #nombre;
  #precio;
  #stock;
  constructor(nombre, precio, stock) {
    this.#nombre = nombre;
    this.#precio = precio;
    this.#stock = stock;
  }

  setNombre = function (nombre) {
    this.#nombre = nombre;
  };

  getNombre = function () {
    return this.#nombre;
  };

  setPrecio = function (precio) {
    this.#precio = precio;
  };

  getPrecio = function () {
    return this.#precio;
  };

  setStock = function (stock) {
    this.#stock = stock;
  };

  getStock = function () {
    return this.#stock;
  };

  actualizarStock = function (cantidad) {
    this.#stock += cantidad;
    return `Stock actializado a ${this.getStock()}`;
  };

  obtenerInfo = function () {
    return `Nombre: ${this.getNombre()} , Precio: ${this.getPrecio()}, Stock: ${this.getStock()}`;
  };
}

import { Producto } from "../../../02-poo-dom/src/components/Producto";

export class Carrito {
  // Constructor
  constructor() {
    this.productos = [];
  }
  // Metodos
  agregarProducto(nombre, cantidad, precio) {
    this.productos.push(new Producto(nombre, cantidad, precio));
    // Lo guardamos tambien en el LOCALSTORAGE
    this.guardarLocalStorage();
  }
  borrarProducto(index) {
    const indice = this.productos;
    this.productos.splice(index, 1);
    this.guardarLocalStorage();
  }

  editarProducto(index, newCantidad) {
    if (newCantidad > 0) {
      this.productos[index].cantidad = newCantidad;
      // Actualizar el local Storage
      this.guardarLocalStorage();
    } else {
    }
  }

  totalCarrito() {
    return this.productos.reduce(
      (acc, producto) => acc + producto.calcularTotal(),
      0
    );
  }
  guardarLocalStorage() {
    localStorage.setItem("carrito", JSON.stringify(this.productos));
  }

  cargarLocalStorage() {
    // Debido a que el precio es privado no se guardara en el localStorage
    const local = JSON.parse(localStorage.getItem("carrito"));
    if (local) {
      this.productos = local.map(({ nombre, cantidad, precio }) => {
        return new Producto(nombre, cantidad, precio);
      });
    }
    // return localStorage.hasOwnProperty("carrito")?localStorage.getItem(JSON.parse("carrito")):
  }
}

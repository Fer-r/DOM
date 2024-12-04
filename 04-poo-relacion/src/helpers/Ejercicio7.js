// Gestion de usuarios desde una API
const url = import.meta.env.VITE_URL;

// Funciones constructoras

export function Usuario(id, nombre, email, rol) {
  this.id = id;
  this.nombre = nombre;
  this.email = email;
  this.rol = rol;
}
Usuario.prototype.info = function () {
  return `ID: ${this.id}
    nombre: ${this.nombre}
    email: ${this.email}
    rol: ${this.rol}`;
};
export function GestionUsuarios() {
  this.usuarios = [];
}
GestionUsuarios.prototype.fetchUsuarios = async function () {
  // ir a jsonPlaceHolder
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response.ok) {
      throw "error en la peticion";
    }
    const data = await response.json();
    // Construyo los objetos Usuario
    this.usuarios = data.map((user) => {
      const { id, name, email } = user;
      return new Usuario(id, name, email, "usuario");
    });
  } catch (error) {
    console.error("Error en la peticion", error);
  }
};
// Metodo para guardar los usuarios en el localStorage

GestionUsuarios.prototype.guardarLocalStorage = function () {
  localStorage.setItem("usuarios", JSON.stringify(this.usuarios));
};
GestionUsuarios.prototype.cargarLocalStorage = function () {
  const usuariosLocalStorage = JSON.parse(localStorage.getItem("usuarios"));
  this.usuarios = usuariosLocalStorage
    ? usuariosLocalStorage.map(
        ({ id, nombre, email, rol }) => new Usuario(id, nombre, email, rol)
      )
    : [];
};

export class UsuarioClase {
  constructor(id, nombre, email, rol) {
    this.id = id;
    this.nombre = nombre;
    this.email = email;
    this.rol = rol;
  }

  info() {
    return `ID: ${this.id}
          nombre: ${this.nombre}
          email: ${this.email}
          rol: ${this.rol}`;
  }
}

export class GestionUsuariosClase {
  constructor() {
    this.usuarios = [];
  }
  async fetchUsuarios() {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw "error en la peticion";
      }
      const data = await response.json();
      // Construyo los objetos Usuario
      this.usuarios = data.map((user) => {
        const { id, name, email } = user;
        return new Usuario(id, name, email, "usuario");
      });
    } catch (error) {
      console.error("Error en la peticion", error);
    }
  }
  guardarLocalStorage() {
    localStorage.setItem("usuarios", JSON.stringify(this.usuarios));
  }
  cargarLocalStorage() {
    const usuariosLocalStorage = JSON.parse(localStorage.getItem("usuarios"));
    this.usuarios = usuariosLocalStorage
      ? usuariosLocalStorage.map(
          ({ id, nombre, email, rol }) => new Usuario(id, nombre, email, rol)
        )
      : [];
  }
}

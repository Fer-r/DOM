// Funciones constructoras
export function Empleado(nombre, edad, puesto) {
  this.nombre = nombre;
  this.edad = edad;
  this.puesto = puesto;
  // Metodo compartido
  Empleado.prototype.CalcularSalario = function () {
    const salarioBase = {
      junior: 1500,
      semiSenior: 2000,
      senior: 3000,
    };
    return salarioBase[this.puesto] || 0;
  };

  Empleado.prototype.info = function () {
    return `Nombre: ${this.nombre} 
    Edad: ${this.edad} 
    Puesto: ${this.puesto}
    Salario: ${this.CalcularSalario()}`;
  };
}
// Clase hija de Empleado
/**
 *
 * @param {String} nombre
 * @param {Number} edad
 * @param {Number} precioHora
 */
export function EmpleadoFreelance(nombre, edad, precioHora) {
  Empleado.call(this, nombre, edad, "freelance");
  this.precioHora = precioHora;
}
//   Metodos prototipicos de la clase padre
EmpleadoFreelance.prototype = Object.create(Empleado.prototype);
EmpleadoFreelance.prototype.constructor = EmpleadoFreelance;
EmpleadoFreelance.prototype.CalcularSalario = function (numHoras) {
  return numHoras * this.precioHora;
};

EmpleadoFreelance.prototype.info = function (numHoras) {
  return `Nombre: ${this.nombre} 
    Edad: ${this.edad} 
    Salario: ${this.CalcularSalario(numHoras)}`;
};

export class EmpleadoClases {
  constructor(nombre, edad, puesto) {
    this.nombre = nombre;
    this.edad = edad;
    this.puesto = puesto;
  }
  // Metodo compartido
  CalcularSalario() {
    const salarioBase = {
      junior: 1500,
      semiSenior: 2000,
      senior: 3000,
    };
    return salarioBase[this.puesto] || 0;
  }
  info() {
    return `Nombre: ${this.nombre} 
    Edad: ${this.edad} 
    Puesto: ${this.puesto}
    Salario: ${this.CalcularSalario()}`;
  }
}
export class EmpleadoFreelanceClases extends EmpleadoClases {
  constructor(nombre, edad, precioHora) {
    super(nombre, edad, "freelance");
    this.precioHora = precioHora;
  }
  CalcularSalario(numHoras) {
    return numHoras * this.precioHora;
  }
  info(numHoras) {
    return `Nombre: ${this.nombre} 
    Edad: ${this.edad} 
    Salario: ${this.CalcularSalario(numHoras)}`;
  }
}

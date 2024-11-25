//-----------------Declaracion de Variables--------------

//--------------Declaracion de Funciones-----------------------
const handlerClickSpan = (event) => {
  const span = event.target;
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  //   cambio el stilo inline de color
  span.style.backgroundColor = `#${randomColor}`;
};

const handlerClickP = (event) => {
  const p = event.target;
  alert(p.textContent);
};

//Inicio de la Aplicacion

document.addEventListener("DOMContentLoaded", function () {
  // # Relación II de básicos selección.
  // ### Ejercicio 1:
  // Añade un evento de clic a todos los elementos `<span>` dentro del `contenedorSecundario`. Cuando se haga clic, cambia el color de fondo del elemento al azar.
  document.querySelectorAll("#contenedorSecundario span").forEach((span) => {
    span.addEventListener("click", handlerClickSpan);
  });

  // ### Ejercicio 2:
  // Crea una función que muestre una alerta con el contenido de cualquier párrafo que tenga la clase "parrafo" cuando se haga doble clic en él.
  document.querySelectorAll(".parrafo").forEach((p) => {
    p.addEventListener("dblclick", handlerClickP);
  });
  // ### Ejercicio 3:
  // Añade un evento de cambio a un `<select>` que está fuera del `contenedorPrincipal`. Cuando se cambie el valor, actualiza el texto del elemento `h1` al nuevo valor seleccionado.

  //No hay select 

  // ### Ejercicio 4:
  // Crea una función que cambie el contenido de todos los párrafos dentro del `contenedorSecundario` cuando se presione la tecla "Enter". El nuevo contenido debe ser un texto aleatorio (por ejemplo, "Nuevo contenido").
  document.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      document
        .querySelectorAll("#contenedorSecundario p")
        .forEach((parrafo) => {
          parrafo.textContent = "Has pulsado Enter";
        });
    }
  });

  // ### Ejercicio 5:
  // Añade un evento de clic a cualquier elemento con la clase "etiqueta". Cuando se haga clic, elimina el elemento del DOM.
  document.querySelectorAll(".etiqueta").forEach((etiqueta) => {
    etiqueta.addEventListener("click", (event) => {
      // const etiqueta=event.target
      etiqueta.remove();
    });
  });
  // ### Ejercicio 6:
  // Crea una función que cambie el color de todos los elementos `<span>` dentro del `contenedorSecundario` cuando se mueva el mouse sobre ellos. El nuevo color debe ser azul.
  document.querySelectorAll("#contenedorSecundario span").forEach((span) => {
    span.addEventListener("mouseover", () => {
      span.style.color = "blue";
    });
    span.addEventListener("mouseout", () => {
      span.style.color = ""; //Deja el color que hay en el CSS
    });
  });
  // ### Ejercicio 7:
  // Añade un evento de carga a la página. Cuando la página se cargue, muestra una alerta con el texto "Página cargada".

  // spinner

  // ### Ejercicio 8:
  // Crea una función que cambie el tamaño del texto de todos los párrafos dentro del `contenedorPrincipal` cuando se haga clic en el elemento `img`. El nuevo tamaño debe ser el doble del tamaño actual.
  document
    .querySelector("#contenedorPrincipal img")
    .addEventListener("click", () => {
      document.querySelectorAll("#contenedorPrincipal p").forEach((p) => {
        const currentFontSize = window.getComputedStyle(p).fontSize;
        p.style.fontSize = parseInt(currentFontSize) * 2 + "px";
      });
    });

  // ### Ejercicio 9:
  // Añade un evento de teclado a la página. Cuando se presione cualquier tecla, muestra una alerta con el código de la tecla presionada.
  document.addEventListener("keydown", (event) => {
    // alert(event.key)
  });

  // ### Ejercicio 10:
  // Crea una función que cambie el color de fondo del `contenedorPrincipal` cuando se haga clic en cualquier elemento dentro de él. El nuevo color debe ser verde.
  const contenedor = document.querySelector("#contenedorPrincipal");
  contenedor.addEventListener("click", () => {
    contenedor.style.backgroundColor = "green";
  });
});

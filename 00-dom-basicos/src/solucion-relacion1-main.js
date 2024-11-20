const init = () => {
  console.log("DOM cargado");
};

// Si la funcion tiene que llevar parametros se escribira como arrow fusion
// document.addEventListener("DOMContentLoaded",(param1, param2)=> init(param1, param2));
// Si no tiene que llevar parametros se escribe asi
// document.addEventListener("DOMContentLoaded", init);
document.addEventListener("DOMContentLoaded", function () {
  // 1 .-Selecciona el elemento `h1` por su ID.
  // querySelector trae el primer elemento
  // querySelectorAll trae todos
  const elementH1 = document
    .getElementById("contenedorPrincipal")
    .querySelector("h1");
  console.log(elementH1.textContent);

  // ### Ejercicio 2:
  // Selecciona todos los párrafos con la clase "parrafo" dentro del `contenedorPrincipal`.
  const parrafos = document.querySelectorAll("#contenedorPrincipal .parrafo");

  // ### Ejercicio 3:
  // Selecciona el elemento `img` por su atributo `src`.
  const elementImg = document.querySelector('img[src="imagen.png"]');

  // ### Ejercicio 4:
  // Selecciona todos los elementos `<span>` dentro del `contenedorSecundario`.
  const elementsSpans = document.querySelectorAll("#contenedorSecundario span");
  console.log(elementsSpans);
  // ### Ejercicio 5:
  // Selecciona el primer párrafo con la clase "importante".
  console.log(document.querySelector(".parrafo.importante"));
  // ### Ejercicio 6:
  // Selecciona todos los párrafos que están dentro de un elemento con el `id` "contenedorPrincipal".
  console.log(document.querySelectorAll("#contenedorPrincipal .parrafo"));
  // ### Ejercicio 7:
  // Selecciona todos los elementos que tienen el atributo `data-atributo` con valor "valor1".
  console.log(document.querySelectorAll("[data-atributo='valor1']"));
  // ### Ejercicio 8:
  // Selecciona el segundo párrafo que está dentro de un elemento con la clase "importante".
  const parrafosImportantes = document.querySelectorAll(".parrafo.importante");
  const segundoParrafoImportante =
    parrafosImportantes.length > 1 ? parrafosImportantes[1] : null;
  console.log(segundoParrafoImportante);
  // ### Ejercicio 9:
  // Selecciona todos los elementos `<span>` que están dentro de cualquier elemento con la clase "contenedorSecundario".
  console.log(document.querySelectorAll("#contenedorSecundario span"));
  // ### Ejercicio 10:
  // Selecciona el tercer párrafo dentro del `contenedorPrincipal` que tiene la clase "parrafo".
  const parrafosPrincipal = document.querySelectorAll(
    "#contenedorPrincipal .parrafo"
  );
  const tercerParrafo =
    parrafosPrincipal.length > 2 ? parrafosPrincipal[2] : null;
  console.log(tercerParrafo);
});

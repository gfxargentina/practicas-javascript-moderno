const paises = ["Francia", "España", "Portugal", "Australia", "Inglaterra"];

//agrega un nuevo pais al array paises y despues muestra el nuevo array creado con la
//funcion mostrarPaises que se pasa como callback
function nuevoPais(pais, callback) {
  setTimeout(() => {
    paises.push(pais);
    callback();
  }, 2000);
}

//con forEach recorre el array paises y muestra todos los paises
function mostrarPaises() {
  setTimeout(() => {
    paises.forEach((pais) => {
      console.log(pais);
    });
  }, 1000);
}

mostrarPaises();

nuevoPais("Argentina", mostrarPaises);

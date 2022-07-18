const cargartxtbtn = document.querySelector("#cargarTxt");
cargartxtbtn.addEventListener("click", obtenerDatos);

function obtenerDatos() {
  const url = "data/datos.txt";

  //quiero consultar esta url con el fetch
  fetch(url)
    //entonces la respuesta la quiero como texto o json
    .then((respuesta) => {
      console.log(respuesta);
      console.log(respuesta.status);
      console.log(respuesta.statusText);
      console.log(respuesta.url);
      console.log(respuesta.type);
      //la respuesta
      return respuesta.text();
    })
    //entonces imprime los datos
    .then((datos) => {
      console.log(datos);
    })
    .catch((error) => {
      console.log(error);
    });
}

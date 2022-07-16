const aplicarDescuento = new Promise((resolve, reject) => {
  const descuento = true;

  if (descuento) {
    resolve("Descuento aplicado");
  } else {
    reject("No se pudo aplicar el descuento");
  }
});

//console.log(aplicarDescuento);

//sintaxis para acceder al promise aplicarDescuento
aplicarDescuento
  .then((resultado) => console.log(resultado)) //es el resultado del resolve
  .catch((error) => console.log(error)); //es el resultado del rejected

//las promesas tienen 3 valores posibles:
//   fullfilled - el promise se cumplio - resolve
//   rejected - el promise no se cumplio - reject
//   pending - el promise aun no se cumple o tampoco fue rechazado

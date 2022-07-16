const paises = [];

const nuevoPais = (pais) =>
  new Promise((resolve) => {
    setTimeout(() => {
      paises.push(pais);
      resolve("El resultado del Resolve");
    }, 2000);
  });

nuevoPais("Argentina")
  .then((resultado) => {
    console.log(resultado);
    console.log(paises);
    return nuevoPais("Francia");
  })
  .then((resultado) => {
    console.log(resultado);
    console.log(paises);
  });

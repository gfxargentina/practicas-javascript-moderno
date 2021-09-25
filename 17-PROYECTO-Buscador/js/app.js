

//selectores de busqueda
const marca = document.querySelector('#marca');
const year = document.querySelector('#year');
const precioMinimo = document.querySelector('#minimo');
const precioMaximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');




//contenedor para los resultados
const resultado = document.querySelector('#resultado')


//el año actual
const max = new Date().getFullYear();
//el año actual - 10
const min = max - 10;

// console.log(max);
// console.log(min);

//generar un objeto para la busqueda
const datosBusqueda = {
    marca: '',
    year: '',
    precioMinimo: '',
    precioMaximo: '',
    puertas: '',
    transmision: '',
    color: '',
}

//carga la funcion mostrarAutos() cuando inicia el documento
document.addEventListener('DOMContentLoaded', () => {
    mostrarAutos(autos)

    //llena las opciones del año
    llenarSelect()
} )

// Event listeners para los select de busqueda
marca.addEventListener('change', (e) => {
   //console.log(e.target.value);

   datosBusqueda.marca = e.target.value;
   //console.log(datosBusqueda);
   filtrarAuto()
})

year.addEventListener('change', (e) => {
                        //convierte el valor a numero para que no venga como string
    datosBusqueda.year = parseInt(e.target.value);
    filtrarAuto();
})

precioMinimo.addEventListener('change', (e) => {
    datosBusqueda.precioMinimo = e.target.value;

    filtrarAuto();
})

precioMaximo.addEventListener('change', (e) => {
    datosBusqueda.precioMaximo = e.target.value;
    filtrarAuto();
})

puertas.addEventListener('change', (e) => {
    datosBusqueda.puertas = parseInt(e.target.value);
    filtrarAuto();

})

transmision.addEventListener('change', (e) => {
    datosBusqueda.transmision = e.target.value;
    filtrarAuto();

})

color.addEventListener('change', (e) => {
    datosBusqueda.color = e.target.value;
    filtrarAuto();

})

function mostrarAutos(autos) {
    limpiarHTML(); //elimina el html previo

    autos.forEach(auto => {
        const { marca, modelo, year, puertas, transmision, precio, color } = auto;
        const autoHTML = document.createElement('p');

        autoHTML.textContent = `
            ${marca} ${modelo} - ${year} - ${puertas} Puertas - Transmision: ${transmision} - Precio: ${precio} - Color: ${color}
        `
        //insertar en el html
        resultado.appendChild(autoHTML);
    });
}

//LIMPIAR HTML

function limpiarHTML() {
    while(resultado.firstChild) {
        resultado.removeChild(resultado.firstChild);
    }
}

//genera los años del select
function llenarSelect() {
    for(let i = max; i >= min; i--) {
        const opcion = document.createElement('option');
        opcion.value = i;
        opcion.textContent = i;
        year.appendChild(opcion); //agrega ñas opciones de año al select
    }
}

//FUNCION QUE FILTRA EN BASE A LA BUSQUEDA
function filtrarAuto() {
                            //higher order function, son funciones que toman otras funciones como parametro
                            //el metodo filter soporta chaining(encadenamiento)
    const resultado = autos.filter( filtrarMarca ).filter( filtrarYear ).filter( filtrarPrecioMinimo )
                                                                        .filter( filtrarPrecioMaximo)
                                                                        .filter( filtrarPuertas )
                                                                        .filter( filtrarTransmision )
                                                                        .filter( filtrarColor );
    //console.log(resultado);

    if ( resultado.length ) {
        mostrarAutos(resultado);
    } else {
        noResultado();
    }
}

function noResultado() {

    limpiarHTML();

    //crea un div
    const noResultado = document.createElement('div');
    //le agrega 2 clases al div recien creado
    noResultado.classList.add('alerta', 'error');
    //le agrega texto al div
    noResultado.textContent = 'No hay Resultados, intenta con otra busqueda';    

    //agrega el div al html
    resultado.appendChild(noResultado);
}

function filtrarMarca(auto) {
    const { marca } = datosBusqueda;
    if( marca ) {
        return auto.marca === marca;
    }
    return auto;
}

function filtrarYear(auto) {
    const { year } = datosBusqueda;
    if( year ) {
        return auto.year === year;
    }
    return auto;
}

function filtrarPrecioMinimo(auto) {
    const { precioMinimo } = datosBusqueda;
    if(precioMinimo) {
        return auto.precio >= precioMinimo;
    }
    return auto;
}

function filtrarPrecioMaximo(auto) {
    const { precioMaximo } = datosBusqueda;
    if( precioMaximo ){
        return auto.precio <= precioMaximo
    }
    return auto;
}

function filtrarPuertas(auto) {
    const { puertas } = datosBusqueda;
    //console.log(puertas);
    if( puertas ) {
        return auto.puertas === puertas
    }
    return auto
}

function filtrarTransmision(auto) {
    const { transmision } = datosBusqueda;
    if( transmision ) {
        return auto.transmision === transmision;
    }
    return auto;
}

function filtrarColor(auto) {
    const { color }  = datosBusqueda;
    if( color ) {
        return auto.color === color;
    }
    return auto;    
}
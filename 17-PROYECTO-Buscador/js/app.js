
const resultado = document.querySelector('#resultado')

//selecciona el elemento select con el año
const year = document.querySelector('#year');
//el año actual
const max = new Date().getFullYear();
//el año actual - 10
const min = max - 10;

// console.log(max);
// console.log(min);

//carga la funcion mostrarAutos() cuando inicia el documento
document.addEventListener('DOMContentLoaded', () => {
    mostrarAutos()

    //llena las opciones del año
    llenarSelect()
} )

function mostrarAutos() {
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

//genera los años del select
function llenarSelect() {
    for(let i = max; i >= min; i--) {
        const opcion = document.createElement('option');
        opcion.value = i;
        opcion.textContent = i;
        year.appendChild(opcion); //agrega ñas opciones de año al select
    }
}
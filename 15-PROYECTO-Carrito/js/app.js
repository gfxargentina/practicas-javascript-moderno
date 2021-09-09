//variables
const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');
let articulosCarrito = [];

cargarEventListeners();
function cargarEventListeners() {
    //cuando agregas un curso presionando "Agregar al carrito"
    listaCursos.addEventListener('click', agregarCurso);

    //elimina cursos del carrito
    carrito.addEventListener('click', eliminarCurso);

    //vaciar el carrito
    vaciarCarritoBtn.addEventListener('click', () => {
        articulosCarrito = []; //reseteamos el arreglo

        limpiarHtml(); //eliminamos todo el html
    })

}

//funciones
function agregarCurso(e) {
    e.preventDefault();

    if( e.target.classList.contains('agregar-carrito') ) {
        const cursoSeleccionado = e.target.parentElement.parentElement;
        leerDatosCurso(cursoSeleccionado);
    }
}

//elimina un curso del carrito
function eliminarCurso(e) {
    if(e.target.classList.contains('borrar-curso')) {
        const cursoId = e.target.getAttribute('data-id');
        
        //elimina del arreglo de articulosCarrito por el data-id
        articulosCarrito = articulosCarrito.filter( curso => curso.id !== cursoId );

        carritoHTML(); //iterar sobre el carrito y mostrar su html
    }
}

//lee el contenido del HTML al que le dimos click y extrae la informacion del curso
function leerDatosCurso(curso) {
    console.log(curso)
    //crear un objeto con el contenido del curso actual
    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    }
    //console.log(infoCurso)

    //revisa si un elemento ya existe en el carrito
    const existe = articulosCarrito.some( curso => curso.id === infoCurso.id );
    if(existe) {
        //actualizamos la cantidad
        const cursos = articulosCarrito.map( curso => {
            if( curso.id === infoCurso.id ) {
                curso.cantidad++;
                return curso; //retorna el objeto actualizado
            } else {
                return curso; //retorna los objetos que no son los duplicados
            }
        } );
        articulosCarrito = [...cursos];
    } else {
        //agregar elementos al arreglo de carrito
    articulosCarrito = [...articulosCarrito, infoCurso];
    }


    carritoHTML();
}

//muestra el carrito de compras en el html
function carritoHTML() {
    //limpiar el html
    limpiarHtml();

    //recorre el carrito y genera el html
    articulosCarrito.forEach( curso => {

        const { imagen, titulo, precio, cantidad, id } = curso;

        const row = document.createElement('tr');
        row.innerHTML = ` 
        <td> <img src="${imagen}" width="100"> </td>
        <td> ${titulo} </td>
        <td> ${precio} </td> 
        <td> ${cantidad} </td>  
        <td> 
            <a href="#" class="borrar-curso" data-id="${id}" > X </a>
         </td> 
        
        `;

        //agregar el html del carrito en el tbody
        contenedorCarrito.appendChild(row);
    } );

}

//elimina los cursos del tbody
function limpiarHtml() {
    //forma lenta
    // contenedorCarrito.innerHTML = '' ;

    //forma optimizada mas rapida
    while(contenedorCarrito.firstChild) {
        contenedorCarrito.removeChild(contenedorCarrito.firstChild)
    }
}
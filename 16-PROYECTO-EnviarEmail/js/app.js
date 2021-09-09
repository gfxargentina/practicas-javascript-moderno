//variables

const btnEnviar = document.querySelector('#enviar');
const formulario = document.querySelector('#enviar-mail');
const btnReset = document.querySelector('#resetBtn');

//variables para campos
const email = document.querySelector('#email');
const asunto = document.querySelector('#asunto');
const mensaje = document.querySelector('#mensaje');

//regex para validar email
const er = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


eventListener();
//para que cuando se cargue la pagina llame a la funcion iniciarApp
//y bloquee el boton enviar
function eventListener() {
    document.addEventListener('DOMContentLoaded', iniciarApp);
    //campos del formulario
    email.addEventListener('blur', validarFormulario);
    asunto.addEventListener('blur', validarFormulario);
    mensaje.addEventListener('blur', validarFormulario);

    //reinicia el formulario
    btnReset.addEventListener('click', resetearFormulario);

    //enviar email para
    formulario.addEventListener('submit', enviarEmail );

}


//funciones
function iniciarApp() {
    //deshabilita el boton enviar
    btnEnviar.disabled = true;
    btnEnviar.classList.add('cursor-not-allowed', 'opacity-50');
}

//validar formulario
function validarFormulario(e) {

    //para saber que tipo es el campo
    //console.log(e.target.type);

    if(e.target.value.length > 0) {
        //elimina los errores 
        const error = document.querySelector('p.error');// selecc. etiqueta P que tenga clase error
         if(error) {
             error.remove();
         }
        

        //borra una clase
        e.target.classList.remove('border', 'border-red-500');
        //agrega una clase 
        e.target.classList.add('border', 'border-green-500');
    } else {
        e.target.classList.remove('border', 'border-green-500');
        mostrarError('Todos los campos son obligatorios');
    }

    if( e.target.type === 'email') {


        if( er.test( e.target.value )) {
            //console.log('email valido')
            const error = document.querySelector('p.error');// selecc. etiqueta P que tenga clase error
            if(error) {
            error.remove();
            
        e.target.classList.remove('border', 'border-red-500');
        e.target.classList.add('border', 'border-green-500');

         }
        } else {
            //console.log('email no valido')
            e.target.classList.remove('border', 'border-green-500');            
            mostrarError('Email no valido');
            
        }
    }

    if( er.test( email.value ) && asunto.value !== '' && mensaje.value !== '' ){
        //habilita el boton enviar
        btnEnviar.disabled = false;
        btnEnviar.classList.remove('cursor-not-allowed', 'opacity-50');
    } 

     
}

function mostrarError(mensaje) {
    const mensajeError = document.createElement('p');
    mensajeError.textContent = mensaje;
    mensajeError.classList.add('border', 'border-red-500', 'background-red-100', 'text-red-500', 'p-3', 'mb-5', 'text-center', 'error');

    //revisa los elementos por si hay una clase error y la muestra
    const errores = document.querySelectorAll('.error');
    if(errores.length === 0){
        //muestra el mensaje abajo
        //formulario.appendChild(mensajeError);

        //muestra el mensaje antes de la clase elegida - clase mb-10
        formulario.insertBefore(mensajeError, document.querySelector('.mb-10'));
    }
}

//envia el email para
function enviarEmail(e) {
    e.preventDefault();
    const spinner = document.querySelector('#spinner');
    spinner.style.display = 'flex';

    //despues de 2 segundos ocultar el spinner y mostrar mensaje
    setTimeout(() => {
        spinner.style.display = 'none';
        
        //mensaje se envio correctamente
        const parrafo = document.createElement('p');
        parrafo.textContent = 'El mensaje se envio correctamente';
        parrafo.classList.add('border', 'bg-green-500', 'text-white','font-bold', 'p-3', 'mb-5', 'text-center');

        //muestra el mensaje despues del spinner
        formulario.insertBefore(parrafo, spinner);

        setTimeout(() => {
            parrafo.remove();
            resetearFormulario();
        }, 2000);

    }, 2000);
}


//resetear formulario 
function resetearFormulario() {
    formulario.reset();
    iniciarApp();
}
//variables
const inputEmail = document.querySelector("#email");
const inputAsunto = document.querySelector("#asunto");
const mensaje = document.querySelector("#mensaje");
const formulario = document.querySelector("form");
const btnEnviar = document.querySelector("#enviar")
const spinner = document.querySelector(".sk-circle");
const btnReset = document.querySelector("#btn-reset");

//Funciones

const iniciarApp = () => {
    btnEnviar.disabled = true;
    btnEnviar.classList.add("disabled");
}


const validarCampos = e => {
    
    const er = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (e.target.value.length > 0) {
        e.target.style.borderColor = "green"
        const error = document.querySelector(".mensajeError");
        if (error) {
            error.remove();
        }
        
    } else {
        e.target.style.borderColor = "red";
        mensajeError("Campo obligatrio")
    }

    if (e.target.type === "email") {

        if (er.test(e.target.value)) {
            e.target.style.borderColor = "green";
            const error = document.querySelector(".mensajeError");
            if (error) {
                error.remove();
            }
        } else {
            e.target.style.borderColor = "red";
            mensajeError("Email no valido");
        }
    }

    if (er.test(inputEmail.value) && inputAsunto.value !== "" && mensaje.value !== "") {
        
        btnEnviar.disabled = false;
        btnEnviar.classList.remove("disabled");
        
    }

};

const enviar = e => {
    e.preventDefault();

    spinner.style.display = "flex";

    setTimeout(() => {
        spinner.style.display = "none";
        const emailEnviado = document.createElement("p");

        emailEnviado.textContent = "Email enviado con exito!!";
        emailEnviado.classList.add("emailEnviado");
        formulario.insertBefore(emailEnviado, document.querySelector(".botones"));

        setTimeout(() => {
            emailEnviado.remove();
            formulario.reset();
            iniciarApp();
        }, 2000);
    }, 2000);

    
    

}

const resetearForm = e => {
    e.preventDefault();
    formulario.reset();

    iniciarApp();
}

const mensajeError = (mensaje) => {
    const p = document.createElement("p");
    p.classList.add("mensajeError");
    p.textContent = mensaje;

    const errores = document.querySelectorAll(".mensajeError");
    if (errores.length === 0) {
        formulario.insertBefore(p, formulario.firstChild)
    }

};




//Eventos
document.addEventListener("DOMContentLoaded", iniciarApp);
inputEmail.addEventListener("blur", validarCampos);
inputAsunto.addEventListener("blur", validarCampos);
mensaje.addEventListener("blur", validarCampos);
btnReset.addEventListener("click", resetearForm);
formulario.addEventListener("submit", enviar);





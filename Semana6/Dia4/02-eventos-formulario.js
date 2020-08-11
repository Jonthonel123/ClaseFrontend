/**
 *elemento.onload
 *funcion que se dispara cuando se an cargado todos
 * los elementos hijos de un elemento
 */
window.onload = () => {
    let formulario = document.getElementById("formulario");
    let inputEmail = document.getElementById("inputEmail");
    let inputPassword = document.getElementById("inputPassword");
    let enlace = document.getElementById("enlace");
    let helperEmail = document.getElementById("helperEmail");

    const validarEmail = (email) => {
        let regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

        if (regexEmail.test(email) === false) {
            helperEmail.innerText = "Error, ingresa un correo valido"
            helperEmail.setAttribute("class", "text-danger")
        } else {
            let resultado = usuarios.filter((objUsuario) => {
                if (objUsuario.correo === email) {
                    return objUsuario.correo
                }
            })

            if (resultado.length > 0) {
                helperEmail.innerText = "ERROR el email ya esta siendo usado"
                helperEmail.classList.remove("text-success")
                helperEmail.classList.add("text-danger")
                inputEmail.setAttribute("class", "input-danger")
            } else {
                helperEmail.innerText = "BIen correo disponible"
                helperEmail.classList.remove("text-danger")
                helperEmail.classList.add("text-success")
                inputEmail.setAttribute("class", "input-succsess")
            }

        }

    }

    //     let resultados = usuarios.filter(
    //         (objUsuario) => objUsuario.correo === email
    //     );

    //     helperEmail.innerText =
    //         resultados.length > 0 ?
    //         "ERROR el email ya esta siendo usado" :
    //         "BIEN csmr El email esta disponible";
    // };

    inputEmail.onkeyup = (e) => {
        // console.log("presionando una tecla");
        // console.log(e.key);
        // console.log(e);
        let regexEmail =
            validarEmail(inputEmail.value.trim());
    };

    /**
     * Evento cuando se ejecuta cuando se hace submit en un formulario
     */
    formulario.onsubmit = (event) => {
        /**
         * preventDefault=> previene todas las acciones automaticas
         * disparadas por cualquier evento
         * ejm:el click en un enlace <a> redirecciona a una pagina
         * ejm: el sumit de un formulario envia datos al server
         * y actualiza la pagina
         * ejm: el click derecho en cualquier zona, abre un menu contextual
         * en la pagina
         * CONCLUSION:cualquier de estos elementos puedes ser evitados
         */
        event.preventDefault()
        console.log("submit del forumulario");
        let objetoUsuario = {
            usuario: inputEmail.value,
            password: inputPassword.value,
        }
        console.log("enviando a...");
        console.log(objetoUsuario);
    }
    enlace.onclick = (e) => {
        e.preventDefault()
    }
};
//  validar nombre 

    // Verificar que es un string 
        // Verificar que solo hay letras o que NO hay números ni caracteres especiales en la string
    

    /**
     * Funcion para validar un texto y que no sea vacío
     * @param {string} nombre 
     * @return {boolean} boolean true or false
     * 
     */

    // const regex = ^[A-ZÁÉÍÓÚÜÑ][a-záéíóúüñ]+$
    function validarNombre(nombre) {
        const name = nombre.trim();
        //console.log("sin limpiar: ", nombre, " y limpio: ", name)
        const pattern = /^[a-zA-ZáéíóúüñÁÉÍÓÚÑ]+(?:[\s][a-zA-ZáéíóúüñÁÉÍÓÚÑ]+)*$/;
        //if(!pattern.test(input.value))
        if (typeof name !== 'string' || name === "" || !pattern.test(name)){
            console.log("No es nombre")
            return false
        } else {
            return true
        }
    }
    console.log(validarNombre("Fabian Manuel"))
    console.log(validarNombre("             "))
    console.log(validarNombre("Fabian69 Manuel"))

//  validar email

    // Localizar que la @ este en medio de un nombre de usuario y un servidor
        // Que termine en "." y extensión del servidor
            //  Decidir si restringo los servidores de email o verificar el correo por otro lado?


            function validarEmail(email) {
                const correo = email.trim();
                const pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
                //console.log("sin limpiar: ", email, " y limpio: ", correo)
            if ( typeof correo !== 'string' || correo === "" || !pattern.test(correo)){
                    console.log("No es email")
                    return false
                } else {
                    return true
                }
            }
            console.log(validarEmail("arodifuentes10@gmail.com"))
            console.log(validarEmail("                       "))
            console.log(validarEmail("arodifuentes10gmail.com"))
            

//  validar URL puesta 


function validarUrl(url) {
    const urlR = url.trim();
    const pattern = /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/;
     //console.log("sin limpiar: ", url, " y limpio: ", urlR)
    if (typeof urlR !== 'string' || urlR === "" || !pattern.test(urlR)) {
        console.log("no es una url")
        return false
    } else {
        return true
    }
}
console.log(validarUrl("https://developer.mozilla.org/es/docs/Learn/Common_questions/Web_mechanics/What_is_a_URL"))
console.log(validarUrl("https://developer.mozilla.org/es/docs/Learn/Common_questions/Web_mechanics/What_is_a_URL.com"))
console.log(validarUrl("https://developer.mozilla.org/es/docs/Learn/Common_qu estions/Web_mechanics/What_is_a_URL."))
console.log(validarUrl("https://developer.mozilla.org/es/docs/Learn/Common_qu estions/Web_mechanics/What_is_a_URL    oy"))


//  validar fecha 
    // Verificar que la fecha sea un "string" en el que solo estén permitidos los números y la / 
        // Verificar que la fecha introducida es valida

/**
 * comprobar fecha
 */
    
function mirarFecha(fecha) {

    const date = fecha.trim();
    const pattern = /^\d{4}([\-/. ])(0?[1-9]|1[1-2])\1(3[01]|[12][0-9]|0?[1-9])$/;
    if (typeof date !== 'string' || date === "" || !pattern.test(date)){
        console.log("entro en el if")
        return false
    } else {
        return true
    }
}

    console.log(mirarFecha("2000-02-19"))
    console.log(mirarFecha("02-19-2000       "))
    console.log(mirarFecha("19-02-2000"))
        











//  validar tiempo en formato de hora 
    // Observar en que formato guarda la hora
        // 

//  validar la fecha y hora de nacimiento 

//  validar mes  

//  validar semana  

//  validar un rango númerico min de -10 a un maximo de 10  

//  validar un intervalo del 0 al 10  

//  validar número de teléfono  

    // Verificar que sea un valor numerico 
        // Verificar que el maximo de caracteres sean 9

//  validar terminos de búsqueda 

//  validar un color

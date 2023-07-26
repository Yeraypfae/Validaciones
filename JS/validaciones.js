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
        console.log("No es una fecha")
        return false
    } else {
        return true
    }
}

    console.log(mirarFecha("2000/02/19"))
    console.log(mirarFecha("02/19/2000       "))
    console.log(mirarFecha("19/02/2000"))
        











//  validar tiempo en formato de hora 
    // Observar en que formato guarda la hora
        // 

        function mirarHora(hora) {

            const tiempo = hora.trim();
            const pattern = /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/;
            if (typeof tiempo !== 'string' || tiempo === "" || !pattern.test(tiempo)){
                console.log("No es una hora")
                return false
            } else {
                return true
            }
        }
        
            console.log(mirarHora("00:00"))
            console.log(mirarHora("04:222      "))
            console.log(mirarHora("19:20"))




//  validar la fecha y hora de nacimiento 

function mirarFechayhora(fyc) {

    const tiempoyfecha = fyc.trim();
    const pattern = /^([0-2][0-9]|3[0-1])(\/|-)(0[1-9]|1[0-2])\2(\d{4})(\s)([0-1][0-9]|2[0-3])(:)([0-5][0-9])$/
    if (typeof tiempoyfecha !== 'string' || tiempoyfecha === "" || !pattern.test(tiempoyfecha)){
        console.log("No es una hora y fecha")
        return false
    } else {
        return true
    }
}

    console.log(mirarFechayhora("00:00 19/05/2000"))
    console.log(mirarFechayhora(" nada      "))
    console.log(mirarFechayhora("19/05/2000 12:46"))

7 //  validar mes  

function validarMes(mes) {
    const meses = mes.trim();
    const pattern = /(\b\d{1,2}\D{0,3})?\b(?:Jan(?:uary)?|Feb(?:ruary)?|Mar(?:ch)?|Apr(?:il)?|May|Jun(?:e)?|Jul(?:y)?|Aug(?:ust)?|Sep(?:tember)?|Oct(?:ober)?|(Nov|Dec)(?:ember)?)\D?(\d{1,2}(st|nd|rd|th)?)?(([,.\-\/])\D?)?((19[7-9]\d|20\d{2})|\d{2})*/;
    //console.log("sin limpiar: ", mes, " y limpio: ", meses)
    if (typeof meses !== 'string' || meses === "" || !pattern.test(meses)) {
        console.log("entro en el if")
        return false
    } else {
        return true
    }
}
console.log(validarMes("Febrero de 2023"))
console.log(validarMes("2023 de agosto"))
console.log(validarMes("2023-03-28"))



 8//  validar semana  

function validarSemana(semana){
    const semanas = semana.trim();
    const pattern = /^(?<week>(\d{2}))(?<year>(\d{2}){0,2}[-\/]?)/;
    //console.log("sin limpiar: ", semana, " y limpio: ", semanas)
    if (typeof semanas !== 'string' || semanas === "" || !pattern.test(semanas)) {
        console.log("entro en la semana")
        return false
    } else {
        return true
    }
}
console.log(validarSemana("23-2022"))
console.log(validarSemana("Semana 23-2023"))



//validar fecha de control

function verFormato(atributoFormato) {
    console.log("Funciona")
    console.log(typeof document.querySelector(atributoFormato).value)
}

9 //  validar un rango númerico min de -10 a un maximo de 10  


function validarRango(rango){
    const rangos = rango.trim();
    //console.log("sin limpiar: ", intervalo, " y limpio: ", distancia)
    if (typeof rangos !== 'string' || rangos > 10 || rangos <-10) {
        console.log("entro en el rango")
        return false
    } else {
        return true
    }
}

console.log(validarRango("10"))
console.log(validarRango("-10"))
console.log(validarRango("-11"))
console.log(validarRango("11"))
console.log(validarRango("9"))



10 //  validar un intervalo del 0 al 10  

function validarIntervalo(intervalo){
    const distancia = intervalo.trim();
    //console.log("sin limpiar: ", intervalo, " y limpio: ", distancia)
    if (typeof distancia !== 'string' || distancia > 10 || distancia <= 0) {
        console.log("entro en la el intervalo")
        return false
    } else {
        return true
    }
}

console.log(validarIntervalo("10"))
console.log(validarIntervalo("-1"))
console.log(validarIntervalo("9"))
console.log(validarIntervalo("5"))
console.log(validarIntervalo("14"))

11 //  validar número de teléfono  


function validarTelefono(telefono){
    const telefonos = telefono.trim();
    const pattern = /(6|7)[ -]*([0-9][ -]*){8}/
    if (telefonos.length < 9 || telefonos.length > 12) {
        console.log("El número de teléfono debe tener entre 9 y 12 caracteres");
        return false;
    }
    if (typeof telefonos !== 'string' || telefonos === "" || !pattern.test(telefonos)) {
        console.log("entro en la semana")
        return false
    } else {
        return true
    }
}

console.log(validarTelefono("661-18-69-18"))
console.log(validarTelefono("661186918"))
console.log(validarTelefono("6611869181818"))
console.log(validarTelefono("5"))
console.log(validarTelefono("14"))

    // Verificar que sea un valor numerico 
        // Verificar que el maximo de caracteres sean 9

//  validar terminos de búsqueda 

//  validar un color
//  funcion que permite ver comom recoge los datos un formulario
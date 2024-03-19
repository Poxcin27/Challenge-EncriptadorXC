// Codigo para el uso del Challenge de Alura                                                    Poxcin Morales Jose Pedro

// Declaracion de variables
var encryptbutton = document.querySelector(".button-encrypt"); 
var decryptbutton = document.querySelector(".button-decrypt");
var personaconlupa = document.querySelector(".contenedor-derecho");
var contenedor = document.querySelector(".contenedor-infderecho");
var resultado = document.querySelector(".texto-resultado");

// Asigna funciones a los eventos de click de los botones
encryptbutton.onclick = encrypt;
decryptbutton.onclick = decrypt;

// Funcion para encriptar el texto
function encrypt() {
    ocultarAdelante(); // Oculta ciertos elementos en la interfaz
    var cajatexto = recuperarTexto(); // Obtiene el texto de entrada del usuario
    resultado.textContent = encryptText(cajatexto); // Aplica la encriptacion al texto y lo muestra en la interfaz
}

// Funcion para desencriptar el texto
function decrypt() {
    ocultarAdelante(); // Oculta ciertos elementos en la interfaz
    var cajatexto = recuperarTexto(); // Obtiene el texto de entrada del usuario
    resultado.textContent = decryptText(cajatexto); // Aplica la desencriptacion al texto y lo muestra en la interfaz
}

// Funcion para recuperar el texto ingresado por el usuario
function recuperarTexto() {
    var cajatexto = document.querySelector(".cajadetexto");
    return cajatexto.value;
}

// Funcion para ocultar ciertos elementos en la interfaz
function ocultarAdelante() {
    personaconlupa.classList.add("ocultar");
    contenedor.classList.add("ocultar");
}

// Funcion para encriptar el texto segun un conjunto de reglas
function encryptText(mensaje) {
    var texto = mensaje;
    var textoFinal = "";

    for (var i = 0; i < texto.length; i++) {
        // Aplica la encriptacion segun las reglas establecidas
        if (texto[i] === "a") {
            textoFinal += "ai";
        } else if (texto[i] === "e") {
            textoFinal += "enter";
        } else if (texto[i] === "i") {
            textoFinal += "imes";
        } else if (texto[i] === "o") {
            textoFinal += "ober";
        } else if (texto[i] === "u") {
            textoFinal += "ufat";
        } else {
            textoFinal += texto[i];
        }
    }
    return textoFinal;
}

// Funcion para desencriptar el texto segun un conjunto de reglas
function decryptText(mensaje) {
    var texto = mensaje;
    var textoFinal = "";

    for (var i = 0; i < texto.length; i++) {
        // Aplica la desencriptacion segun las reglas establecidas
        switch (texto[i]) {
            case "a":
                if (texto[i+1] === "i") {
                    textoFinal += "a";
                    i += 1; // Salta al siguiente caracter despues de 'i'
                } else {
                    textoFinal += texto[i];
                }
                break;
            case "i":
                if (texto[i+1] === "m" && texto[i+2] === "e" && texto[i+3] === "s") {
                    textoFinal += "i";
                    i += 3;
                } else {
                    textoFinal += texto[i];
                }
                break;
            case "e":
                if (texto[i+1] === "n" && texto[i+2] === "t" && texto[i+3] === "e" && texto[i+4] === "r") {
                    textoFinal += "e";
                    i += 4;
                } else {
                    textoFinal += texto[i];
                }
                break;
            case "o":
                if (texto[i+1] === "b" && texto[i+2] === "e" && texto[i+3] === "r") {
                    textoFinal += "o";
                    i += 3;
                } else {
                    textoFinal += texto[i];
                }
                break;
            case "u":
                if (texto[i+1] === "f" && texto[i+2] === "a" && texto[i+3] === "t") {
                    textoFinal += "u";
                    i += 3;
                } else {
                    textoFinal += texto[i];
                }
                break;
            default:
                textoFinal += texto[i];
        }
    }
    return textoFinal;
}

// Funcion para copiar el texto resultante al portapapeles
const btnCopiar = document.querySelector(".copybuttton");
btnCopiar.addEventListener("click", copiar);

function copiar() {
    var contenido = document.querySelector(".texto-resultado").textContent;
    navigator.clipboard.writeText(contenido);
    console.log("hola");
}

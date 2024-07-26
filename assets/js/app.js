let textAreaInput = ''
let textoResultado = ''
let arregloTexto = ''
let preTexto = ''

const keysToEncript = {
    'e': 'enter',
    'i': 'imes',
    'a': 'ai',
    'o': 'ober',
    'u': 'ufat'
}

const keysToDecrypt = {
    'enter': 'e',
    'imes': 'i',
    'ai': 'a',
    'ober': 'o',
    'ufat': 'u'
}

function encriptador() {
    textAreaInput = obtenerTexto()
    arregloTexto = textAreaInput.toLowerCase().trim().split('')
    preTexto = arregloTexto.map(char => keysToEncript[char] || char)
    textoResultado = preTexto.join('')
    mostrarOcultar()
    imprimirResultado(textoResultado)
    
}

function desencriptador() {
    textAreaInput = obtenerTexto()
    arregloTexto = textAreaInput.toLowerCase().trim().split(' ');
    preTexto = arregloTexto.map(word => {
        for (let i = 0; i < word.length; i++) {
            for (let key in keysToDecrypt) {
                if (word.includes(key)) {
                    word = word.replace(key, keysToDecrypt[key]);
                }
            }
        }
        return word;
    });
    textoResultado = preTexto.join(' ');
    mostrarOcultar()
    imprimirResultado(textoResultado)
}

function imprimirResultado(texto) {
    document.querySelector('#textAreaOutput').innerHTML = texto
}

function obtenerTexto() {
    textAreaInput = document.querySelector('#textAreaInput').value
    return textAreaInput
}

// hacer un readonly de un textarea
var textarea = document.getElementById('textAreaOutput');
textarea.setAttribute('readonly', 'true');

// solo puedan recibir valores en minuscula y no caracteres especiales

document.addEventListener('DOMContentLoaded', function () {
    var textarea = document.getElementById('textAreaInput');

    textarea.addEventListener('input', function () {
        var originalValue = textarea.value;
        var cleanedValue = originalValue.toLowerCase().replace(/[^a-z0-9\s]/g, '');
        textarea.value = cleanedValue;
    });
});

function copiarTexto() {
    navigator.clipboard.writeText(document.getElementById('textAreaOutput').value)
        .then(() => {
            console.log('Texto copiado al portapapeles')
        })
        .catch(err => {
            console.error('Error al copiar al portapapeles:', err)
        })
}

let areaOutput_respuesta  = document.querySelector(".areaOutput__respuesta")
let areaOutput_busqueda = document.querySelector(".areaOutput__busqueda");

areaOutput_respuesta.style.display="none"

function mostrarOcultar() {
    if (areaOutput_respuesta.style.display === "none") {
        areaOutput_respuesta.style.display = "flex";
        areaOutput_busqueda.style.display = "none";
    }
}

let areaInput = document.querySelector('.areaInput__text');

areaInput.addEventListener('click', function() {
    areaInput.value=""
    areaOutput_respuesta.style.display = "none";
    areaOutput_busqueda.style.display = "flex";
});

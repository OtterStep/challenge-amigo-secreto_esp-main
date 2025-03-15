// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Agregar amigo// debe validar que sea diferente de vacío y que se ingrese en un array.
const listaAmigos = [];

function agregarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nombre = inputAmigo.value.trim();

    if (nombre === '') {
        alert('Por favor, ingresa un nombre válido.');
        return;
    }

    listaAmigos.push(nombre);
    inputAmigo.value = '';

    mostrarLista();
}


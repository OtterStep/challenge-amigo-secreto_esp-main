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


//LISTA AMIGOS
function mostrarLista() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    listaAmigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert('La lista está vacía. Agrega al menos un amigo.');
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    const amigoSeleccionado = listaAmigos[indiceAleatorio];

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<a>🎉 Amigo Secreto: ${amigoSeleccionado} 🎁</a>`;
}


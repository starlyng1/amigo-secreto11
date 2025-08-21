let amigos = [];

let input = document.getElementById("nome-amigo");
let lista = document.getElementById("lista-amigos");
let botonAdicionar = document.getElementById("adicionar");
let botonSortear = document.getElementById("sortear");
let resultado = document.getElementById("sorteio");

botonAdicionar.onclick = function () {
  let nombre = input.value.trim();

  if (nombre === "") {
    alert("Por favor escribe un nombre.");
    return;
  }

  amigos.push(nombre);
  mostrarLista();
  input.value = "";
};

function mostrarLista() {
  lista.innerHTML = "";

  for (let i = 0; i < amigos.length; i++) {
    let item = document.createElement("li");
    item.textContent = amigos[i];
    lista.appendChild(item);
  }
}

botonSortear.onclick = function () {
  if (amigos.length === 0) {
    alert("Agrega al menos un nombre.");
    return;
  }

  let indice = Math.floor(Math.random() * amigos.length);
  let elegido = amigos[indice];

  resultado.textContent = "🎉 El amigo secreto sorteado es: " + elegido;
};

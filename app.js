let listaAmigos = [];

function adicionarAmigo() {
  let nomeAmigo = document.querySelector('input').value.trim();
  
  if (nomeAmigo === '') {
    alert('Por favor, insira um nome.');
    return false;
  }

  listaAmigos.push(nomeAmigo);
  atualizarLista();
  document.querySelector('input').value = '';
}

function atualizarLista() {
  let lista = document.querySelector('.name-list');
  lista.innerHTML = '';

  for (let i = 0; i < listaAmigos.length; i++) {
    let item = document.createElement('li');
    item.textContent = listaAmigos[i];
    lista.appendChild(item);
  }
}

function sortearAmigo() {
  if (listaAmigos.length === 0) {
    alert('Lista vazia! Adicione seus amigos!');
    return;
  }

  let indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
  let amigoSorteado = listaAmigos[indiceAleatorio];
  
  document.getElementById('resultado').innerHTML = 'O amigo sorteado é: ' + amigoSorteado;
}
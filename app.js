let listaAmigos = [];

function adicionarAmigo() {
  let nomeAmigo = document.querySelector('#amigo').value;
  
  if (nomeAmigo) {
    listaAmigos.push(nomeAmigo);
    atualizarLista();
    document.querySelector('#amigo').value = '';

  } else if (nomeAmigo.trim() === ''){
    alert('Por favor, insira um nome.');
    return false;
  } 
  return true;
}


function atualizarLista() {
  let lista = document.querySelector('#listaAmigos');

  lista.innerHTML = '';

  listaAmigos.forEach((amigo) => {
    let item = document.createElement('li');

    item.textContent = amigo;
    lista.appendChild(item);
  });
}






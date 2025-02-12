//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

// Array para armazenar os amigos
let amigos = [];

// Função para adicionar um amigo à lista
function adicionarAmigo() {
    let input = document.getElementById("nomeAmigo");
    let nome = input.value.trim(); // Remove espaços extras

    // Validação para impedir entrada vazia
    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    amigos.push(nome); // Adiciona o nome ao array
    input.value = ""; // Limpa o campo de entrada
    atualizarLista(); // Atualiza a lista na tela
}

// Função para exibir os amigos na lista HTML
function atualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpa a lista antes de atualizar

    // Percorre o array de amigos e cria itens <li>
    for (let amigo of amigos) {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    }
}

// Função para sortear um amigo secreto
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Adicione pelo menos um amigo antes de sortear.");
        return;
    }

    let indiceSorteado = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceSorteado];

    document.getElementById("resultado").innerHTML = `🎉 O amigo secreto é: <strong>${amigoSorteado}</strong>!`;
}

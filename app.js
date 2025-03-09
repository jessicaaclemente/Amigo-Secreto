//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let nomeDosAmigos = [];

function adicionarAmigo() {

    let resultadoAmigo = document.getElementById("resultado"); //Limpa o resultado para a próxima rodada
    resultadoAmigo.innerText = "";

    let nomeInput = document.getElementById("amigo");
    let nome = nomeInput.value.trim(); // Pega o valor do input e remove espaços extras

    if (nome !== "") {
        nomeDosAmigos.push(nome);
        nomeInput.value = ""; // Limpa o campo após adicionar
        atualizarLista();
    } else {
    alert("Digite um nome válido!");
    }

}

function atualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpa a lista antes de recriar

    nomeDosAmigos.forEach(nome => {
        let li = document.createElement("li");
        li.textContent = nome;
        lista.appendChild(li);
    });

}

function sortearAmigo(){
    let indiceDoSorteado = Math.floor(Math.random() * nomeDosAmigos.length);
    let resultadoAmigo = document.getElementById("resultado");
    let nomeDoAmigo = nomeDosAmigos[indiceDoSorteado];
    resultadoAmigo.innerText = `Nome do amigo sorteado: ${nomeDoAmigo}`;
    reiniciarJogo();
}

function reiniciarJogo(){
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Remove todos os nomes da lista
    nomeDosAmigos = []; // Esvazia o array
}
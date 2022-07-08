var button = document.querySelector("button");

button.onclick = function() {
    var nome = prompt("Qual é o comando para adicionar um repositorio remoto?");
    if ((nome = "git init")) {
        alert("o" + nome + ",adiciona um repositorio remoto.  Parabéns você acertou!");
    }
    window.location = "aula2.html";
}
var button = document.querySelector("button");

button.onclick = function() {
    var nome = prompt("Qual é o comando para clonar um repositório remoto/ ");
    if ((nome = "git clone")) {
        alert("o" + nome + ". serve para clonar um repositório remoto. Parabéns, você acertou!");
    }
    window.location = "aula3.html";
}
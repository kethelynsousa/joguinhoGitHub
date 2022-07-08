var button = document.querySelector("button");

button.onclick = function() {
    var nome = prompt("Qual é o comando utilizada para determinar quais arquivos estão em quais estados no repositório remoto/ ");
    if ((nome = "git add")) {
        alert("o" + nome + ". serve para determinar quais arquivos estão em quais estado no repositório remoto. Parabéns, você acertou!");
    }
    window.location = "aula4.html";
}
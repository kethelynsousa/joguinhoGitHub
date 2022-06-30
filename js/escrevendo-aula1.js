//o que é uma variável?
/*
a variável é um espaço reservado na memória do computador.
vamos declarar variáveis no JavaScript?

*/

var button = document.querySelector("buttor");

button.onclick = function() {
    var nome = prompt("Qual é o comando para iniciar o git?");
    if ((nome = "git init")) {
        alert("O" + nome + ", serve para iniciar o git.Parabéns você acertou!")
    }
}
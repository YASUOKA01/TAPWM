function jogar(escolhaUsuario) {
    const escolhaPc = Math.floor(Math.random() * 3) + 1;

    const nomes = ["", "Pedra", "Papel", "Tesoura"];

    document.getElementById("usuario").textContent =
        "Você escolheu: " + nomes[escolhaUsuario];

    document.getElementById("pc").textContent =
        "Computador escolheu: " + nomes[escolhaPc];

    let resultado = "";

    if (escolhaUsuario === escolhaPc) {
        resultado = "Empate!";
    } else if (
        (escolhaUsuario === 1 && escolhaPc === 3) ||
        (escolhaUsuario === 2 && escolhaPc === 1) ||
        (escolhaUsuario === 3 && escolhaPc === 2)
    ) {
        resultado = "Você ganhou!";
    } else {
        resultado = "Computador ganhou!";
    }

    document.getElementById("resultado").textContent = resultado;
}

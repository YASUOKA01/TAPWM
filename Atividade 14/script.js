function validar() {
    var nome = document.nomeform.elements['nome'].value;
    var email = document.nomeform.elements['email'].value;
    var comentario = document.nomeform.elements['comentario'].value;
    var pesquisa = document.nomeform.elements['pesquisa'];

    if (nome.length < 10) {
        alert("O nome deve ter no mínimo 10 caracteres.");
        return false;
    }

    if (email === "" || !email.includes("@")) {
        alert("Por favor, insira um e-mail válido.");
        return false;
    }

    if (comentario.length < 20) {
        alert("O comentário deve ter no mínimo 20 caracteres.");
        return false;
    }

    var valorPesquisa = "";
    for (var i = 0; i < pesquisa.length; i++) {
        if (pesquisa[i].checked) {
            valorPesquisa = pesquisa[i].value;
            break;
        }
    }

    if (valorPesquisa === "") {
        alert("Por favor, selecione uma opção na pesquisa.");
        return false;
    }

    if (valorPesquisa.toLowerCase() === "nao" || valorPesquisa.toLowerCase() === "não") {
        alert("Que bom que você voltou a visitar esta página");
    } else {
        alert("Volte a esta página!");
    }

    return true;
}

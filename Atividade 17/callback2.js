function exibeMEnsagensNaOrdem(mensagem, callback) {
  console.log(mensagem);
  callback();
}

exibeMEnsagensNaOrdem("Essa é a primeira", function () {
  console.log("Essa é a segunda");
});
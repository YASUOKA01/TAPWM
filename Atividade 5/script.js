let pessoas = [];

function adicionar() {
  let idade = parseInt(document.getElementById("idade").value);
  let sexo = document.getElementById("sexo").value;
  let opiniao = parseInt(document.getElementById("opiniao").value);

  if (!idade || !sexo || !opiniao) {
    alert("Preencha todos os campos!");
    return;
  }

  pessoas.push({ idade, sexo, opiniao });

  // Atualiza contador
  document.getElementById("contador").innerText =
    "Pessoas cadastradas: " + pessoas.length;

  document.getElementById("idade").value = "";
  document.getElementById("sexo").value = "";
  document.getElementById("opiniao").value = "";

  alert("Pessoa adicionada!");
}

function calcular() {
  if (pessoas.length === 0) {
    alert("Nenhum dado inserido!");
    return;
  }

  let somaIdade = 0;
  let maisVelho = pessoas[0].idade;
  let maisNovo = pessoas[0].idade;
  let pessimo = 0;
  let otimoBom = 0;
  let homens = 0;
  let mulheres = 0;

  pessoas.forEach(p => {
    somaIdade += p.idade;

    if (p.idade > maisVelho) maisVelho = p.idade;
    if (p.idade < maisNovo) maisNovo = p.idade;

    if (p.opiniao === 1) pessimo++;
    if (p.opiniao === 3 || p.opiniao === 4) otimoBom++;

    if (p.sexo === "M") homens++;
    if (p.sexo === "F") mulheres++;
  });

  let media = somaIdade / pessoas.length;
  let porcentagem = (otimoBom / pessoas.length) * 100;

  document.getElementById("resultado").innerHTML = `
    <p><strong>Idade média:</strong> ${media.toFixed(2)}</p>
    <p><strong>Mais velho:</strong> ${maisVelho}</p>
    <p><strong>Mais novo:</strong> ${maisNovo}</p>
    <p><strong>Quantidade que respondeu péssimo:</strong> ${pessimo}</p>
    <p><strong>Porcentagem de ótimo/bom:</strong> ${porcentagem.toFixed(2)}%</p>
    <p><strong>Homens:</strong> ${homens}</p>
    <p><strong>Mulheres:</strong> ${mulheres}</p>
  `;
}

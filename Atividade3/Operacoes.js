
function calcular() {
      let n1 = parseFloat(document.getElementById("num1").value);
      let n2 = parseFloat(document.getElementById("num2").value);

      let soma = n1 + n2;
      let sub = n1 - n2;
      let mult = n1 * n2;
      let div = n2 !== 0 ? (n1 / n2) : "Não é possível dividir por zero";
      let resto = n2 !== 0 ? (n1 % n2) : "Indefinido";

      document.getElementById("resultado").innerHTML =
        "Soma: " + soma + "<br>" +
        "Subtração: " + sub + "<br>" +
        "Produto: " + mult + "<br>" +
        "Divisão: " + div + "<br>" +
        "Resto da divisão: " + resto;
    }

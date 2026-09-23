   function retornarMaior(a, b, c) {
        return Math.max(a, b, c);
    }

    function ordenarCrescente(a, b, c) {
        return [a, b, c].sort((x, y) => x - y);
    }

    function verificarPalindromo(texto) {
        let limpo = texto.toLowerCase().replace(/\s+/g, '');
        let invertido = limpo.split('').reverse().join('');
        return limpo === invertido;
    }

    function verificarSubconjunto(p1, p2) {
        if (!p1 || !p2) return "erro";
        return p1.toLowerCase().includes(p2.toLowerCase()) ? "é um subconjunto" : "não é um subconjunto";
    }

    function obterDiaDaSemana(dataString) {
        const dias = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
        const data = new Date(dataString + "T12:00:00");
        return dias[data.getDay()];
    }

    // --- FUNÇÕES DE INTERFACE (CHAMADA PELOS BOTÕES) ---

    function executarMaior() {
        let a = Number(document.getElementById('n1_1').value);
        let b = Number(document.getElementById('n1_2').value);
        let c = Number(document.getElementById('n1_3').value);
        document.getElementById('res1').innerText = "O maior é: " + retornarMaior(a, b, c);
    }

    function executarOrdem() {
        let a = Number(document.getElementById('n2_1').value);
        let b = Number(document.getElementById('n2_2').value);
        let c = Number(document.getElementById('n2_3').value);
        document.getElementById('res2').innerText = "Ordem: " + ordenarCrescente(a, b, c).join(', ');
    }

    function executarPalindromo() {
        let txt = document.getElementById('texto3').value;
        let resultado = verificarPalindromo(txt) ? "Sim, é um palíndromo!" : "Não é um palíndromo.";
        document.getElementById('res3').innerText = resultado;
    }

    function executarSubconjunto() {
        let p1 = document.getElementById('palavra4_1').value;
        let p2 = document.getElementById('palavra4_2').value;
        document.getElementById('res4').innerText = "Resultado: " + verificarSubconjunto(p1, p2);
    }

    function executarDiaSemana() {
        let data = document.getElementById('data5').value;
        if(!data) {
            document.getElementById('res5').innerText = "Selecione uma data válida.";
            return;
        }
        document.getElementById('res5').innerText = "Cai num(a): " + obterDiaDaSemana(data);
    }

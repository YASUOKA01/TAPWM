function verificarTriangulo() {
            let inputA = document.getElementById('valorA').value;
            let inputB = document.getElementById('valorB').value;
            let inputC = document.getElementById('valorC').value;

            let a = Number(inputA);
            let b = Number(inputB);
            let c = Number(inputC);

            let displayResultado = document.getElementById('resultado');
            
            displayResultado.className = '';

            if (isNaN(a) || isNaN(b) || isNaN(c) || inputA.trim() === '' || inputB.trim() === '' || inputC.trim() === '') {
                displayResultado.innerText = "Erro: Por favor, insira apenas números válidos.";
                displayResultado.classList.add('erro');
                return;
            }

            let regra1 = Math.abs(b - c) < a && a < (b + c);
            let regra2 = Math.abs(a - c) < b && b < (a + c);
            let regra3 = Math.abs(a - b) < c && c < (a + b);

            if (regra1 && regra2 && regra3) {
                
                let tipo = "";
                if (a === b && b === c) {
                    tipo = "Equilátero";
                } else if (a !== b && a !== c && b !== c) {
                    tipo = "Escaleno";
                } else {
                    tipo = "Isósceles";
                }

                displayResultado.innerText = `Sucesso! Triângulo formado: ${tipo}.`;
                displayResultado.classList.add('sucesso');

            } else {
                displayResultado.innerText = "Atenção: Os valores informados NÃO formam um triângulo.";
                displayResultado.classList.add('alerta');
            }
        }

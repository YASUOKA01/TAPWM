function abrirCurso(curso) {
    if (curso === "") {
        return;
    }

    var confirmar = confirm("Deseja realmente abrir a janela contendo as informações deste curso?");

    if (confirmar) {
        var janela = window.open("", "_blank", "width=600,height=300");
        var conteudo = "";

        if (curso === "ads") {
            conteudo = "<h2>Análise e Desenvolvimento de Sistemas</h2><p>Curso voltado ao desenvolvimento de software, banco de dados e engenharia de software. Duração: 3 anos (6 semestres).</p>";
        } else if (curso === "gestao") {
            conteudo = "<h2>Gestão Empresarial</h2><p>Curso focado na administração de empresas, processos gerenciais e finanças. Duração: 3 anos (6 semestres).</p>";
        } else if (curso === "logistica") {
            conteudo = "<h2>Logística</h2><p>Curso focado na cadeia de suprimentos, transporte e armazenamento de mercadorias. Duração: 3 anos (6 semestres).</p>";
        } else if (curso === "fabricacao") {
            conteudo = "<h2>Fabricação Mecânica</h2><p>Curso focado em processos industriais, usinagem e controle de qualidade. Duração: 3 anos (6 semestres).</p>";
        } else if (curso === "projetos") {
            conteudo = "<h2>Projetos Mecânicos</h2><p>Curso focado no desenvolvimento de máquinas, ferramentas e desenho técnico. Duração: 3 anos (6 semestres).</p>";
        } else if (curso === "biomedicos") {
            conteudo = "<h2>Sistemas Biomédicos</h2><p>Curso focado na manutenção e gestão de equipamentos médico-hospitalares. Duração: 3 anos (6 semestres).</p>";
        }

        janela.document.write("<html><head><title>Informações do Curso</title></head><body style='font-family: Arial; padding: 20px;'>" + conteudo + "</body></html>");
    }

    document.getElementById("curso").value = "";
}

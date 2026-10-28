// Detecta quando uma seção aparece na tela
const observador = new IntersectionObserver((secoes) => {
    secoes.forEach((item) => {
        if (item.isIntersecting) {
            const secao = item.target;

            // Encontra os números dos cards dessa seção
            const numeros = secao.querySelectorAll("div p");

            numeros.forEach((numero) => {
                const valorFinal = Number(numero.textContent.trim());

                // Ignora textos como "EM BREVE"
                if (!Number.isFinite(valorFinal) || valorFinal <= 0) {
                    return;
                }

                let atual = 0;
                const duracao = 1500;
                const intervalo = 30;
                const passos = duracao / intervalo;
                const aumento = valorFinal / passos;

                // Começa a animação do zero
                numero.textContent = "0";

                const animacao = setInterval(() => {
                    atual += aumento;

                    if (atual >= valorFinal) {
                        atual = valorFinal;
                        clearInterval(animacao);
                    }

                    numero.textContent = Math.floor(atual);
                }, intervalo);
            });

            // Evita repetir a animação ao voltar para a seção
            observador.unobserve(secao);
        }
    });
}, {
    threshold: 0.25
});

// Observa todas as seções do site
document.querySelectorAll("section").forEach((secao) => {
    observador.observe(secao);
});


const momentosMessi = {
    "2004": {
        titulo: "Estreia profissional",
        descricao: "Messi estreou oficialmente pela equipe principal do Barcelona em outubro de 2004."
    },
    "2009": {
        titulo: "Primeira Champions League como protagonista",
        descricao: "Messi marcou na final da Champions League contra o Manchester United e conquistou o título com o Barcelona.",
         imagem: "imagens/messi-2009.jpg"
    },
    "2012": {
        titulo: "Ano histórico de gols",
        descricao: "Messi marcou 91 gols em jogos oficiais pelo Barcelona e pela seleção argentina durante o ano civil.",
        imagem: "imagens/messi-2012.jpg"
    },
    "2021": {
        titulo: "Primeira Copa América",
        descricao: "Messi conquistou sua primeira Copa América com a seleção principal da Argentina.",
        imagem: "imagens/messi-2021.jpg"
    },
    "2022": {
        titulo: "Campeão do mundo",
        descricao: "Messi liderou a Argentina na conquista da Copa do Mundo do Catar e foi eleito o melhor jogador do torneio.",
        imagem: "imagens/messi-2022.jpg"
    },
    "2023": {
        titulo: "Nova etapa em Miami",
        descricao: "Messi estreou pelo Inter Miami e conquistou a Leagues Cup, o primeiro título da história do clube.",
        imagem: "imagens/messi-2023.jpg"
    }
};

function mostrarMomento(ano) {
    const momento = momentosMessi[ano];

    if (!momento) return;

    document.getElementById("timeline-ano").textContent = ano;
    document.getElementById("timeline-titulo").textContent = momento.titulo;
    document.getElementById("timeline-descricao").textContent = momento.descricao;
    document.getElementById("timeline-imagem").src = momento.imagem || "imagens/messi-2004.jpg";

    document.querySelectorAll(".timeline-anos button").forEach(botao => {
        botao.classList.toggle(
            "ano-selecionado",
            botao.textContent.trim() === ano
        );
    });
}


const perguntasMessi = [
    {
        pergunta: "Em que ano Messi estreou oficialmente pelo time principal do Barcelona?",
        alternativas: ["2003", "2004", "2005", "2006"],
        correta: 1,
        explicacao: "Messi estreou oficialmente em outubro de 2004, contra o Espanyol."
    },
    {
        pergunta: "Contra qual seleção Messi marcou seu primeiro gol em Copas do Mundo?",
        alternativas: ["México", "Sérvia e Montenegro", "Nigéria", "Grécia"],
        correta: 1,
        explicacao: "Foi contra a Sérvia e Montenegro, na Copa de 2006."
    },
    {
        pergunta: "Quantos gols Messi marcou na temporada 2011–12 pelo Barcelona em todas as competições?",
        alternativas: ["60", "65", "73", "78"],
        correta: 2,
        explicacao: "Messi marcou 73 gols oficiais pelo Barcelona naquela temporada."
    },
    {
        pergunta: "Qual clube Messi enfrentou na final da Champions League de 2009?",
        alternativas: ["Chelsea", "Liverpool", "Manchester United", "Arsenal"],
        correta: 2,
        explicacao: "O Barcelona venceu o Manchester United por 2 a 0."
    },
    {
        pergunta: "Em qual ano Messi ganhou sua primeira Bola de Ouro?",
        alternativas: ["2007", "2008", "2009", "2010"],
        correta: 2,
        explicacao: "Messi conquistou sua primeira Bola de Ouro em 2009."
    },
    {
        pergunta: "Contra qual seleção Messi marcou seu primeiro gol pela seleção principal da Argentina?",
        alternativas: ["Brasil", "Croácia", "Hungria", "Peru"],
        correta: 2,
        explicacao: "Foi contra a Hungria, em um amistoso em 2005."
    },
    {
        pergunta: "Qual era o número da camisa de Messi em sua estreia oficial pelo Barcelona?",
        alternativas: ["10", "19", "30", "18"],
        correta: 2,
        explicacao: "Messi estreou usando a camisa 30."
    },
    {
        pergunta: "Qual seleção a Argentina derrotou na final da Copa América de 2021?",
        alternativas: ["Chile", "Brasil", "Colômbia", "Uruguai"],
        correta: 1,
        explicacao: "A Argentina venceu o Brasil por 1 a 0 no Maracanã."
    },
    {
        pergunta: "Quantos gols Messi marcou na Copa do Mundo de 2022?",
        alternativas: ["5", "6", "7", "8"],
        correta: 3,
        explicacao: "Messi marcou 7 gols no Mundial do Catar."
    },
    {
        pergunta: "Em qual temporada Messi se tornou o maior artilheiro da história do Barcelona em jogos oficiais?",
        alternativas: ["2009–10", "2010–11", "2011–12", "2012–13"],
        correta: 2,
        explicacao: "Na temporada 2011–12, Messi consolidou o recorde de gols pelo Barcelona."
    },
    {
        pergunta: "Qual foi o primeiro clube profissional de Messi?",
        alternativas: ["Newell's Old Boys", "Barcelona", "River Plate", "Inter Miami"],
        correta: 1,
        explicacao: "O Barcelona foi o clube em que Messi estreou profissionalmente. Antes, jogou nas categorias de base do Newell's Old Boys."
    },
    {
        pergunta: "Contra qual equipe Messi marcou cinco gols em uma única partida da Champions League em 2012?",
        alternativas: ["Bayer Leverkusen", "Arsenal", "Milan", "Chelsea"],
        correta: 0,
        explicacao: "Messi marcou cinco gols contra o Bayer Leverkusen, em março de 2012."
    },
    {
        pergunta: "Em que ano a Argentina venceu a Finalíssima contra a Itália, com Messi em campo?",
        alternativas: ["2019", "2020", "2021", "2022"],
        correta: 3,
        explicacao: "A Argentina venceu a Itália por 3 a 0 em junho de 2022."
    },
    {
        pergunta: "Qual foi o placar da final da Copa do Mundo de 2022 entre Argentina e França após a prorrogação?",
        alternativas: ["2 a 1", "3 a 2", "3 a 3", "4 a 3"],
        correta: 2,
        explicacao: "A partida terminou 3 a 3; a Argentina venceu nos pênaltis."
    },
    {
        pergunta: "Qual equipe Messi enfrentou na final da Copa América de 2016?",
        alternativas: ["Brasil", "Chile", "Uruguai", "México"],
        correta: 1,
        explicacao: "A Argentina perdeu para o Chile nos pênaltis, assim como na final de 2015."
    },
    {
        pergunta: "Qual foi o primeiro clube europeu que Messi integrou nas categorias de base?",
        alternativas: ["Real Madrid", "Barcelona", "Valencia", "Atlético de Madrid"],
        correta: 1,
        explicacao: "Messi chegou à formação do Barcelona em 2000."
    },
    {
        pergunta: "Em qual estádio Messi marcou seu gol de cabeça na final da Champions League de 2009?",
        alternativas: ["Camp Nou", "Old Trafford", "Wembley", "Stamford Bridge"],
        correta: 1,
        explicacao: "O gol de cabeça foi marcado em Old Trafford, contra o Manchester United."
    },
    {
        pergunta: "Qual seleção Messi enfrentou na estreia da Argentina na Copa do Mundo de 2022?",
        alternativas: ["México", "Polônia", "Arábia Saudita", "Austrália"],
        correta: 2,
        explicacao: "A Argentina perdeu por 2 a 1 para a Arábia Saudita na estreia."
    },
    {
        pergunta: "Em qual ano Messi conquistou sua primeira Copa América?",
        alternativas: ["2015", "2016", "2019", "2021"],
        correta: 3,
        explicacao: "Messi conquistou sua primeira Copa América em 2021."
    },
    {
        pergunta: "Qual foi o adversário do Inter Miami na final da Leagues Cup de 2023?",
        alternativas: ["Nashville SC", "LAFC", "Orlando City", "Atlanta United"],
        correta: 0,
        explicacao: "A final contra o Nashville SC terminou empatada, e o Inter Miami venceu nos pênaltis."
    }
];

let perguntaAtual = 0;
let pontosQuiz = 0;
let quizRespondido = false;

const elementoPergunta = document.getElementById("quiz-pergunta");
const elementoAlternativas = document.getElementById("quiz-alternativas");
const elementoProgresso = document.getElementById("quiz-progresso");
const elementoPontuacao = document.getElementById("quiz-pontuacao");
const elementoBarra = document.getElementById("quiz-barra-progresso");
const elementoFeedback = document.getElementById("quiz-feedback");
const botaoProximo = document.getElementById("quiz-proximo");
const containerQuiz = document.getElementById("quiz-container");
const resultadoQuiz = document.getElementById("quiz-resultado");

function mostrarPergunta() {
    quizRespondido = false;

    const pergunta = perguntasMessi[perguntaAtual];

    elementoPergunta.textContent = pergunta.pergunta;
    elementoAlternativas.innerHTML = "";
    elementoFeedback.textContent = "";

    elementoProgresso.textContent =
        `Pergunta ${perguntaAtual + 1} de ${perguntasMessi.length}`;

    elementoPontuacao.textContent = `Pontos: ${pontosQuiz}`;

    elementoBarra.style.width =
        `${(perguntaAtual / perguntasMessi.length) * 100}%`;

    botaoProximo.hidden = true;

    pergunta.alternativas.forEach((alternativa, indice) => {
        const botao = document.createElement("button");

        botao.type = "button";
        botao.className = "quiz-alternativa";
        botao.textContent = `${String.fromCharCode(65 + indice)}. ${alternativa}`;

        botao.addEventListener("click", () => verificarResposta(indice));

        elementoAlternativas.appendChild(botao);
    });
}

function verificarResposta(indiceEscolhido) {
    if (quizRespondido) return;

    quizRespondido = true;

    const pergunta = perguntasMessi[perguntaAtual];
    const botoes = elementoAlternativas.querySelectorAll("button");
    const acertou = indiceEscolhido === pergunta.correta;

    botoes.forEach((botao, indice) => {
        botao.disabled = true;

        if (indice === pergunta.correta) {
            botao.classList.add("correta");
        } else if (indice === indiceEscolhido) {
            botao.classList.add("errada");
        }
    });

    if (acertou) {
        pontosQuiz++;
        elementoFeedback.textContent =
            `✅ Resposta correta! ${pergunta.explicacao}`;
    } else {
        elementoFeedback.textContent =
            `❌ Resposta errada. ${pergunta.explicacao}`;
    }

    elementoPontuacao.textContent = `Pontos: ${pontosQuiz}`;
    elementoBarra.style.width =
        `${((perguntaAtual + 1) / perguntasMessi.length) * 100}%`;

    botaoProximo.hidden = false;

    if (perguntaAtual === perguntasMessi.length - 1) {
        botaoProximo.textContent = "Ver resultado";
    } else {
        botaoProximo.textContent = "Próxima pergunta";
    }
}

function mostrarResultado() {
    containerQuiz.hidden = true;
    resultadoQuiz.hidden = false;

    document.getElementById("quiz-total-acertos").textContent =
        `Você acertou ${pontosQuiz} de ${perguntasMessi.length} perguntas!`;

    let mensagem;

    if (pontosQuiz <= 9) {
        mensagem = "Conhecedor iniciante! Continue estudando a história do Messi.";
    } else if (pontosQuiz <= 15) {
        mensagem = "Grande fã do Messi! Você conhece bastante da carreira dele.";
    } else if (pontosQuiz <= 19) {
        mensagem = "Especialista em Messi! Quase gabaritou!";
    } else {
        mensagem = "Lenda dos fãs! Você acertou todas as perguntas!";
    }

    document.getElementById("quiz-mensagem").textContent = mensagem;
}

botaoProximo.addEventListener("click", () => {
    if (perguntaAtual < perguntasMessi.length - 1) {
        perguntaAtual++;
        mostrarPergunta();
    } else {
        mostrarResultado();
    }
});

document.getElementById("quiz-reiniciar").addEventListener("click", () => {
    perguntaAtual = 0;
    pontosQuiz = 0;

    resultadoQuiz.hidden = true;
    containerQuiz.hidden = false;

    botaoProximo.textContent = "Próxima pergunta";

    mostrarPergunta();
});

if (
    elementoPergunta &&
    elementoAlternativas &&
    elementoProgresso &&
    elementoPontuacao &&
    elementoBarra &&
    elementoFeedback &&
    botaoProximo &&
    containerQuiz &&
    resultadoQuiz
) {
    mostrarPergunta();
}


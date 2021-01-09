let pergunta = document.getElementById("pergunta")
let titulo = document.getElementById("titulo")
let timer = document.getElementById("letreiro")
let A = document.getElementById('A-texto')
let B = document.getElementById('B-texto')
let C = document.getElementById('C-texto')
let D = document.getElementById('D-texto')
let E = document.getElementById('E-texto')
let Aradio = document.getElementById('primeira-alternativa')
let Bradio = document.getElementById('segunda-alternativa')
let Cradio = document.getElementById('terceira-alternativa')
let Dradio = document.getElementById('quarta-alternativa')
let Eradio = document.getElementById('quinta-alternativa')
let button = document.getElementById('button')
let perguntaAtual;
let pos;
let acertos = 0
let erros = 0
const questoes = [
    /
    
    "As células eucariontes podem ser classificadas em dois grupos principais: células animais e células vegetais. Essas últimas apresentam algumas estruturas exclusivas, tais como os cloroplastos, que são responsáveis pelo processo de fotossíntese. Analise as alternativas a seguir e marque a única estrutura que não pode ser utilizada para diferenciar uma célula vegetal da animal.",
    
    
    "Vacúolos são estruturas existentes em diferentes tipos celulares, entretanto, o vacúolo de suco celular é uma estrutura típica da célula vegetal. Observe as funções abaixo e marque aquela que não pode ser atribuída ao vacúolo.",
    /
    
    "Encontrada principalmente em sementes oleaginosas, essa organela converte lipídios em açúcares. Marque a alternativa que indica corretamente o nome da organela a que a afirmação se refere.",

    
    "(UFSCar) Em uma célula vegetal, o material genético concentra-se no interior do núcleo, o qual é delimitado por uma membrana. Além dessa região, material genético também é encontrado no interior do",

    
    "(UFF) O acúmulo de metais pesados no solo, como o cádmio, o zinco e o chumbo, resultante de atividades industriais, tem grande impacto na biota desses locais. Apesar de serem requeridos em pequenas quantidades pelos organismos vivos, o excesso desses metais é tóxico para a maioria das espécies e compromete sua sobrevivência. Algumas espécies de plantas são capazes de crescer em solos que contêm grandes quantidades desses metais. Nas células dessas plantas podem ser encontrados diferentes mecanismos para a resistência a esses metais, como a imobilização por polissacarídeos, a exemplo da pectina, e a formação de complexos com ácidos orgânicos no interior da organela que ocupa o maior volume da célula desenvolvida.Os locais na célula vegetal onde ocorrem os mecanismos citados são, respectiva
    
    "A pegada ecológica gigante que estamos a deixar no planeta está a transformá-lo de tal forma que os especialistas consideram que já entramos numa nova época geológica, o Antropoceno. E muitos defendem que, se não travarmos a crise ambiental, mais rapidamente transformaremos a Terra em Vênus do que iremos a Marte. A expressão “Antropoceno” é atribuída ao químico e prêmio Nobel Paul Crutzen, que a propôs durante uma conferência em 2000, ao mesmo tempo que anunciou o fim do Holoceno — a época geológica em que os seres humanos se encontram há cerca de 12 mil anos, segundo a União Internacional das Ciências Geológicas (UICG), a entidade que define as unidades de tempo geológ
    
    "Dizem que Humboldt, naturalista do século XIX, maravilhado pela geografia, flora e fauna da região sul-americana, via seus habitantes como se fossem mendigos sentados sobre um saco de ouro, referindo-se a suas incomensuráveis riquezas naturais não exploradas. De alguma maneira, o cientista ratificou nosso papel de exportadores de natureza no que seria o mundo depois da colonização ibérica: enxergou-nos como territórios condenados a aproveitar os recursos naturais exist
    
    "O Instituto Brasileiro do Meio Ambiente e dos Recursos Naturais Renováveis (Ibama) está investigando o extermínio de abelhas por intoxicação por agrotóxicos em colmeias de São Paulo e Minas Gerais. Os estudos com inseticidas do tipo neonicotinoides devem estar concluídos no primeiro semestre de 2015. Trata-se de um problema de escala mundial, presente, inclusive, em países do chamado primeiro mundo, e que traz, como consequência, grave ameaça aos seres vivos do planeta, inclusive ao
    
    " Em sentido geral e fundamental, Direito é a técnica da coexistência humana, isto é, a técnica voltada a tornar possível a coexistência dos homens. Como técnica, o Direito se concretiza em um conjunto de regras (que, nesse caso, são leis ou normas); e tais regras têm por objeto o comportamento intersubjetivo, isto é, o comportamento recíproco dos homens entre si.                                                                                                               O sentido geral e fundamental do Direito, conforme foi destacado, refere
    
    "A cidade medieval é, antes de mais nada, uma sociedade da abundância, concentrada num pequeno espaço em meio a vastas regiões pouco povoadas. Em seguida, é um lugar de produção e de trocas, onde se articulam o artesanato e o comércio, sustentados por uma economia monetária. É também o centro de um sistema de valores particular, do qual emerge a prática laboriosa e criativa do trabalho, o gosto pelo negócio e pel dinheiro, a inclinação para o luxo, o senso da beleza. É ainda um sistema de organização de um espaço fechado com muralhas, onde se penetra por portas e se caminha por ruas e praças e que é guarnecido por torres.                .                                                                                                                No texto, o espaço descrito se caracteriza pela associação entre a ampliação das atividades urbanas e a",
    
    
    "A Revolta da Vacina (1904) mostrou claramente o aspecto defensivo, desorganizado, fragmentado da ação popular. Não se negava o Estado, não se reivindicava participação nas decisões políticas; defendiam-se valores e direitos considerados acima da intervenção do Estado. A mobilização analisada representou um alerta, na medida em que a ação popular questionava",

    
    "O Instituto Histórico e Geográfico Brasileiro (IHGB) reuniu historiadores, romancistas, poetas, administradores públicos e políticos em torno da investigação a respeito do caráter brasileiro. Em certo sentido, a estrutura dessa instituição, pelo menos como projeto, reproduzia o modelo centralizador imperial. Assim, enquanto na Corte localizava-se a sede, nas províncias deveria haver os respectivos institutos regionais. Estes, por sua vez, enviariam documentos e relatos regionais para a capital. De acordo com o texto, durante o reinado de D. Pedro II,  o referido instituto objetivava",
    
    
    "Eis o ensinamento de minha doutrina: “Viva de forma a ter de desejar reviver — é o dever —, pois, em todo caso, você reviverá! Aquele que ama antes de tudo se submeter, obedecer e seguir, que obedeça! Mas que saiba para o que dirige sua preferência, e não recue diante de nenhum meio! É a eternidade que está em jogo!”. NIETZSCHE apud FERRY, L. Aprender a viver: filosofia para os novos tempos. Rio de Janeiro: Objetiva, 2010 (adaptado). O trecho contém uma formulação da doutrina nietzscheana do eterno retorno, que apresenta critérios radicais de avaliação da",
    
    "A depressão que afetou a economia mundial entre 1929 e 1934 se anunciou, ainda em 1928, por uma queda generalizada nos preços agrícolas internacionais. Mas o fator mais marcante foi a crise financeira detonada pela quebra da Bolsa de Nova Iorque.Perante o cenário econômico descrito, o Estado brasileiro assume, a partir d 1930, uma política de incentivo à:",
    
    "A população africana residente nesta província, bem como a de todo o Império, compõe-se de indivíduos de diferentes lugares da África que variam em costumes e religiões; a que aqui segue o maometismo, à qual pertencemos, é uma população pequena, porém, distinta entre si, e notando a necessidade de sustentarmos nosso culto e fundados ainda no artigo 5º da Constituição do Império, requeremos ao sr. chefe de polícia licença para exercermos o culto.O pedido de um grupo de africanos de Recife ao chefe de polícia local tinha como objetivo, naquele contexto,"
    
    "Estima-se que no Brasil mais de 20% da população tenha algum tipo de dificuldade de locomoção, seja por deficiência física, motora, sensorial ou mesmo por uma condição específica transitória. Para que essa parcela da população exerça plenamente o seu direito constitucional de ir e vir, os sistemas de transporte têm de apresentar características adequadas de acessibilidade, dentro dos conceitos do desenho universal. No meio urbano, o atendimento da proposta de inclusão social apresentada no texto demanda um conjunto de intervenções técnicas que promovam o(a)",
    
    "O consumo da habitação, em especial aquela dotada de atributos especiais no espaço urbano, contribui para o entendimento do fenômeno, pois certas áreas tornam-se alvos de operações comerciais de prestígio com a produção e/ou a renovação de construções, diferente de outras porções da cidade, dotadas de menor infraestrutura. O conceito que define o processo descrito denomina-se"
]
const respostas = {
    respostas1 : [
        "A) Cromoplastos.",
        "B) Leucoplastos.",
        "C) Vacúolo de suco celular.",
        "D) Mitocôndria.",
        "E) Parede celular."
    ],
    respostas2 : [
        "A) Atua no armazenamento de substâncias.",
        "B) Participa do processo de respiração celular.",
        "C) Realiza a digestão de componentes celulares.",
        "D) Promove o controle osmótico.",
        "E) Ajuda na manutenção do pH."
    ],
    respostas3 : [
        "A) Vacúolo",
        "B) Peroxissomo.",
        "C) Plastídio.",
        "D) Glioxissomo.",
        "E) Lisossomo."
    ],
    respostas4 : [
        "A) Retículo endoplasmático e complexo Golgiense.",
        "B) Complexo Golgiense e cloroplasto.",
        "C) Lisossomo e retículo endoplasmático.",
        "D) Lisossomo e mitocôndria.",
        "E) Cloroplasto e mitocôndria."
    ],
    respostas5 : [
        "A) Membrana plasmática e cloroplasto",
        "B) Parede celular e vacúolo",
        "C) Microtúbulo e lisossomo",
        "D) Parede celular e ribossomo",
        "E) Membrana plasmática e vacúolo"
    ],
    respostas6 : [
        "A) eruptivos.",
        "B) exógenos",
        "C) tectônicos.",
        "D) magmáticos.",
        "E) metamórficos."
    ],
    respostas7 : [
        "A) Relativismo cognitivo.",
        "B) Materialismo dialético.",
        "C) Racionalismo cartesiano.",
        "D) Pluralismo epistemológico.",
        "E) Existencialismo fenomenológico."
    ],
    respostas8 : [
        "A) Preservação da área de mata ciliar.",
        "B) Adoção da prática de adubação química.",
        "C) Utilização da técnica de controle biológico.",
        "D) Ampliação do modelo de monocultura tropical.",
        "E) Intensificação da drenagem do solo de várzea."
    ],
    respostas9 : [
        "A) aplicação de códigos legais.",
        "B) regulação do convívio social.",
        "C) legitimação de decisões políticas.",
        "D) mediação de conflitos econômicos.",
        "E) representação da autoridade constituída."
    ],
    respostas10 : [
        "A) emancipação do poder hegemônico da realeza.",
        "B) aceitação das práticas usurárias dos religiosos.",
        "C) independência da produção alimentar dos campos.",
        "D) superação do ordenamento corporativo dos ofícios.",
        "E) permanência dos elementos arquitetônicos de proteção."
    ],
    respostas11 : [
        "A) A alta de preços",
        "B) a política clientelista",
        "C) as reformas urbanas.",
        "D) o arbítrio governamental.",
        "E) as práticas eleitorais."
    ],
    respostas12 : [
        "A) construir uma narrativa de nação",
        "B) debater as desigualdades sociais.",
        "C) combater as injustiças coloniais.",
        "D) defender a retórica do abolicionismo.",
        "E) evidenciar uma diversidade étnica"
    ],
    respostas13 : [
        "A) qualidade de nossa existência pessoal e coletiva.",
        "B) conveniência do cuidado da saúde física e espiritual.",
        "C) legitimidade da doutrina pagã da transmigração da alma.",
        "D) veracidade do postulado cosmológico da perenidade do mundo",
        "E) validade de padrões habituais de ação humana ao longo da história."
    ],
    respostas14 : [
        "A) industrialização interna para substituir as importações",
        "B) nacionalização de empresas estrangeiras atingidas pela crise",
        "C) venda de terras a preços acessíveis para os pequenos produtores.",
        "D) entrada de imigrantes para trabalhar nas indústrias de base recém-criadas.",
        "E) abertura de linhas de financiamento especial para empresas do setor terciário"
    ],
    respostas15 : [
        "A) criticar a doutrina oficial.",
        "B) professar uma fé alternativa.",
        "C) assegurar a cidadania política.",
        "D) legalizar os terreiros de candomblé.",
        "E) eliminar algumas tradições culturais."
    ],
    respostas16 : [
        "A) ocupação de áreas periféricas.",
        "B) democratização do espaço público.",
        "C) alargamento da malha de rodovias.",
        "D) monitoramento de fluxos populacionais.",
        "E) expansão de sistemas de comunicação."
    ],
    respostas17 : [
        "A) escala cartográfica.",
        "B) conurbação metropolitana",
        "C) território nacional.",
        "D) especulação imobiliária.",
        "E) paisagem natural."
    ]
}
Aradio.style.display = 'none';
Bradio.style.display = 'none';
Cradio.style.display = 'none';
Dradio.style.display = 'none';
Eradio.style.display = 'none';
timer.style.display = 'none';
function randomizar() {
    perguntaAtual = questoes[Math.floor(Math.random() * questoes.length)];
}
function comecar() {
    pergunta.style.textAlign = "start"
    button.innerHTML = "Verificar"
    button.setAttribute("onclick", 'correcao()');
    titulo.style.display = 'none'
    Aradio.style.display = '';
    Bradio.style.display = '';
    Cradio.style.display = '';
    Dradio.style.display = '';
    Eradio.style.display = '';
    timer.style.display = '';
    randomizar()
    getAnswers()
    setTimeout(function () {
        pos = questoes.indexOf(perguntaAtual);
        questoes.splice(pos, 1);
        erros++
        refreshScreen()
    }, 180000);
}
function refreshScreen() {
    if (questoes.length != 1) {
        randomizar()
        getAnswers()
        timer.style.animation = "none";
        setTimeout(function () {
            timer.style.animation = "";
        }, 100);
        Aradio.checked = 'false';
        Bradio.checked = 'false';
        Cradio.checked = 'false';
        Dradio.checked = 'false';
        Eradio.checked = 'false';
        setTimeout(function () {
            erros++
            refreshScreen()
        }, 180000);
    } else {
        questoes.splice(0, 1)
        button.setAttribute("onclick", 'telaFinal()');
        button.innerHTML = "Resultados"
    }
}
function telaFinal() {
    Aradio.style.display = 'none';
    Bradio.style.display = 'none';
    Cradio.style.display = 'none';
    Dradio.style.display = 'none';
    Eradio.style.display = 'none';
    timer.style.display = 'none'
    A.style.display = 'none'
    B.style.display = 'none'
    C.style.display = 'none'
    D.style.display = 'none'
    E.style.display = 'none'
    button.style.display = ' none'
    titulo.style.display = ''
    titulo.innerHTML = `Sua pontuação foi de ${acertos} acertos e ${erros} erros`
    titulo.style.textAlign = "center";
    titulo.style.marginTop = "30px"
    pergunta.style.textAlign ="center"
    pergunta.innerHTML = "Voce será redirecionado para a página inicial em instantes."
    setTimeout(function () {
        titulo.innerHTML = "Obrigado por jogar o Quiz "
        pergunta.innerHTML = "Para recomeçar, atualize a página!"
      

    }, 30000);
}
function getAnswers() {
    switch (perguntaAtual) {
        case perguntaAtual = questoes[0]:
            pergunta.innerHTML = perguntaAtual
            A.innerHTML = respostas.respostas1[0]
            B.innerHTML = respostas.respostas1[1]
            C.innerHTML = respostas.respostas1[2]
            D.innerHTML = respostas.respostas1[3]
            E.innerHTML = respostas.respostas1[4]
            break;
        case perguntaAtual = questoes[1]:
            pergunta.innerHTML = perguntaAtual
            A.innerHTML = respostas.respostas2[0]
            B.innerHTML = respostas.respostas2[1]
            C.innerHTML = respostas.respostas2[2]
            D.innerHTML = respostas.respostas2[3]
            E.innerHTML = respostas.respostas2[4]
            break;
        case perguntaAtual = questoes[2]:
            pergunta.innerHTML = perguntaAtual
            A.innerHTML = respostas.respostas3[0]
            B.innerHTML = respostas.respostas3[1]
            C.innerHTML = respostas.respostas3[2]
            D.innerHTML = respostas.respostas3[3]
            E.innerHTML = respostas.respostas3[4]
            break;
        case perguntaAtual = questoes[3]:
            pergunta.innerHTML = perguntaAtual
            A.innerHTML = respostas.respostas4[0]
            B.innerHTML = respostas.respostas4[1]
            C.innerHTML = respostas.respostas4[2]
            D.innerHTML = respostas.respostas4[3]
            E.innerHTML = respostas.respostas4[4]
            break;
        case perguntaAtual = questoes[4]:
            pergunta.innerHTML = perguntaAtual
            A.innerHTML = respostas.respostas5[0]
            B.innerHTML = respostas.respostas5[1]
            C.innerHTML = respostas.respostas5[2]
            D.innerHTML = respostas.respostas5[3]
            E.innerHTML = respostas.respostas5[4]
            break;
        case perguntaAtual = questoes[5]:
            pergunta.innerHTML = perguntaAtual
            A.innerHTML = respostas.respostas6[0]
            B.innerHTML = respostas.respostas6[1]
            C.innerHTML = respostas.respostas6[2]
            D.innerHTML = respostas.respostas6[3]
            E.innerHTML = respostas.respostas6[4]
            break;
        case perguntaAtual = questoes[6]:
            pergunta.innerHTML = perguntaAtual
            A.innerHTML = respostas.respostas7[0]
            B.innerHTML = respostas.respostas7[1]
            C.innerHTML = respostas.respostas7[2]
            D.innerHTML = respostas.respostas7[3]
            E.innerHTML = respostas.respostas7[4]
            break;
        case perguntaAtual = questoes[7]:
            pergunta.innerHTML = perguntaAtual
            A.innerHTML = respostas.respostas8[0]
            B.innerHTML = respostas.respostas8[1]
            C.innerHTML = respostas.respostas8[2]
            D.innerHTML = respostas.respostas8[3]
            E.innerHTML = respostas.respostas8[4]
            break;
        case perguntaAtual = questoes[8]:
            pergunta.innerHTML = perguntaAtual
            A.innerHTML = respostas.respostas9[0]
            B.innerHTML = respostas.respostas9[1]
            C.innerHTML = respostas.respostas9[2]
            D.innerHTML = respostas.respostas9[3]
            E.innerHTML = respostas.respostas9[4]
            break;
        case perguntaAtual = questoes[9]:
            pergunta.innerHTML = perguntaAtual
            A.innerHTML = respostas.respostas10[0]
            B.innerHTML = respostas.respostas10[1]
            C.innerHTML = respostas.respostas10[2]
            D.innerHTML = respostas.respostas10[3]
            E.innerHTML = respostas.respostas10[4]
            break;
        case perguntaAtual = questoes[10]:
            pergunta.innerHTML = perguntaAtual
            A.innerHTML = respostas.respostas11[0]
            B.innerHTML = respostas.respostas11[1]
            C.innerHTML = respostas.respostas11[2]
            D.innerHTML = respostas.respostas11[3]
            E.innerHTML = respostas.respostas11[4]
            break;
            case perguntaAtual = questoes[11]:
            pergunta.innerHTML = perguntaAtual
            A.innerHTML = respostas.respostas12[0]
            B.innerHTML = respostas.respostas12[1]
            C.innerHTML = respostas.respostas12[2]
            D.innerHTML = respostas.respostas12[3]
            E.innerHTML = respostas.respostas12[4]
            break;
            case perguntaAtual = questoes[12]:
            pergunta.innerHTML = perguntaAtual
            A.innerHTML = respostas.respostas12[0]
            B.innerHTML = respostas.respostas12[1]
            C.innerHTML = respostas.respostas12[2]
            D.innerHTML = respostas.respostas12[3]
            E.innerHTML = respostas.respostas12[4]
            break;
            case perguntaAtual = questoes[13]:
            pergunta.innerHTML = perguntaAtual
            A.innerHTML = respostas.respostas13[0]
            B.innerHTML = respostas.respostas13[1]
            C.innerHTML = respostas.respostas13[2]
            D.innerHTML = respostas.respostas13[3]
            E.innerHTML = respostas.respostas13[4]
            break;
            case perguntaAtual = questoes[14]:
            pergunta.innerHTML = perguntaAtual
            A.innerHTML = respostas.respostas14[0]
            B.innerHTML = respostas.respostas14[1]
            C.innerHTML = respostas.respostas14[2]
            D.innerHTML = respostas.respostas14[3]
            E.innerHTML = respostas.respostas14[4]
            break;
            case perguntaAtual = questoes[15]:
            pergunta.innerHTML = perguntaAtual
            A.innerHTML = respostas.respostas15[0]
            B.innerHTML = respostas.respostas15[1]
            C.innerHTML = respostas.respostas15[2]
            D.innerHTML = respostas.respostas15[3]
            E.innerHTML = respostas.respostas15[4]
            break;
            case perguntaAtual = questoes[16]:
            pergunta.innerHTML = perguntaAtual
            A.innerHTML = respostas.respostas16[0]
            B.innerHTML = respostas.respostas16[1]
            C.innerHTML = respostas.respostas16[2]
            D.innerHTML = respostas.respostas16[3]
            E.innerHTML = respostas.respostas16[4]
            break;
        default:
            telaFinal()
            break;
    }
}
function correcao() {
    switch (perguntaAtual) {
        case perguntaAtual = questoes[0]:
            if (Dradio.checked)
             {
                pos = questoes.indexOf(perguntaAtual);
                questoes.splice(pos, 1);
                refreshScreen()
                acertos++;
            } else {
                    pos = questoes.indexOf(perguntaAtual);
            questoes.splice(pos, 1);
                refreshScreen()
                erros++
            }
            break;
        case perguntaAtual = questoes[1]:
            if (Bradio.checked) {
                    pos = questoes.indexOf(perguntaAtual);
            questoes.splice(pos, 1);
                refreshScreen()
                acertos++;
            } else {
                    pos = questoes.indexOf(perguntaAtual);
            questoes.splice(pos, 1);
                refreshScreen()
                erros++
            }
            break;
        case perguntaAtual = questoes[2]:
            if (Dradio.checked) {
                    pos = questoes.indexOf(perguntaAtual);
            questoes.splice(pos, 1);
                refreshScreen()
                acertos++;
            } else {
                    pos = questoes.indexOf(perguntaAtual);
            questoes.splice(pos, 1);
                refreshScreen()
                erros++
            }
            break;
        case perguntaAtual = questoes[3]:
            if (Eradio.checked) {
                    pos = questoes.indexOf(perguntaAtual);
            questoes.splice(pos, 1);
                refreshScreen()
                acertos++;
            } else {
                    pos = questoes.indexOf(perguntaAtual);
            questoes.splice(pos, 1);
                refreshScreen()
                erros++
            }
            break;
        case perguntaAtual = questoes[4]:
            if (Bradio.checked) {
                    pos = questoes.indexOf(perguntaAtual);
            questoes.splice(pos, 1);
                refreshScreen()
                acertos++;
            } else {
                    pos = questoes.indexOf(perguntaAtual);
            questoes.splice(pos, 1);
                refreshScreen()
                erros++
            }
            break;
        case perguntaAtual = questoes[5]:
            if (Bradio.checked) {
                    pos = questoes.indexOf(perguntaAtual);
            questoes.splice(pos, 1);
                refreshScreen()
                acertos++;
            } else {
                    pos = questoes.indexOf(perguntaAtual);
            questoes.splice(pos, 1);
                refreshScreen()
                erros++
            }
            break;
        case perguntaAtual = questoes[6]:
            if (Cradio.checked) {
                    pos = questoes.indexOf(perguntaAtual);
            questoes.splice(pos, 1);
                refreshScreen()
                acertos++;
            } else {
                    pos = questoes.indexOf(perguntaAtual);
            questoes.splice(pos, 1);
                refreshScreen()
                erros++
            }
            break;
        case perguntaAtual = questoes[7]:
            if (Cradio.checked) {
                    pos = questoes.indexOf(perguntaAtual);
            questoes.splice(pos, 1);
                refreshScreen()
                acertos++;
            } else {
                    pos = questoes.indexOf(perguntaAtual);
            questoes.splice(pos, 1);
                refreshScreen()
                erros++
            }
            break;
        case perguntaAtual = questoes[8]:
            if (Bradio.checked) {
                    pos = questoes.indexOf(perguntaAtual);
            questoes.splice(pos, 1);
                refreshScreen()
                acertos++;
            } else {
                    pos = questoes.indexOf(perguntaAtual);
            questoes.splice(pos, 1);
                refreshScreen()
                erros++
            }
            break;
        case perguntaAtual = questoes[9]:
            if (Eradio.checked) {
                    pos = questoes.indexOf(perguntaAtual);
            questoes.splice(pos, 1);
                refreshScreen()
                acertos++;
            } else {
                pos = questoes.indexOf(perguntaAtual);
                questoes.splice(pos, 1);
                refreshScreen()
                erros++
            }
            break;
        case perguntaAtual = questoes[10]:
            if (Dradio.checked) {
                    pos = questoes.indexOf(perguntaAtual);
                refreshScreen()
                acertos++;
            } else {
                pos = questoes.splice(pos, 1);
                refreshScreen()
                erros++
            }
            break;
            case perguntaAtual = questoes[11]:
            if (Aradio.checked) {
                    pos = questoes.indexOf(perguntaAtual);
                refreshScreen()
                acertos++;
            } else {
                pos = questoes.splice(pos, 1);
                refreshScreen()
                erros++
            }
            break;
            case perguntaAtual = questoes[12]:
            if (Aradio.checked) {
                    pos = questoes.indexOf(perguntaAtual);
                refreshScreen()
                acertos++;
            } else {
                pos = questoes.splice(pos, 1);
                refreshScreen()
                erros++
            }
            break;
            case perguntaAtual = questoes[13]:
            if (Bradio.checked) {
                    pos = questoes.indexOf(perguntaAtual);
                refreshScreen()
                acertos++;
            } else {
                pos = questoes.splice(pos, 1);
                refreshScreen()
                erros++
            }
            break;
            case perguntaAtual = questoes[14]:
            if (Bradio.checked) {
                    pos = questoes.indexOf(perguntaAtual);
                refreshScreen()
                acertos++;
            } else {
                pos = questoes.splice(pos, 1);
                refreshScreen()
                erros++
            }
            break;
            case perguntaAtual = questoes[15]:
            if (Dradio.checked) {
                    pos = questoes.indexOf(perguntaAtual);
                refreshScreen()
                acertos++;
            } else {
                pos = questoes.splice(pos, 1);
                refreshScreen()
                erros++
            }
            break;
        default:
            telaFinal()
            break;

    }
}




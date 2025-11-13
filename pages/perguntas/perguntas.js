const botoes = document.querySelectorAll(".btn-principal");

const textos = [
    "O estágio obrigatório é uma atividade prática exigida pela grade curricular de muitos cursos de graduação e técnicos. Ele tem como objetivo aproximar o estudante da realidade do mercado de trabalho, permitindo a aplicação dos conhecimentos aprendidos em sala de aula. Além de ser requisito para a conclusão do curso, o estágio obrigatório contribui para o desenvolvimento profissional e para a vivência de situações reais da área de formação.",
    "O estágio obrigatório é uma exigência prevista na grade curricular de diversos cursos técnicos e de graduação, com carga horária que varia conforme a área de formação e a instituição de ensino. Em cursos de graduação, o tempo de estágio geralmente corresponde a um total entre 200 e 400 horas, distribuídas ao longo de um ou mais semestres. Já em cursos técnicos, essa carga costuma ser menor, situando-se, em média, entre 120 e 300 horas. A definição exata está descrita no projeto pedagógico do curso ou no regulamento da instituição, sendo imprescindível que o estudante cumpra integralmente esse período para que possa concluir sua formação e receber o diploma.",
    "O estágio obrigatório proporciona ao estudante a oportunidade de aplicar os conhecimentos teóricos adquiridos em sala de aula na prática profissional. Ele permite desenvolver habilidades técnicas e comportamentais, como trabalho em equipe, comunicação e resolução de problemas. Além disso, oferece experiência real no mercado de trabalho, amplia a rede de contatos profissionais e aumenta a empregabilidade após a conclusão do curso.",
    "Durante o andamento do estágio obrigatório, o estudante deve apresentar e manter atualizada uma série de documentos exigidos pela instituição de ensino e pela legislação vigente. Entre eles estão: a apólice de seguro contra acidentes pessoais, que garante cobertura em caso de incidentes; o relatório de atividades, que registra as tarefas realizadas e os aprendizados adquiridos; e o cadastro da empresa ou local de estágio, caso ainda não esteja regularizado. Manter esses documentos em ordem é essencial para a validade do estágio e para a conclusão do curso.",
    "Após a conclusão do estágio obrigatório, o estudante deve apresentar à instituição de ensino todos os documentos que comprovem a realização das atividades e a carga horária cumprida. Entre os principais estão: o relatório final de atividades, assinado pelo supervisor de estágio; o termo de conclusão do estágio fornecido pela empresa; e, quando necessário, comprovantes de participação em treinamentos ou projetos específicos realizados durante o estágio. Essa documentação é fundamental para validar oficialmente o estágio e permitir a conclusão do curso."
];

botoes.forEach((botao, index) => {
    const p = botao.querySelector("p");
    p.classList.add("p-btn");
    botao.addEventListener("click", () => {
        if (p.innerText === textos[index]) {
            p.innerText = "";
        } else {
            p.innerText = textos[index]; 
        }
    });
});
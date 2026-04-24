const estudante = document.querySelector(".escolha-estudante");
const empresa = document.querySelector(".escolha-empresa");

estudante.addEventListener("click", function () {
    estudante.classList.add("select");
    empresa.classList.add("n-select");

    empresa.classList.remove("select");
    estudante.classList.remove("n-select");
});

empresa.addEventListener("click", function () {
    empresa.classList.add("select");
    estudante.classList.add("n-select");

    estudante.classList.remove("select");
    empresa.classList.remove("n-select");
});
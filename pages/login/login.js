const formLogin = document.querySelector("#form-login");

const email = document.querySelector("#email");
const senha = document.querySelector("#senha");
const tipo = document.querySelector("#tipo");

formLogin.addEventListener("submit", async (event) => {
    event.preventDefault();

    const dadosLogin = {
        email: email.value,
        senha: senha.value,
        tipo: tipo.value
    };

    const resposta = await fetch("http://localhost:3333/auth", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dadosLogin)
    });

    const resultado = await resposta.json();

    console.log(resultado);
});
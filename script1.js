document.addEventListener("DOMContentLoaded", () => {

    // ===== PESQUISA =====
    const inputCargo = document.querySelectorAll(".search-input-group input")[0];
    const inputLocal = document.querySelectorAll(".search-input-group input")[1];
    const botaoPesquisa = document.querySelector(".search-btn");

    botaoPesquisa.addEventListener("click", () => {
        const cargo = inputCargo.value;
        const local = inputLocal.value;

        if (cargo === "") {
            alert("Digite uma vaga!");
        } else {
            alert(`Você pesquisou: ${cargo} em ${local}`);
        }
    });

    // ===== CATEGORIAS =====
    const categorias = document.querySelectorAll(".card-categoria");

    categorias.forEach(cat => {
        cat.addEventListener("click", () => {
            const nome = cat.querySelector(".card-titulo").innerText;
            alert(`Categoria selecionada: ${nome}`);
        });
    });

    // ===== BOTÕES =====
    const btnEntrar = document.querySelector(".auth-buttons button:first-child");
    const btnCriarConta = document.querySelector(".auth-buttons button:last-child");

    btnEntrar.addEventListener("click", () => {
        console.log("Clicou em Entrar");
    });

    btnCriarConta.addEventListener("click", () => {
        console.log("Clicou em Criar Conta");
    });

});
const botoes = document.querySelectorAll(".apply-btn");

botoes.forEach(botao => {
    botao.addEventListener("click", () => {
        botao.innerText = "Applied ";
        botao.style.backgroundColor = "green";
        botao.disabled = true;
    });
});





document.addEventListener("DOMContentLoaded", () => {

    console.log("JS carregado ");

    // ===== BOTÕES HEADER =====
    const btnEntrar = document.querySelector(".auth-buttons button:first-child");
    const btnCriarConta = document.querySelector(".auth-buttons button:last-child");

    btnEntrar.addEventListener("click", () => {
        alert("Entrar clicado");
    });

    btnCriarConta.addEventListener("click", () => {
        alert("Criar Conta clicado");
    });


    // ===== PESQUISA =====
    const inputs = document.querySelectorAll(".search-input-group input");
    const inputCargo = inputs[0];
    const inputLocal = inputs[1];
    const botaoPesquisa = document.querySelector(".search-btn");

    botaoPesquisa.addEventListener("click", () => {
        const cargo = inputCargo.value.trim();
        const local = inputLocal.value.trim();

        if (cargo === "") {
            alert("Digite uma vaga!");
            return;
        }

        alert(`Você pesquisou: ${cargo} em ${local || "qualquer localização"}`);
    });


    // ===== BOTÕES APPLY =====
    const botoesApply = document.querySelectorAll(".apply-btn");

    botoesApply.forEach(btn => {
        btn.addEventListener("click", () => {
            const vaga = btn.closest(".vaga");
            const titulo = vaga.querySelector("h3").innerText;

            alert(`Candidatura enviada para: ${titulo}`);
        });
    });


    // ===== FILTROS (CHECKBOX) =====
    const filtros = document.querySelectorAll(".filtro input[type='checkbox']");

    filtros.forEach(filtro => {
        filtro.addEventListener("change", () => {
            console.log(`Filtro ${filtro.parentElement.innerText} = ${filtro.checked}`);
        });
    });

});
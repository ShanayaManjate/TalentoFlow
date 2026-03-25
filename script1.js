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



document.addEventListener("DOMContentLoaded", function() {
    // Seleciona a apply-box
    var applyBox = document.querySelector(".apply-box");
    var botao = applyBox.querySelector(".apply-btn");
    var barra = applyBox.querySelector(".progress8");
    var aplicados = applyBox.querySelector(".bold");
    var capacidade = applyBox.querySelector(".light");

    // Define a capacidade total
    var total = 10;

    botao.addEventListener("click", function() {
        // Se já clicou, não faz nada
        if(botao.innerText === "Applied") return;

        // Muda texto e cor do botão
        botao.innerText = "Applied";
        botao.style.backgroundColor = "#4CAF50"; // verde
        botao.style.color = "white";

        // Atualiza número de aplicados
        var num = parseInt(aplicados.innerText);
        num = num + 1;
        aplicados.innerText = num;

        // Atualiza texto de capacidade
        capacidade.innerText = "of " + total + " capacity";

        // Atualiza barra de progresso
        var porcentagem = (num / total) * 100;
        if(porcentagem > 100) porcentagem = 100;
        barra.style.width = porcentagem + "%";
        barra.style.backgroundColor = "#4CAF50";
    });
});


const botoesApply = document.querySelectorAll(".apply-btn");

botoesApply.forEach(botao => {
    botao.addEventListener("click", () => {
        botao.innerText = "Applied ✅";
        botao.style.backgroundColor = "green";
    });
});
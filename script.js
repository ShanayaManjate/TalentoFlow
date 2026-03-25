const botoes = document.querySelectorAll(".apply-btn");

botoes.forEach(botao => {
    botao.addEventListener("click", () => {
        botao.innerText = "Applied ✅";
        botao.style.backgroundColor = "green";
        botao.disabled = true;
    });
});
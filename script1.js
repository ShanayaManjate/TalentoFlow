const inputPesquisa = document.querySelector(".search-input-group input");
const botaoPesquisa = document.querySelector(".search-btn");

botaoPesquisa.addEventListener("click", () => {
    const valor = inputPesquisa.value;

    if (valor === "") {
        alert("Digite uma vaga!");
    } else {
        alert(`Você pesquisou: ${valor}`);
    }
});



/* Para capturar por categoria */

const categorias = document.querySelectorAll(".card-categoria");

categorias.forEach(cat => {
    cat.addEventListener("click", () => {
        const nome = cat.querySelector(".card-titulo").innerText;

        alert(`Categoria selecionada: ${nome}`);
    });
});



categorias.forEach(cat => {
    cat.addEventListener("click", () => {
        const nome = cat.querySelector(".card-titulo").innerText;

        alert(`Categoria selecionada: ${nome}`);
    });
});
const botao = document.getElementById("menu_botao");
const menu = document.getElementById("menu");
const iconeBarras = document.getElementById("icone-barras");
const iconeX = document.getElementById("icone-x");

botao.addEventListener("click", () => {
    menu.classList.toggle("ativo");

    const aberto = menu.classList.contains("ativo");

    iconeBarras.style.display = aberto ? "none" : "block";
    iconeX.style.display = aberto ? "block" : "none";
});

/* Fecha o menu ao clicar nos links */
document.querySelectorAll(".links a").forEach(link => {
    link.addEventListener("click", () => {
        menu.classList.remove("ativo");
        iconeBarras.style.display = "block";
        iconeX.style.display = "none";
    });
});

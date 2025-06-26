document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.getElementById("menu-toggle");
    const menu = document.getElementById("menu");

    menuToggle.addEventListener("click", function() {
        // Alterna a visibilidade do menu
        if (menu.style.display === "flex" || menu.style.display === "block") {
            menu.style.display = "none";
        } else {
            menu.style.display = "flex";
            menu.style.flexDirection = "column";
        }
    });
});

// Botão voltar ao topo
var btn = document.getElementById("btnTopo");

window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
};

btn.onclick = function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};
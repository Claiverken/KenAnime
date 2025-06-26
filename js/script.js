// Aguarda o carregamento completo do DOM para garantir que todos os elementos existam
document.addEventListener("DOMContentLoaded", function() {
    
    // --- LÓGICA DO MENU HAMBÚRGUER ---
    const menuToggle = document.getElementById("menu-toggle");
    const menu = document.getElementById("menu");

    // Verifica se o menuToggle existe na página antes de adicionar o evento
    if (menuToggle) {
        menuToggle.addEventListener("click", function() {
            // Alterna a visibilidade do menu
            const isMenuVisible = menu.style.display === "flex" || menu.style.display === "block";
            if (isMenuVisible) {
                menu.style.display = "none";
            } else {
                menu.style.display = "flex";
                menu.style.flexDirection = "column";
            }
        });
    }

    // --- LÓGICA DO BOTÃO VOLTAR AO TOPO ---
    const btnTopo = document.getElementById("btnTopo");

    // Verifica se o botão existe na página
    if (btnTopo) {
        // Função que controla a visibilidade do botão
        function toggleBotaoTopo() {
            // Usa '||' para funcionar em todos os navegadores. Se um falhar, o outro funciona.
            const scrolled = document.documentElement.scrollTop || document.body.scrollTop;
            
            if (scrolled > 20) { // Mostra o botão após rolar 20 pixels
                btnTopo.style.display = "block";
            } else {
                btnTopo.style.display = "none";
            }
        }

        // Adiciona o "ouvinte" de evento de scroll na janela
        window.addEventListener('scroll', toggleBotaoTopo);

        // Função para rolar a página suavemente para o topo ao clicar
        btnTopo.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});
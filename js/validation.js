// Adiciona um "ouvinte de evento" que espera o conteúdo da página carregar completamente.
document.addEventListener("DOMContentLoaded", function() {

    // Encontra o formulário no HTML pelo ID 'contactForm'.
    const contactForm = document.getElementById('contactForm');

    // Adiciona um "ouvinte" para o evento de 'submit' (envio) do formulário.
    // A função de validação será chamada ANTES do formulário ser realmente enviado.
    contactForm.addEventListener('submit', function(event) {
        // 'event.preventDefault()' impede o envio automático do formulário.
        // Isso nos dá a chance de validar os campos primeiro.
        event.preventDefault();

        // Chama a função que valida os campos e armazena o resultado (true ou false).
        const isValid = validateForm();

        // Se a validação for bem-sucedida (isValid é true), o formulário é enviado.
        if (isValid) {
            console.log("Formulário válido. Enviando...");
            contactForm.submit(); // Envia o formulário
        } else {
            console.log("Formulário inválido. Por favor, corrija os erros.");
        }
    });

    // Função principal que realiza a validação dos campos.
    function validateForm() {
        let isValid = true; // Começamos assumindo que o formulário é válido.

        // Pega os elementos de input e de erro do HTML.
        const nome = document.getElementById('nome');
        const email = document.getElementById('email');
        const mensagem = document.getElementById('mensagem');

        const nomeError = document.getElementById('nomeError');
        const emailError = document.getElementById('emailError');
        const mensagemError = document.getElementById('mensagemError');

        // --- VALIDAÇÃO DO NOME ---
        // 'trim()' remove espaços em branco do início e do fim.
        if (nome.value.trim() === '') {
            nomeError.textContent = 'Por favor, preencha o seu nome.'; // Define a mensagem de erro.
            isValid = false; // Marca o formulário como inválido.
        } else {
            nomeError.textContent = ''; // Limpa a mensagem de erro se o campo for válido.
        }

        // --- VALIDAÇÃO DO EMAIL ---
        if (email.value.trim() === '') {
            emailError.textContent = 'Por favor, preencha o seu email.';
            isValid = false;
        } else if (!isValidEmail(email.value)) { // Usa uma função auxiliar para verificar o formato do email.
            emailError.textContent = 'Por favor, insira um email válido.';
            isValid = false;
        } else {
            emailError.textContent = '';
        }

        // --- VALIDAÇÃO DA MENSAGEM ---
        if (mensagem.value.trim() === '') {
            mensagemError.textContent = 'Por favor, escreva uma mensagem.';
            isValid = false;
        } else {
            mensagemError.textContent = '';
        }

        // Retorna true se todos os campos forem válidos, e false caso contrário.
        return isValid;
    }

    // Função auxiliar para validar o formato do email com uma expressão regular.
    function isValidEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
});
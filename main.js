let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onsroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

let slides = document.querySelectorAll('.home .slide');
let index = 0;

function next() {
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
}

function prev() {
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
}
// Validação de formulário com mensagens de erro e sucesso na seção de contato
let contactForm = document.querySelector('.message form');
let nameInput = contactForm.querySelector('input[placeholder="Nome Completo"]');
let emailInput = contactForm.querySelector('input[placeholder="Email"]');
let messageInput = contactForm.querySelector('textarea[placeholder="Mensagem"]');

contactForm.onsubmit = (e) => {
    e.preventDefault(); // Evita envio do formulário

    let error = false;
    if (nameInput.value.trim() === '') {
        alert('Erro: O campo "Nome Completo" é obrigatório.');
        error = true;
    }

    if (emailInput.value.trim() === '' || !validateEmail(emailInput.value)) {
        alert('Erro: Por favor, insira um email válido.');
        error = true;
    }

    if (messageInput.value.trim() === '') {
        alert('Erro: O campo "Mensagem" é obrigatório.');
        error = true;
    }

    if (!error) {
        alert('Formulário enviado com sucesso! Obrigado por entrar em contato.');
        contactForm.reset(); // Limpa o formulário
    }
};

// Função auxiliar para validar email
function validateEmail(email) {
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

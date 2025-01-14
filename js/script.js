// Função para enviar o formulário de contato
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;
    
    if (name && email && message) {
        alert(`Mensagem enviada por: ${name}\nEmail: ${email}\nMensagem: ${message}`);
    } else {
        alert('Por favor, preencha todos os campos!');
    }
});

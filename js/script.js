function baixarPDF() {
    // Caminho do arquivo PDF dentro da pasta 'correct'
    const url = 'correct/JoaoVitor_Curriculo_Tecnico_TI.pdf';  // Caminho do arquivo PDF
    const link = document.createElement('a');
    link.href = url;
    link.download = 'JoaoVitor_Curriculo_Tecnico_TI.pdf';  // Nome do arquivo ao ser baixado
    link.click();
}
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

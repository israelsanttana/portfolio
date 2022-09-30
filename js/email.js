window.onload = function() {
    document.getElementById('form').addEventListener('submit', function(event) {
        event.preventDefault();
        // these IDs from the previous steps
        emailjs.sendForm('iss-dev', 'template_3u702l7', this)
            .then(function() {
                alert('Mensagem enviada!');
            }, function(error) {
                alert('Erro...', error);
            });
            this.reset();
    });
}

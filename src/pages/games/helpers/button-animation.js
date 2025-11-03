document.querySelectorAll('.card-buttons button').forEach(button => {
    button.addEventListener('click', function(e) {
        // Para a propagação do evento
        e.stopPropagation();

        // Remove a classe de TODOS os botões
        document.querySelectorAll('.card-buttons button').forEach(btn => {
            btn.classList.remove('animating');
        });

        // Pequeno delay para garantir que a classe foi removida
        setTimeout(() => {
            // Adiciona apenas no botão clicado
            this.classList.add('animating');

            // Remove após a animação
            setTimeout(() => {
                this.classList.remove('animating');
            }, 600);
        }, 10);
    });
});
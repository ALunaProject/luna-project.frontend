document.querySelectorAll('.card-buttons button').forEach(button => {
    button.addEventListener('click', function(e) {
        e.stopPropagation();

        e.preventDefault();

        document.querySelectorAll('.card-buttons button').forEach(btn => {
            btn.classList.remove('animating');
        });

        // Adiciona a animação no botão clicado
        setTimeout(() => {
            this.classList.add('animating');

            // Remove a classe após a animação terminar
            setTimeout(() => {
                this.classList.remove('animating');
            }, 600);
        }, 10);
    });
});

document.querySelector('form').addEventListener('submit', async (event) => {
    event.preventDefault();

    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const senha = document.getElementById('senha').value.trim();
    // const repeatPassword = document.getElementById('repeat-senha').value.trim();
    //
    // if (senha !== repeatPassword) {
    //     alert('A senha não condiz! 😬');
    //     return;
    // }

    try {
        const response = await fetch('http://localhost:8081/user/cadastro', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                nome: nome,
                email: email,
                senha: senha,
            }),
        });

        if (!response.ok) {
            throw new Error('Cadastro fracassado com sucesso');
        }

        const createdUser = await response.json();
        console.log('🎉 Novo usuário cadastrado! Faça seu login agora!');

        alert(`Bem vindo zé, ${createdUser.nome}! 🚀`);

    } catch (error) {
        console.error('Alguma coisa deu errado:', error);
        alert('Não é possivel efetuar um cadastro agora, tente novamente!');
    }
});
document.querySelector('form').addEventListener('submit', async (event) => {
    event.preventDefault();

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    try {
        const response = await fetch('http://localhost:8081/user/login/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: email,
                senha: password,
            }),
        });

        const result = await response.text();

        console.log(response.status);
        console.log(result);

        if (result.trim() === 'Logado com sucesso') {
            alert('✅ Logado com sucesso, bem vindo de volta chefe!');
        } else if (result.trim() === 'Usuario não encontrado') {
            alert('😕 Usuário não encontrado. Tente criar uma conta');
        } else if (result.trim() === 'Senha incorreta') {
            alert('🚫 Senha incorreta, tente novamente!');
        } else {
            console.log(result);
            alert('🤔 Resposta inexperada: ' + result);
        }

    } catch (error) {
        console.error('⚠️ deu erro nego:', error);
        alert('Alguma coisa deu errado... o backend ta com sono 😴');
    }
});
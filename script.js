// Adicionar novas dicas
const adicionarDicaBtn = document.getElementById('adicionar-dica');
const listaDicas = document.getElementById('lista-dicas');
const novaDicaInput = document.getElementById('nova-dica');

adicionarDicaBtn.addEventListener('click', () => {
    const dica = novaDicaInput.value.trim();
    if(dica) {
        const li = document.createElement('li');
        li.textContent = dica;
        listaDicas.appendChild(li);
        novaDicaInput.value = '';
    }
});

// Enviar formulário
const formContato = document.getElementById('form-contato');
const mensagemSucesso = document.getElementById('mensagem-sucesso');

formContato.addEventListener('submit', (e) => {
    e.preventDefault();
    mensagemSucesso.textContent = "Mensagem enviada com sucesso! 🌱";
    formContato.reset();
});

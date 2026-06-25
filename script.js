// Seleção dos elementos do HTML
const campoSenha = document.getElementById('campo-senha');
const btnGerar = document.getElementById('btn-gerar');
const btnCopiar = document.getElementById('btn-copiar');
const sliderTamanho = document.getElementById('slider-tamanho');
const valorTamanho = document.getElementById('valor-tamanho');

// Banco de caracteres para gerar a senha segura
const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*()_+-=[]{}|;:,.<>?';

// Atualiza o número do tamanho na tela enquanto arrasta o slider
sliderTamanho.addEventListener('input', () => {
    valorTamanho.textContent = sliderTamanho.value;
});

// Função principal para gerar a senha aleatória
function gerarSenha() {
    const tamanho = parseInt(sliderTamanho.value);
    let senhaGerada = '';

    for (let i = 0; i < tamanho; i++) {
        // Escolhe um caractere aleatório da nossa lista
        const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
        senhaGerada += caracteres.charAt(indiceAleatorio);
    }

    // Coloca a senha gerada dentro do campo de texto
    campoSenha.value = senhaGerada;
    
    // Reseta o texto do botão copiar caso ele tenha sido usado antes
    btnCopiar.textContent = 'Copiar';
}

// Função para copiar a senha para a área de transferência
function copiarSenha() {
    if (campoSenha.value === "" || campoSenha.value === "Copiado!") return;

    // Seleciona e copia o texto do input
    campoSenha.select();
    campoSenha.setSelectionRange(0, 99999); // Para dispositivos móveis
    navigator.clipboard.writeText(campoSenha.value);

    // Feedback visual para o usuário
    btnCopiar.textContent = 'Copiado!';
}

// Atribui as funções aos cliques dos botões
btnGerar.addEventListener('click', gerarSenha);
btnCopiar.addEventListener('click', copiarSenha);

// Gera uma senha automaticamente assim que a página abre
gerarSenha();
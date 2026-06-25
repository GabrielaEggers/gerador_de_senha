const campoSenha = document.getElementById('campo-senha');
const btnGerar = document.getElementById('btn-gerar');
const btnCopiar = document.getElementById('btn-copiar');
const sliderTamanho = document.getElementById('slider-tamanho');
const valorTamanho = document.getElementById('valor-tamanho');

const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*()_+-=[]{}|;:,.<>?';

// Atualiza o contador visual do tamanho
sliderTamanho.addEventListener('input', () => {
    valorTamanho.textContent = sliderTamanho.value;
});

// Função para gerar senha
function gerarSenha() {
    const tamanho = parseInt(sliderTamanho.value);
    let senhaGerada = '';

    for (let i = 0; i < tamanho; i++) {
        const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
        senhaGerada += caracteres.charAt(indiceAleatorio);
    }

    campoSenha.value = senhaGerada;
    
    // Reseta o estado do botão copiar
    btnCopiar.textContent = 'Copiar';
    btnCopiar.classList.remove('copiado');
}

// Função para copiar senha
function copiarSenha() {
    if (!campoSenha.value) return;

    navigator.clipboard.writeText(campoSenha.value);

    // Altera o estilo do botão para indicar sucesso
    btnCopiar.textContent = 'Copiado!';
    btnCopiar.classList.add('copiado');
}

btnGerar.addEventListener('click', gerarSenha);
btnCopiar.addEventListener('click', copiarSenha);

// Inicializa com uma senha ao carregar a página
gerarSenha();
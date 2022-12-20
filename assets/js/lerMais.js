const lerMaisBtn = document.querySelector('.btn-ler-mais');
const aparecendoSobre = document.querySelector ('.ler-mais');



lerMaisBtn.addEventListener('click', () => {
    aparecendoSobre.classList.toggle('ler-mais-ativo');
    lerMaisBtn.classList.toggle('btn-ler-mais-inativo');
});
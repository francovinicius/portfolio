const aparecendoSobre = document.querySelector ('.ler-mais');
const lerMaisBtn = document.querySelector('.btn-ler-mais');


lerMaisBtn.addEventListener('click', () => {
    aparecendoSobre.classList.toggle('.ler-mais-ativo');
    console.log('funcionou');
});

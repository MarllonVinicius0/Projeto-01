const botaoTema = document.getElementById('btn-tema');
const corpo = document.body;

if(localStorage.getItem('tema') === 'escuro'){
    corpo.classList.add('escuro');
}

botaoTema.addEventListener('click', () =>{
    corpo.classList.toggle('escuro');

    if(corpo.classList.contains('escuro')){
        localStorage.setItem('tema','escuro');
    }else{
        localStorage.setItem('tema','claro');
    }
});
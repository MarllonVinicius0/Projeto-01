//Modo escuro
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

//Validacao Forms

const form = document.getElementById('form-contato');
const aviso = document.getElementById('aviso');

form.addEventListener('submit',function(evento){
    evento.preventDefault(); //impedir o envio antes de verificar

    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();

    const dadosFormulario = {
        nome: nome,
        email: email,
        mensagem: mensagem
};

    if(!nome || !email || !mensagem){
        aviso.textContent = "Por favor, preencha todos os campos!"
        return;
    }
    let formulariosSalvos = localStorage.getItem('formularios');
    if(formulariosSalvos){
        try {
            formulariosSalvos = JSON.parse(formulariosSalvos);
            if (!Array.isArray(formulariosSalvos)) {
                formulariosSalvos = [];
            }
        } catch (e) {
            formulariosSalvos = [];
        }
    }else{
        formulariosSalvos = [];
    }

    formulariosSalvos.push(dadosFormulario);

    aviso.style.color = "green";
    aviso.textContent = "Mensagem enviada com sucesso!";
    localStorage.setItem('formularios',JSON.stringify(formulariosSalvos))
    form.reset(); //limpar o formulário

    setTimeout(function() {
    aviso.style.color = "red"; 
    aviso.textContent = ""; 
}, 2000);
});
const form = document.getElementById('form-deposito');
const campoA = document.getElementById('campoA');
const campoB = document.getElementById('campoB');
let formEValido = false

function validaCampo(campoA, campoB) {
    if(campoA.value < campoB.value){
        return true
    }else{
        return false
    }
    
}

form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const mensagemSucesso = `O valor <b>${campoB.value}</b> é maior que <b>${campoA.value}</b>`;

    formEValido = validaCampo(campoA,campoB)
    if(formEValido){
        const containerMensagemSucesso = document.querySelector('.success-message');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';

        campoA.value = '';
        campoB.value = '';

    }else{
        campoB.style.border = '1px solid red';
        document.querySelector('.error-message').style.display = 'block';
    }
})

campoB.addEventListener('keyup', function(e){
    console.log(e.target.value);
    formEValido = validaCampo(campoA, campoB)

    if (!formEValido){
        //campoB.classList.add('error');
        campoB.style.border = '1px solid red';
        document.querySelector('.error-message').style.display = 'block';
    }else{
        //campoB.classList.remove('error');
        campoB.style = '';
        document.querySelector('.error-message').style.display = 'none';
    }
})

//


const form = document.getElementById('form-deposito');
const campoA = document.getElementById('campoA');
const campoB = document.getElementById('campoB');
let formEValido = false


//função para validar se o campo A é menor que o campo B
function validaCampo(campoA, campoB) {
    // usado parceInt para converter o valor em numero, estava lendo como string digito por digito e as validações de numeros de 2 digitos ou mais davam erro
    if(parseInt(campoA.value) < parseInt(campoB.value)){
        return true
    }else{
        return false
    }
    
}

// adicionado evento no botão submit
form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    //msg de sucesso
    const mensagemSucesso = `O valor <b>${campoB.value}</b> é maior que <b>${campoA.value}</b>`;

    //valor da variavel formEValido vai ser o valor boolean que retornar da função validaCampo
    formEValido = validaCampo(campoA,campoB)

    // se o valor for true, vai alterar o css do campo html que esta com o id success-message, exibir a mensagem de sucesso e depois deixar os campos vazios novamente
    if(formEValido){
        const containerMensagemSucesso = document.querySelector('.success-message');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';

        campoA.value = '';
        campoB.value = '';
    // se valor for false, vai alterar o css do campo html com o id error-message e exibir a mensagem que ja esta no html
    }else{
        campoB.style.border = '1px solid red';
        document.querySelector('.error-message').style.display = 'block';
    }
})

// adiciona o evento de pegar as teclas que são digitadas em tempo real nos campos A e B 
campoB.addEventListener('keyup', function(e){
    console.log(e.target.value);
    //valor da variavel formEValido vai ser o valor boolean que retornar da função validaCampo
    formEValido = validaCampo(campoA, campoB)

    // se o valor for falso, vai mudar o css do campo e exibir mensagem de erro, se for verdadeiro a mensagem some    
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




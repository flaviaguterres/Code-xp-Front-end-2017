var dadosCliente = {
    endereco : {},
    contato : {}
};

function validarFormulario(){
    
    event.preventDefault();

    console.log(validarEndereco())
    
    if(validarEndereco() && validarContato())
        console.log('validação está ok.. pode prosseguir');
    else 
        console.log('validação não passou.. preencher todos os campos');
}

function validarEndereco(){
   
    // Gerar objeto endereco baseado nos dados do formulario

    objEndereco = {
        pais        : document.getElementById('selection_country').value,
        estado      : document.getElementById('state').value,
        cidade      : document.getElementById('selection_city').value,
        cep         : document.getElementById('zip').value,
        endereco1   : document.getElementById('ad1').value,
        endereco2   : document.getElementById('ad2').value,
    };

    if(objEndereco.pais == 0) {
        return false;
    } else if(objEndereco.cidade == 0) {
        return false; 
    } else  if(objEndereco.estado.trim().length == 0) {
        return false;
    } else if(objEndereco.cep.trim().length == 0) {
        return false;
    } else if(objEndereco.endereco1.trim().length == 0) {
        return false;
    } else if(objEndereco.endereco2.trim().length == 0) {
        return false;
    } else {  // Validação ok

        // GRava o objeto endereco no objeto dadosCliente
        dadosCliente.endereco = objEndereco;
        
        // Retorno da função
        return true;
    }
}

function validarContato( _objContato ){
    // Campo radio button
    // Gerar objeto endereco baseado nos dados do formulário

    var pacote = false;

    if(document.getElementById('s_input').checked) {
        pacote = document.getElementById('s_input').value;
    } else if(document.getElementById('u_input').checked) {
        pacote = document.getElementById('u_input').value;
    }

    objContato = {
        pacote   : pacote,
    };

    // Fazer validação dos outros campos
    console.log(pacote);
}

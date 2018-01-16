var dadosCliente = {

    endereco : {

    },
    contato : {

    }
};

function validarFormulario() {

    event.preventDefault();

    // Gerar objeto endereco baseado nos dados do formulario 
    objEndereco = {
        pais      : document.getElementById('selection_country').value,
        cidade    : document.getElementById('selection_city').value,
        estado    : document.getElementById('state').value,
        endereco1 : document.getElementById('ad1').value,
        endereco2 : document.getElementById('ad2').value,
    };

    validarEndereco(objEndereco);
    console.log(objEndereco);
}

function validarEndereco( o ) {
    // Validar se os campos estão preenchidos
}
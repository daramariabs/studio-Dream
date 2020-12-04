function validar(){
    var nome = document.querySelector('#nome')
    var email = document.querySelector('#email')
    var telefone = document.querySelector('#telefone')

    if(nome.value == ''){
        alert('Por favor prencha todos os campos')
        nome.focus()
    }else if (email.value == ''){
        alert('Por favor prencha todos os campos')
        email.focus()
    }else if (telefone.value == ''){
        alert('Por favor prencha todos os campos')
        telefone.focus()
    }else {
        
    }

}
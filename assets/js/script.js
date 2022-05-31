/*
váriavel 
var :  
let : aceita tudo.

*/









let nome = window.document.getElementById('nome') /*criando variavel*/
let email = document.querySelector('#email') /*precisa colocar a # se for queryselector*/
let assunto = document.querySelector('#assunto')
let nomeOk = false
let emailOk = false
let assuntoOk = false
let mapa = document.querySelector('#mapa')


nome.style.width = '40%'
email.style.width = '50%'
assunto.style.width = '50%'

function validaNome() {
    let txtNome = document.querySelector('#txtNome')
       if (nome.value.length < 3) {
           txtNome.innerHTML = 'Nome Inválido' 
           txtNome.style.color = 'red'    
        
    }else{
        txtNome.innerHTML = 'Nome Válido'
        txtNome.style.color = 'green'
        nomeOk = true
    }       
    }

    function validaEmail(){
        
    }
/*condições*/
    function validaEmail() {
        let txtEmail = document.querySelector('#txtEmail')
           if (email.value.indexOf('@') == - 1 || email.value.indexOf('.') == -1) { /*caracteres obrigatorios*/
               txtEmail.innerHTML = 'Email Inválido'
               txtEmail.style.color = 'red'    

           }else{
            txtEmail.innerHTML = 'Email Válido'
            txtEmail.style.color = 'green'
            emailOk = true
           }
            
           }

function validaAssunto(){
    let txtAssunto = document.querySelector('#txtAssunto')

    if (assunto.value.length >= 100) {
        txtAssunto.innerHTML = 'Texto muito grande, digite no máximo 100 caracteres'
        txtAssunto.style.color = 'red'
        txtAssunto.style.display = 'block'


    }else{
        txtAssunto.style.display = 'none'
        assuntoOk = true
    }


    }

    function enviar (){
        if(nomeOk == true && emailOk == true){
            alert ('Formulário Enviado com sucesso!')

        }else{
            alert ('Preencha novamente!')


        }
    }
   
    function zoom (){
        mapa.style.width = '800px'
        mapa.style.height = '600px'
    }

    function normal() {
        mapa.style.width = '400px'
        mapa.style.height = '250px'

    }

   
    
      
      
   
      


    
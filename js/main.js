$(document).ready(function(){
    const button = $("#input-button");
    const url = 'https://api.github.com/users/'

    button.click(function(){ //quando clicar o botão, a função nas chaves será executada;
        let username = $("#input-user").val(); //adicionar a variavel no evento pois não há entrada no input até que se clique
        $.getJSON(url + username, function(data){
            console.log(data);
        }) //de onde quero tirar o JSON? url + o que foi digitado no input
        
        alert(data);
    
    });


});
$(document).ready(function(){
    const button = $("#input-button");
    
    button.click(function(){ //quando clicar o botão, a função nas chaves será executada;
        let username = $("#input-user").val();
        alert(username); 
    });


});
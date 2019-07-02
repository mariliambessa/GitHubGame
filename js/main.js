$(document).ready(function(){
    const button = $("#input-button");
    const url = 'https://api.github.com/users/'
    let pontos = 0;
    const contarPontos = $('#score');


    button.click(function(){ //quando clicar o botão, a função nas chaves será executada;
        let username = $("#input-user").val(); //adicionar a variavel no evento pois não há entrada no input até que se clique
        
        //$("#add-data").append(`<img scr="${user.avatar_url}>`); - colocar no id=user-data no html uma imagem cuja fonte é uma variável, não string       

        $.getJSON(url + username, function(user){
            addUser(user);
            pontos++;
            contarPontos.html(pontos);    
        }) //se der algum erro, executa o que está nas chaves do fail
        .fail(function(){
            pontos--;
            contarPontos.html(pontos);
            alert("usuário inexistente");        
        }); //de onde quero tirar o JSON? url + o que foi digitado no input
         //retorna a url do avatar do input quando clicar
        
        function addUser(user){
            $("#add-data").append(`
                <div class="col-sm-3 mb-3">  
                    <div class="card" style="width: 100%;">
                        <img class="card-img-top" src="${
                            user.avatar_url
                        }" alt="Card image cap">
                        <div class="card-body">
                            <p class="card-text">${user.name}</p>
                        </div>
                    </div>
                </div>        
            `)       

        }
    });


});
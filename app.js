window.onload = function (){
    document.getElementById('usuario').focus();
}

function logar(){
    var checkarLogin = false;
    var usuario=document.logando.usuario.value;
    usuario=usuario.toLowerCase();

    var senha=document.logando.senha.value;
    senha=senha.toLowerCase();

    if(usuario=="admin" && senha=="123"){
        checkarLogin = true;
        var logado = document.getElementById('Status');
        logado.innerText = 'Logado com sucesso...';
        logado.className =  'Status1';
        setTimeout(()=>{
        logado.innerText = 'Redirecionando usuario...';
        setTimeout(()=>{
        window.location.href = "https://jeanhenriquegba.github.io/"
        },700);
        },500);

    }
    if(checkarLogin == false){
        var logado = document.getElementById('Status');
        logado.innerText = 'Login ou senha incorreta.';
        logado.className =  'Status2';
    }
    
}
document.addEventListener('keydown', function (event) {
    if (event.keyCode !== 13) return;
    logar();
});
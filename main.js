alert("Ola o site está em desenvolvimento");
var d = new Date();
alert(d);
var nome = prompt("qual e seu nome ?(esse site não salva informações)");
alert("Bem vindo " + nome);

function clicado(){
    alert("vc está sendo redimencionado para outra pagina, deseja continuar ?")
    window.location.href="carros favoritos.html"
}

function voltar(){
    window.location.href="pagina_inicial.html"
}

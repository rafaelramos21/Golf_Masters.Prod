function redirecionar(){
    console.log('Função chamada');
    window.location.href = 'produtos.html';
}
//navigation auto
let counter = 1;
document.getElementById("radio1").checked = true;

setInterval( function(){
    proximagem();
}, 5000)

function proximagem(){
    counter++;
    if(counter>3){
        counter = 1;
    }

    document.getElementById("radio"+counter).checked = true;
}
//navigation auto
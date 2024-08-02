//navigation auto
let counter = 1;
document.getElementById("radio1").checked = true;

setInterval( function(){
    proximagem();
}, 4000);

function proximagem(){
    counter++;
    if(counter>3){
        counter = 1;
    }

    document.getElementById("radio"+counter).checked = true;
};
//navigation auto

//redirecionar
function redirecionar_home(){
    window.location.href = 'index.html';
};


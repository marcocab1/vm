
var notas = $('.sonidos');

$('.note').click(function(){
    let num = parseInt(this.id);
    tocar(num);
});

function tocar(num){
    notas[num].pause();
    notas[num].currentTime = 0;
    notas[num].play();
    $("#" + num).css("box-shadow", "0px 0px 10px White");
    setTimeout(function(){
        $("#" + num).css("box-shadow", "none");
    }, 300);
}
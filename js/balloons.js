$('document').ready(function(){

$('label#red').on("mouseover",turnRed);
$('label#green').on("mouseover",turnGreen);
$('label#blue').on("mouseover",turnBlue);


$("button#submit").on("click", makeToast);


});

// $( window ).on("load", function() {
//     randomize.load();
// });
window.onload = function(){
    
    randomNumber = Math.floor(Math.random()*4+1);

     if (randomNumber == 1) {
          $('h1#birthday').addClass('animated heartBeat');
     }
     if (randomNumber == 2) {
        $('h1#birthday').addClass('animated bounce');
     }
     if (randomNumber == 3) {
        $('h1#birthday').addClass('animated rubberBand');

     }


}


function turnRed(){
    $('h1#birthday').css('color','#f51000');
}
function turnGreen(){
    $('h1#birthday').css('color','#189100');
}
function turnBlue(){
    $('h1#birthday').css('color','#0081d6');
}
// function randomize(){
//     $('div#body').css('background','#f51000')
// }



$('#select-all').on('change',function() {
    if(this.checked) {
        $(':checkbox').each(function() {
            this.checked = true;
            $('div#balloonAnchorElement').show();
            $('#' + this.id + 'Img').css('visibility', 'visible')
            $(this).is(':checked') ?
             $('#' + this.id + 'Img').removeClass().addClass('animated bounceInDown') :
             $('#' + this.id + 'Img').addClass('animated bounceOutUp');
        });
    } else {
        $(':checkbox').each(function() {
            this.checked = false;
            $('#' + this.id + 'Img').css('visibility', 'visible')
            $(this).is(':checked') ?
             $('#' + this.id + 'Img').removeClass().addClass('animated bounceInDown') :
             $('#' + this.id + 'Img').addClass('animated bounceOutUp');;
        });
    }
});



function makeToast(){

    if ($('#red').prop('checked') || $('#green').prop('checked') || $('#blue').prop('checked')){
        $('#toast').toast({ autohide: false }).toast('hide');
    } else {
        $('#toast').toast({ autohide: false }).toast('show');
    }
}


$(function(){
    $('#birthday').pickadate({ format: 'mmmm, d' });

    // uncheck all checkboxes (FireFox)
    $('.form-check-input').each(function () {
        $(this).prop('checked', false);
    });
    // event listener for check/uncheck
    $('.form-check-input').on('change', function () {
        // make the image visible
        $('#' + this.id + 'Img').css('visibility', 'visible')
        // animate balloon in/out based on checkbox
        $(this).is(':checked') ?
         $('#' + this.id + 'Img').removeClass().addClass('animated bounceInDown') :
         $('#' + this.id + 'Img').addClass('animated bounceOutUp');
    });
});

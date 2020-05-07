var aryButtons = $('.loc');

aryButtons.on('click', function() {
    $(this).toggleClass('clicked')
    $('.loc').not($(this)).removeClass('clicked');
});

function toggleDiv(divId) {
    $(document).ready(function(){
            $("#"+divId).toggle();
            $('.im').not($("#"+divId)).hide();
    });
};
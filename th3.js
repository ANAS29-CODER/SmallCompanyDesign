
var avv =document.getElementsByClassName('ll');

$('#uli li ').on('click',function(){
    $(this).addClass('active').siblings().removeClass('active');
    

    if( $(this).data('class')==='all'){
        $('.phs .col-md-3 ').css('opacity',1);

    }else{
        $('.phs .col-md-3').css('opacity',.3);
       $($(this).data('class')).parent().css('opacity',1) ;
    };
});
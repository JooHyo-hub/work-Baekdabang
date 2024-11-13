$(document).ready(function() {

    let $nav = $('.nav_menu');

    $nav.mouseover(function(){
        $(this).css('height', '300px');
    });

    $nav.mouseleave(function(){
        $(this).css('height', '113px');
    });
});
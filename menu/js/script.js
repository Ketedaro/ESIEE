$(document).ready(function() {
    console.log("Salut");
});

$('#main_btn').on('mouseenter', function() {
    $('#menu_desc').tapTarget('open');
}).on('mouseleave', function(){
    $('#menu_desc').tapTarget('close');
});
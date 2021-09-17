/*
$('#name') -> will find element by id=name
$('#name').keyup(function()-> Whenever key is pressed into this input element, function is called
$('#greet') -> will find element by id=greet
$('#greet').text('Hello ' + $('#name').val()) -> text of element with id greet is changed with Hello + whatever is entered in input 
*/

$(function(){
    $('#name').keyup(function(){
        $('#greet').text('Hello ' + $('#name').val())
    })
});
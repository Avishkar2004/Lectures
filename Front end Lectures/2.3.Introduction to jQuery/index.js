
$(function(){
    $('p').append(" append")
    $('p').prepend('prepend ')
    $('p').after('Hello i am after')
    $('p').before('Hello i am before')
    $('<h5>RCB</h5>').replaceAll('h5')

    //css methods start.
    $('p').css('color','red')
    $('h5').css('color','red')
    $('#myId').css('color','red')
    $('#myId').css({'color':'black','background-color':'pink'})
    $('.myClass').css('color','black')
    $('.myClass').css({'color':'black','background-color':'orange'})

    //add some class from css file.
    $('#myId').addClass('jyoti')
    $('.my').addClass('avishkar')

    $('#myId').mouseenter(
        function(){
            $(this).css('background-color','cyan')
        }
    )
    $('#myId').mouseleave(
        function(){
            $(this).css('background-color','red')
        }
    )
    
    $('.myClass').mouseenter(
        function(){
            $(this).css('background-color','cyan')
        }
    )    
    $('.myClass').mouseleave(
        function(){
            $(this).css('background-color','tomato')
        }
    )  
    $('#myInput').keydown(
        function(){
            $(this).css('background-color','cyan')
        }
    )
    $('#myInput').keyup(
        function(){
            $(this).css('background-color','white')
        }
    )
    $('#myClick').click(
        function(){
            $(this).css('background-color','purple')
        }
    )
    $('#myDblclick').dblclick(
        function(){
            $(this).css('background-color','salmon')
        }
    )
    $('#myClick').click(
        function(){
            $('h2').css('background-color','purple')
        }
    )
    $('#myDblclick').dblclick(
        function(){
            $('h2').css('background-color','salmon')
        }
    )
    $('#myjyoti').hover(
        function () {
        $('h4').css('background-color', 'aqua')
        }
    )
    $('#myjyoti').focusout(
        function () {
        $('h4').css('background-color', 'red')
        }
    )
    $('#myAvishkar').hover(
        function () {
        $('h1').css('background-color', 'red')
        }
    )
})


// 2. $(function () {
//     $('p').append(' avishkar');
//     $('p').prepend('jyoti ');
//     $('p').before('I am before');
//     $('p').after('I am after');
//     $('<h1>England</h1>').replaceAll('h1')

//     //css method start.
//     $('p').css('color', 'red')
//     $('h1').css('color', 'blue')
//     $('$myId').css({ 'background-color': 'orange', 'font-size': '30px' })
//     $('.myClass').css({ 'background-color': 'orange', 'font-size': '30px' })
//     $('#myId').addClass('jyoti')
//     $('.myClass').addClass('avishkar')

//     $('#myId').mouseenter(
//         function () {
//             $(this).css('background-color', 'purple')
//         }
//     )
//     $('#myId').mouseleave(
//         function () {
//             $(this).css('background-color', 'tomato')
//         }
//     )

//     $('.myClass').mouseenter(
//         function () {
//             $(this).css('background-color', 'yellow')
//         }
//     )
//     $('.myClass').mouseleave(
//         function () {
//             $(this).css('background-color', 'cyan')
//         }
//     )
//     $('#myInput').keydown(
//         function () {
//             $(this).css('background-color', 'red')
//         }
//     )
//     $('#myInput').keyup(
//         function () {
//             $(this).css('background-color', 'purple')
//         }
//     )
//     $('#myClick').click(
//         function () {
//             $('h2').css('background-color', 'pink')
//         }
//     )
//     $('#myDblclick').dblclick(
//         function () {
//             $('h2').css('background-color', 'blueviolet')
//         }
//     )

//     $('#myClass').focusout(
//         function () {
//             $('h3').css('background-color', 'purple')
//         }
//     )
//     $('#myjyoti').hover(
//         function () {
//             $('h4').css('background-color', 'aqua')
//         }
//     )
// })


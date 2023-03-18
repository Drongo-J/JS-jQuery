// $(document).ready(function () {
//     $("h1").hide();

//     $("#mypage").click(function () {
//         $(this).hide('1s');
//         $("h1").show();
//         // $(".pages").toggle();

//     });
// });

// $(document).ready(function () {

// $(".pages").click(function(){
//     $(this).css('color','#00bfff');
// });

// let isClicked = false;
// $(".pages").dblclick(function(){
//     if (!isClicked){
//         $(this).css('font-size','4em');
//         $(this).css('color','red');
//     }
//     else{
//         $(this).css('font-size','1em');
//         $(this).css('color','blue');  
//     }
//     isClicked = !isClicked;
// });

// $("p").mouseenter(function () {
//     $(this).css('color',"red");
//     $(this).css('transition','1s');
// });
// $("p").mouseleave(function () {
//     $(this).css('color',"green");
//     $(this).css('transition','1s');
// });
// $('input').css("outline", "none");

// $('input').focus(function(){
//     $(this).css("border", "2px solid #00bfff");
//     $(this).css("transition", "1s");
// });

// $('input').blur(function(){
//     $(this).css("border", "2px solid red");
//     $(this).css("transition", "1s");
// });

// $('input').keydown(function(){
//     $(this).css("border", "2px solid orange");
// });

// $('input').keyup(function(){
//     $(this).css("border", "2px solid #00bfff");
// });
// });


let content = '';
let names = ["Kamran Eliyev", "Omer Haciyev", "Muradova Lale", "Cavid Mansumov", "Eliyev Eli"];

for (let i = 0; i < names.length; i++) {
    content += `
        <div style='top:${i * 100}px' class='notification-success'>
            <div>
                <img src='images/1.jpg' />
            </div>        
            <div class='rectangle'>
                <h2>
                    ${names[i]}
                </h2>
                <p>Do you want to goo see a movie tonight?</p>
            </div>
        </div>
    `;
}

$(document).ready(function () {
    $('#div1').html(content);
});
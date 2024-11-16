//Page start fom the home at reload
//$('html, body').animate({scrollTop:0}, "slow", "swing");

//Add effect to the active section when clicked
$(document).ready(function(){
    $('ul #nav-link').on('click', function(){
        $('ul #nav-link').removeClass("active");
        $(this).addClass("active");
    });
});

//Navigation button

$('.navBtn').on('click', function(){
    const MenuList = document.getElementById('navmenu');
    
})


$(".btn").on('click', function(){
    const answer = prompt('Do you want to proceed to order page?')
    if (answer === 'yes'){
        $(document).scrollTop(100)
    }
});
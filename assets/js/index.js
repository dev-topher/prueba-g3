const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
   
$(document).ready(function(){
    $("#form__button").on("click",function(){
    document.getElementById("form__button").innerHTML = alert(" El mensaje fue enviado correctamente. Muchas gracias por su tiempo. ")
    });

    $(".nav-link").on("click",function(){  
        $(this).css({
        "color": "red",
        });
    });  
});

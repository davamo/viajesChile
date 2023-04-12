/*habilitar carousel*/
const myCarouselElement = document.querySelector('#my-carousel');

/*habilitar los tooltip de bootstrap*/
$( document ).ready(function() {
    $('[data-bs-toggle="tooltip"]').tooltip();
});

/* Incluir un tooltip "Enviar por correo" al botón de correo */
$(document).ready(function () {
  $("#btnCorreo").on("click", function (event) {
    event.preventDefault();
    alert("Correo enviado");
  })

/*Incluir un tooltip "Enviar por correo" al botón de correo*/
  $("h4").dblclick(function () {
    $(this).css({
      "color": "red"
    })
  })
  
/* toggle Desaparcer/Aparecer el contenido en todas las tarjetas*/
  $(".card-text").click(function () {
    $(this).next().toggle("slow")
  })
})


$(function() { 
  // habilitar todos los tooltips
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
  });
  
  // alerta  Evento
  $("#enviarCorreo").click(function() {
    alert("El correo fue enviado correctamente..");
  })

  // pintar a rojo  en evento doble click textos de "INGREDIENTES" y "PREPARACIÓN"
  $(".food-preparation h3").on( "dblclick", function( ) {
    $(this).toggleClass("red"); 
  });

  // ocultar contenido de cards
  $(".card h5").on( "click", function( ) {
    $(".card p").toggle(); 
  });
});
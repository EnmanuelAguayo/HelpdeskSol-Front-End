console.log('test');

function init(){

}

$(document).ready(function(){

  
  
});

$(document).on('click', '#btnSoporte', function(){
    var tituloAcceso = document.getElementById('tituloAcceso');
    var btnSoporte = document.getElementById('btnSoporte');
    var rol = document.getElementById('rol_id');

    if( rol.value == 1 )
    {
      tituloAcceso.innerHTML = "<b style='color: blue;'>Acceso Soporte</b>";
      btnSoporte.innerHTML = "Acceso Usuario";
      rol.value = 2;
    }else{
      tituloAcceso.innerHTML = "<b>Acceso Usuario</b>";
      btnSoporte.innerHTML = "Acceso Soporte";
      rol.value = 1;
    }

});



init();
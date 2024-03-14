$(document).ready(function(){

  $.post('../../controllers/SelectTipoControllers.php?op=selectTipoCrear', function(data, status){
    if(data == 'empty'){
      alerts('', 'info', 'Primero debe crear un tipo de equipo o activar uno que ya haya creado', 'Ok', 'ConsultarTipoEquipo');
    }else{
      document.getElementById('tipo_equipo').innerHTML = data;
    }
  })
})


function init(){
  $("#form_equipo").on('submit', function(e){
    insertar(e);
  });
  $("input[name='uploadFile']").change(uploadFile);
  $("#trashFile").on('click', trashFile);
}

function insertar(e){
  var tipo_equipo = document.getElementById('tipo_equipo').value;
  var nom_equipo = document.getElementById('nom_equipo').value;
  var desc_equipo = document.getElementById('desc_equipo').value;
  var img_equipo = document.getElementById('uploadFile').files[0];
  var estado = document.getElementById('estado').value;
  
  if(tipo_equipo != "" && nom_equipo != "" && desc_equipo != "" && img_equipo['name'] != ""){
    e.preventDefault();
    var data = new FormData();
    data.append('tipo_equipo', tipo_equipo);
    data.append('nom_equipo', nom_equipo);
    data.append('desc_equipo', desc_equipo);
    data.append('img_equipo', img_equipo);
    data.append('estado', estado);
    
    $.ajax({
      url: '../../controllers/EquipoControllers.php?op=insertar',
      method: 'post',
      data: data,
      contentType: false,
      processData: false,
      dataType: 'json',
      success: function(response){
    
        if(response['title'] == 'Correcto'){
          document.getElementById('nom_equipo').value = "";
          document.getElementById('desc_equipo').value = "";
          document.getElementById('uploadFile').value = "";
          document.getElementById('prevFile').src = "../../public/adminlte.3.2.0/img/monitor.png";
          document.getElementsByClassName('trashFile')[0].style.display = 'none';

        }
        alerts(response['title'], response['icon'], response['text'], response['confirmButtonText'], response['redirect']);
      }
    })
  } 
}

function uploadFile(){
  var imagen = this.files[0];

    if(imagen['type'] != "image/jpeg" && imagen['type'] != "image/png"){
      
      $("input[name='uploadFile']").val("");

      alerts('Error', 'error', 'Formato de imagen debe estar en JPG o PNG', 'Ok', '');

    }else if(imagen['size'] > 5000000){

      $("input[name='uploadFile']").val("");

      alerts('Error', 'error', 'Tamaño de imagen máximo 4.5MB', 'Ok', '');
      
    }else{
      var datosImagen = new FileReader();
      datosImagen.readAsDataURL(imagen);

      $(datosImagen).on('load', function(event){
        var rutaImagen = event.target.result;

        document.getElementById("prevFile").src = rutaImagen;
        document.getElementsByClassName('trashFile')[0].style.display = 'inline';
      })
    }
}
function trashFile(){
  document.getElementById('uploadFile').value = "";
  document.getElementById('prevFile').src = "../../public/adminlte.3.2.0/img/monitor.png";
  document.getElementsByClassName('trashFile')[0].style.display = 'none';
}

init();
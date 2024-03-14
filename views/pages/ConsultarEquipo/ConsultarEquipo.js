$(document).ready(function(){
  $.post('../../controllers/SelectTipoControllers.php?op=selectTipoConsultar', function(data, status){
    //if(data == 'empty'){
      //alerts('', 'info', 'Primero debe crear un tipo de equipo o activar uno que ya haya creado', 'Ok', 'ConsultarTipoEquipo');
    //}else{
      document.getElementById('tipo_equipo').innerHTML = data;
    //}
  })

  const ruta = window.location.pathname;
  const page = ruta.substring(ruta.lastIndexOf('/') + 1);
  
  if(page == 'ConsultarEquipo'){
    document.getElementById('form_container').style.display = 'none';
    document.getElementById('uploadFile').required = false;
    document.querySelectorAll('.fa-paperclip')[0].textContent = ' Reemplazar foto del equipo';
    document.querySelector('.btn-primary').textContent = 'Actualizar';
  }

  listar();

})

function init(){
  $(document).on('click', '.btnEditar', mostrar);

  $("#form_equipo").on('submit', function(e){
    actualizar(e);
  })
  $("#uploadFile").change(uploadFile);
  $("#trashFile").on('click', trashFile);
}

function listar(){

  $.ajax({
    url: '../../controllers/EquipoControllers.php?op=listar',
    method: 'post',
    contentType: false,
    processData: false,
    dataType: 'json',
    success: function(response){

      if(response == 'vacio'){
        document.getElementById('table_container').style.display = 'none';
        document.getElementById('redirect').style.display = 'block';
      }else{
        $('#listar_equipo').DataTable({
          "paging": true,
          "lengthChange": false,
          "searching": true,
          "ordering": true,
          "info": true,
          "autoWidth": false,
          "responsive": true,
          ajax:{
            url: '../../controllers/EquipoControllers.php?op=listar',
            method: 'POST'
          }
        });
      }
    }
  })

}
function mostrar(){
  document.getElementById('table_container').style.display = 'none';
  document.getElementById('form_container').style.display = 'block';
  var id_mostrar = $(this).attr('id');

  var data = new FormData();
  data.append("id_mostrar", id_mostrar);

  $.ajax({
    url: '../../controllers/EquipoControllers.php?op=mostrar',
    method: 'post',
    data: data,
    contentType: false,
    processData: false,
    dataType: 'json',
    success: function(response){
  
        $('#item').val(response['device_id']);
        $('#tipo_equipo').val(response['device_type_id']);
        $('#nom_equipo').val(response['device_name']);
        $('#desc_equipo').val(response['device_description']);
        document.getElementById('prevFile').src = '../../public/adminlte.3.2.0/img/' + response['device_photo'];
        $('#estado').val(response['estado']);
        $('#fotoActual').val(response['device_photo']);

    }
  })
}
function actualizar(e){

  var item = document.getElementById('item').value; 
  var tipo_equipo = document.getElementById('tipo_equipo').value;
  var nom_equipo = document.getElementById('nom_equipo').value;
  var desc_equipo = document.getElementById('desc_equipo').value;
  var fotoActual = document.getElementById('fotoActual').value;
  var fotoNueva = document.getElementById('uploadFile').files[0];
  var estado = document.getElementById('estado').value;

  
  if(item != "" && tipo_equipo != "" && nom_equipo != "" && desc_equipo != ""){

    e.preventDefault();

    var data = new FormData();
    data.append('item', item);
    data.append('tipo_equipo', tipo_equipo);
    data.append('nom_equipo', nom_equipo);
    data.append('desc_equipo', desc_equipo);
    data.append('fotoActual', fotoActual);
    data.append('fotoNueva', fotoNueva);
    data.append('estado', estado);

    $.ajax({
      url: '../../controllers/EquipoControllers.php?op=actualizar',
      method: 'post',
      data: data,
      contentType: false,
      processData: false,
      dataType: 'json',
      success: function(response){
          
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
  document.getElementById('prevFile').src = "../../public/adminlte.3.2.0/img/" + document.getElementById('fotoActual').value;
  document.getElementsByClassName('trashFile')[0].style.display = 'none';
}
init();
$(document).ready(function(){

  const ruta = window.location.pathname;
  const page = ruta.substring(ruta.lastIndexOf('/') + 1);
  
  if(page == 'ConsultarTipoEquipo'){
    document.getElementById('form_container').style.display = 'none';
    document.querySelector('.btn-primary').textContent = 'Actualizar';
  }

  listar();

})

function init(){
  $(document).on('click', '.btnEditar', mostrar);
  $("#form_tipo_equipo").on('submit', function(e){
    actualizar(e);
  })
}

function listar(){

  $.ajax({
    url: '../../controllers/TipoEquipoControllers.php?op=listar',
    method: 'post',
    contentType: false,
    processData: false,
    dataType: 'json',
    success: function(response){

      if(response == 'vacio'){
        document.getElementById('table_container').style.display = 'none';
        document.getElementById('redirect').style.display = 'block';
      }else{
        $('#listar_tipo_equipo').DataTable({
          "paging": true,
          "lengthChange": false,
          "searching": true,
          "ordering": true,
          "info": true,
          "autoWidth": false,
          "responsive": true,
          ajax:{
            url: '../../controllers/TipoEquipoControllers.php?op=listar',
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
    url: '../../controllers/TipoEquipoControllers.php?op=mostrar',
    method: 'post',
    data: data,
    contentType: false,
    processData: false,
    dataType: 'json',
    success: function(response){
      
        $('#nom_tipo_equipo').val(response['device_type_name']);
        $('#item').val(response['device_type_id']);
        $('#estado').val(response['estado']);

    }
  })
}
function actualizar(e){
  var item = document.getElementById('item').value;
  var nom_tipo_equipo = document.getElementById('nom_tipo_equipo').value;
  var estado = document.getElementById('estado').value;

  if(nom_tipo_equipo != ""){
    e.preventDefault();
  
    var data = new FormData();
    data.append('item', item);
    data.append('nom_tipo_equipo', nom_tipo_equipo);
    data.append('estado', estado);
  
    $.ajax({
        url: '../../controllers/TipoEquipoControllers.php?op=actualizar',
        method: 'post',
        data: data,
        contentType: false,
        processData: false,
        dataType: 'json',
        success: function(response){
  
          alerts(response['title'], response['icon'], response['text'], response['confirmButtonText'], response['redirect']);

        }
    })
  }else{
    e.preventDefault();
    alerts('Datos incompletos', 'info', 'Debe completar todos los datos', 'Ok');
  }
}
function eliminar(){
  var id_eliminar = $(this).attr("id");

  var data = new FormData();
  data.append('id_eliminar', id_eliminar);

    Swal.fire({
      title: 'Estas seguro de eliminar el registro?',
      showDenyButton: true,
      confirmButtonText: 'Si',
      denyButtonText: 'Cancelar',
      allowOutsideClick: false
    }).then((result) => {
      
      if (result.isConfirmed) {

        $.ajax({
          url: '../../controllers/TipoEquipoControllers.php?op=eliminar',
          method: 'post',
          data: data,
          contentType: false,
          processData: false,
          dataType: 'json',
          success: function(response){
            alerts(response['title'], response['icon'], response['text'], response['confirmButtonText'], response['redirect']);
          }
        })
      } else if (result.isDenied) {
        alerts('', 'info', 'Entendido hemos cancelado la operación', 'Ok', '');
      }
    })
}

init();

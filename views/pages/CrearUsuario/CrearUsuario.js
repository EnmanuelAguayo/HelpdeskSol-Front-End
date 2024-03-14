$(document).ready(function(){
  $.post("../../controllers/SelectTipoControllers.php?op=selectPerfilUser", function(data, status){
    document.getElementById('typeUser').innerHTML = data;
  })

  listarEquipoUser();
  listarEquiposAsignados();
})

function init(){
  $("input[name='uploadFile']").change(uploadFile);
  $("#trashFile").on('click', trashFile);
  $(document).on('click', '.btnAsignar', asignarEquipo);

}

function asignarEquipo(e){
  let elementoHijo = e.target.parentNode.parentNode.children[0].firstChild.innerHTML;
  let deviceItem = $(this).attr('id');
  let data = new FormData();
  data.append('deviceItem', deviceItem);


  Swal.fire({
    title: 'Asignar Equipo',
    icon: 'question',
    html: '¿Está seguro de asignar ' + '<strong>' + elementoHijo + '?' + '</strong>',
    confirmButtonText: 'Ok',
    showCancelButton: true,
    cancelButtonText: 'Volver',
    allowOutsideClick: false,
  }).then((result) => {
    if(result.isConfirmed){
      console.log('ok')
    }
  })
  
  
}

function listarEquipoUser(){
  

  $.ajax({
    url: "../../controllers/EquipoUserControllers.php?op=listarEquipoUser",
    method: "post",
    contentType: false,
    processData: false,
    dataType: 'json',
    success: function(response){
      if(response == 'vacio'){

      }else{
        $("#listar_equipo").DataTable({
          "paging": true,
          "lengthChange": false,
          "searching": true,
          "ordering": true,
          "info": true,
          "autoWidth": false,
          "responsive": true,
          ajax:{
            url: '../../controllers/EquipoUserControllers.php?op=listarEquipoUser',
            method: 'post'
          }
        })

      }
    }
  })

}

function listarEquiposAsignados(){
  let refuser = document.getElementById('refuser').value;
  let data = new FormData();
  data.append("refuser", refuser);
  const contenido = document.getElementById('contenedor-dispositivos');

    $.ajax({
      url: "../../controllers/EquipoUserControllers.php?op=listarEquiposAsignados",
      method: "POST",
      data: data,
      contentType: false,
      processData: false,
      success: function(response){
        
        if(response){
          contenido.innerHTML = response;
        }
      }
    })
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

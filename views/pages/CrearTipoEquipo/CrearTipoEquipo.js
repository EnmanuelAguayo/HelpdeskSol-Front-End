function init(){
  $("#form_tipo_equipo").on("submit", function(e){
    insertar(e);
  });
}

function insertar(e){
  var nom_tipo_equipo = document.getElementById('nom_tipo_equipo').value;
  var estado = document.getElementById('estado').value;

  if(nom_tipo_equipo != ""){
    e.preventDefault();
    var data = new FormData();
    data.append("nom_tipo_equipo", nom_tipo_equipo);
    data.append("estado", estado);

    $.ajax({
      url: '../../controllers/TipoEquipoControllers.php?op=insertar',
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

init();
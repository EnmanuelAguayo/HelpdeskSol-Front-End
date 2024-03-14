$(document).ready(function(){

  const ruta = window.location.pathname;
  const page = ruta.substring(ruta.lastIndexOf('/') + 1);

  if(page == 'ConsultarPerfiles'){
    document.getElementById('form_container').style.display = 'none';
    document.querySelector('.btn-primary').textContent = 'Actualizar';
  }
  listar();
})


function init(){
  $(document).on('click', '.btnEditar', mostrar);

  const formulario = document.getElementById('form_perfil');
  formulario.addEventListener('submit', actualizar);

  $(document).on('click', '.form-check-input', cambiarCheck);

}

function listar(){
  $.ajax({
    url: '../../controllers/PerfilesControllers.php?op=listar',
    method: 'post',
    contentType: false,
    processData: false,
    dataType: 'json',
    success: function(response){
      if(response == 'vacio'){
        document.getElementById('table_container').style.display = 'none';
        document.getElementById('redirect').style.display = 'block';
      }else{
        $('#listar_perfiles').DataTable({
          "paging": true,
          "lengthChange": false,
          "searching": true,
          "ordering": true,
          "info": true,
          "autoWitdh": false,
          "responsive": true,
          ajax:{
            url: '../../controllers/PerfilesControllers.php?op=listar',
            method: 'POST'
          }
        })
      }
    }
  })

}

function mostrar(){
  document.getElementById('table_container').style.display = "none";
  document.getElementById('form_container').style.display = "block";

  let id_mostrar = $(this).attr('id');
  let data = new FormData();
  data.append("id_mostrar", id_mostrar);

  $.ajax({
    url: '../../controllers/PerfilesControllers.php?op=mostrar',
    method: 'post',
    data: data,
    contentType: false,
    processData: false,
    dataType: 'json',
    success: function(response){

      const profile_id = response['profile_id'];
      const nom_perfil = response['profile_name'];
      const reportes = response['reportes'];
      const informar_problema = response['informar_problema'];
      const consultar_incidencias = response['consultar_incidencias'];
      const soluciones_populares = response['soluciones_populares'];
      const crear_usuarios = response['crear_usuarios'];
      const consultar_usuarios = response['consultar_usuarios'];
      const crear_perfiles = response['crear_perfiles'];
      const consultar_perfiles = response['consultar_perfiles'];
      const crear_equipos = response['crear_equipos'];
      const consultar_equipos = response['consultar_equipos'];
      const crear_tipo_equipo = response['crear_tipo_equipo'];
      const consultar_tipo_equipo = response['consultar_tipo_equipo'];
      const crear_servicios = response['crear_servicios'];
      const consultar_servicios = response['consultar_servicios'];
      const crear_categorias = response['crear_categorias'];
      const consultar_categorias = response['consultar_categorias'];
      const crear_ramas = response['crear_ramas'];
      const consultar_ramas = response['consultar_ramas'];
      const estado = response['estado'];
      
      document.getElementById('item').value = profile_id;
      document.getElementById('nom_perfil').value = nom_perfil;

      if(reportes == 1){
        document.getElementById('check_reportes').value = reportes;
        document.getElementById('check_reportes').checked = true;
      }

      if(informar_problema == 1){
        document.getElementById('check_informar_problema').value = informar_problema;
        document.getElementById('check_informar_problema').checked = true;
      }

      if(consultar_incidencias == 1){
        document.getElementById('check_consultar_incidencias').value = consultar_incidencias;
        document.getElementById('check_consultar_incidencias').checked = true;
      }

      if(soluciones_populares == 1){
        document.getElementById('check_soluciones_populares').value = soluciones_populares;
        document.getElementById('check_soluciones_populares').checked = true;
      }

      if(crear_usuarios == 1){
        document.getElementById('check_crear_usuarios').value = crear_usuarios;
        document.getElementById('check_crear_usuarios').checked = true;
      }

      if(consultar_usuarios == 1){
        document.getElementById('check_consultar_usuarios').value = consultar_usuarios;
        document.getElementById('check_consultar_usuarios').checked = true;
      }

      if(crear_perfiles == 1){
        document.getElementById('check_crear_perfiles').value = crear_perfiles;
        document.getElementById('check_crear_perfiles').checked = true;
      }

      if(consultar_perfiles == 1){
        document.getElementById('check_consultar_perfiles').value = consultar_perfiles;
        document.getElementById('check_consultar_perfiles').checked = true;
      }

      if(crear_equipos == 1){
        document.getElementById('check_crear_equipos').value = crear_equipos;
        document.getElementById('check_crear_equipos').checked = true;
      }

      if(consultar_equipos == 1){
        document.getElementById('check_consultar_equipos').value = consultar_equipos;
        document.getElementById('check_consultar_equipos').checked = true;
      }

      if(crear_tipo_equipo == 1){
        document.getElementById('check_crear_tipo_equipo').value = crear_tipo_equipo;
        document.getElementById('check_crear_tipo_equipo').checked = true;
      }

      if(consultar_tipo_equipo == 1){
        document.getElementById('check_consultar_tipo_equipo').value = consultar_tipo_equipo;
        document.getElementById('check_consultar_tipo_equipo').checked = true;
      }

      if(crear_servicios == 1){
        document.getElementById('check_crear_servicios').value = crear_servicios;
        document.getElementById('check_crear_servicios').checked = true;
      }

      if(consultar_servicios == 1){
        document.getElementById('check_consultar_servicios').value = consultar_servicios;
        document.getElementById('check_consultar_servicios').checked = true;
      }

      if(crear_categorias == 1){
        document.getElementById('check_crear_categorias').value = crear_categorias;
        document.getElementById('check_crear_categorias').checked = true;
      }

      if(consultar_categorias == 1){
        document.getElementById('check_consultar_categorias').value = consultar_categorias;
        document.getElementById('check_consultar_categorias').checked = true;
      }

      if(crear_ramas == 1){
        document.getElementById('check_crear_ramas').value = crear_ramas;
        document.getElementById('check_crear_ramas').checked = true;
      }

      if(consultar_ramas == 1){
        document.getElementById('check_consultar_ramas').value = consultar_ramas;
        document.getElementById('check_consultar_ramas').checked = true;
      }

      document.getElementById('estado').value = estado;
      
    }
  })


}

function actualizar(e){
  /*
    La funcion checkList funcion corrobora si por lo menos un elemento fue 
    marcado antes del envio de informacion a la
  */
  var response = checkList();

  if(response == 0){
    e.preventDefault();
    alerts('Atención', 'info', 'Antes de guardar por lo menos seleccione un permiso', 'Ok', '');
  }else{
    /* recibir la informacion */
    var checkInput = document.getElementById('nom_perfil').value;
    
    if(checkInput != ""){
      e.preventDefault();
      var data = getInfo();
      $.ajax({
            url: '../../controllers/PerfilesControllers.php?op=actualizar',
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

}

function checkList(){
  var contar = 0;
  var element = document.getElementsByClassName('form-check-input');

  for(let index = 0; index < element.length; index++){
    if(element[index].checked == true){
      contar += 1;
    }
  }

  return contar;

}

function getInfo(){
  var element = document.getElementsByClassName('form-check-input');
  var item = document.getElementById('item').value;
  var nom_perfil = document.getElementById('nom_perfil').value;
  var estado = document.getElementById('estado').value;
  var data = new FormData();

  data.append("item", item);
  data.append("nom_perfil", nom_perfil);

  for(let index = 0; index < element.length; index++){
   data.append(element[index].name, element[index].value);
  }

  data.append('estado', estado);
  
  return data;
}

function cambiarCheck(e){
  
  var element = e.target;

  if(element.value == 0){
    element.value = 1;
  }else{
    element.value = 0;
  }
  
}

init();
$(document).ready(function(){

  
  
  listar_Aside();

  
})

function listar_Aside(){
  const profile_id = document.getElementById("profile_id").value;

  data = new FormData();
  data.append("profile_id", profile_id);

    $.ajax({
      url: "../../controllers/PerfilesControllers.php?op=listar_Aside",
      method: "post",
      contentType: false,
      processData: false,
      data: data,
      dataType: "json",
      success: function(response){
      
          const reportes = response['data']['reportes'];
          const informar_problema = response['data']['informar_problema'];
          const consultar_incidencias = response['data']['consultar_incidencias'];
          const soluciones_populares = response['data']['soluciones_populares'];
          const crear_usuarios = response['data']['crear_usuarios'];
          const consultar_usuarios = response['data']['consultar_usuarios'];
          const crear_perfiles = response['data']['crear_perfiles'];
          const consultar_perfiles = response['data']['consultar_perfiles'];
          const crear_equipos = response['data']['crear_equipos'];
          const consultar_equipos = response['data']['consultar_equipos'];
          const crear_tipo_equipo = response['data']['crear_tipo_equipo'];
          const consultar_tipo_equipo = response['data']['consultar_tipo_equipo'];
          const crear_servicios = response['data']['crear_servicios'];
          const consultar_servicios = response['data']['consultar_servicios'];
          const crear_categorias = response['data']['crear_categorias'];
          const consultar_categorias = response['data']['consultar_categorias'];
          const crear_ramas = response['data']['crear_ramas'];
          const consultar_ramas = response['data']['consultar_ramas'];
          
          //reportes
          if(reportes == 0){
            document.getElementById("content_reportes").style.display = "none";
          } 

          //tickets
          if(informar_problema == 0 && consultar_incidencias == 0){
            document.getElementById("content_tickets").style.display = "none";
          }

          if(informar_problema == 0){
            document.getElementById("informar_problema").style.display = "none";
          }

          if(consultar_incidencias == 0){
            document.getElementById("consultar_incidencias").style.display = "none";
          }

          //soluciones populares
          if(soluciones_populares == 0){
            document.getElementById("soluciones_populares").style.display = "none";
          }

          //usuarios
          if(crear_usuarios == 0 && consultar_usuarios == 0){
            document.getElementById('content_usuarios').style.display = "none";
          }

          if(crear_usuarios == 0){
            document.getElementById("crear_usuarios").style.display = "none";
          }

          if(consultar_usuarios == 0){
            document.getElementById("consultar_usuarios").style.display = "none";
          }

          //perfiles
          if(crear_perfiles == 0 && consultar_perfiles == 0){
            document.getElementById('content_perfiles').style.display = "none";
          }

          if(crear_perfiles == 0){
            document.getElementById("crear_perfiles").style.display = "none";
          }

          if(consultar_perfiles == 0){
            document.getElementById("consultar_perfiles").style.display = "none";
          }

          //equipos
          if(crear_equipos == 0 && consultar_equipos == 0 && crear_tipo_equipo == 0 && consultar_tipo_equipo == 0){
            document.getElementById('content_equipos').style.display = "none";
          }

          if(crear_equipos == 0){
            document.getElementById("crear_equipos").style.display = "none";
          }

          if(consultar_equipos == 0){
            document.getElementById("consultar_equipos").style.display = "none";
          }

          if(crear_tipo_equipo == 0){
            document.getElementById("crear_tipo_equipo").style.display = "none";
          }

          if(consultar_tipo_equipo == 0){
            document.getElementById("consultar_tipo_equipo").style.display = "none";
          }

          //ramas y categorias
          if(crear_servicios == 0 && consultar_servicios == 0 && crear_categorias == 0 && consultar_categorias == 0 && crear_ramas == 0 && consultar_ramas == 0){
            document.getElementById('content_ramas_categorias').style.display = "none";
          }

          if(crear_servicios == 0){
            document.getElementById("crear_servicios").style.display = "none";
          }

          if(consultar_servicios == 0){
            document.getElementById("consultar_servicios").style.display = "none";
          }

          if(crear_categorias == 0){
            document.getElementById("crear_categorias").style.display = "none";
          }

          if(consultar_categorias == 0){
            document.getElementById("consultar_categorias").style.display = "none";
          }

          if(crear_ramas == 0){
            document.getElementById("crear_ramas").style.display = "none";
          }

          if(consultar_ramas == 0){
            document.getElementById("consultar_ramas").style.display = "none";
          }


      }
    })
}



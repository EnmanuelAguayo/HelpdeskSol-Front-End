$(document).ready(function(){

  
})


function init(){
  
  const formulario = document.getElementById('form_perfil');
  formulario.addEventListener('submit', insertar);


  $(document).on('click', '.form-check-input', cambiarCheck);
}

function insertar(e){
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
            url: '../../controllers/PerfilesControllers.php?op=insertar',
            method: 'post',
            data: data,
            contentType: false,
            processData: false,
            dataType: 'json',
            success: function(response){
              alerts(response['title'], response['icon'], response['text'], response['confirmButtonText'], response['redirect']);
              limpiar();
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

function limpiar(){
  document.getElementById('nom_perfil').value = '';
  var element = document.getElementsByClassName('form-check-input');

  for(let index = 0; index < element.length; index++){
    element[index].checked = false;
  }
}

function getInfo(){
  var element = document.getElementsByClassName('form-check-input');
  var nom_perfil = document.getElementById('nom_perfil').value;
  var estado = document.getElementById('estado').value;
  var data = new FormData();

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
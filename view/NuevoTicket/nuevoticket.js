$(document).ready(function(){
   tinyRender();

  $.post("../../controller/CategoriaController.php?op=combo", function(data, status){
      document.getElementById('cat_id').innerHTML = data;
  });


});

function init()
{
  $("#ticket_form").on("submit", function(e){
    guardar_editar(e);
  });
}

function guardar_editar(e)
{
  var notes = document.getElementById('notes').value;
  var titulo = document.getElementById('tick_titulo').value;

  if( titulo != "" && notes != "")
  {
    e.preventDefault();
    var formData = new FormData();
    formData.append('usu_id', document.getElementById('usu_id').value);
    formData.append('cat_id', document.getElementById('cat_id').value);
    formData.append('tick_titulo', document.getElementById('tick_titulo').value);
    formData.append('tick_descripcion', document.getElementById('notes').value);  
  
      $.ajax({
              url: "../../controller/TicketController.php?op=insert",
              method: 'post',
              data: formData,
              contentType: false,
              processData: false,
              success: function(response){
                  
                document.getElementById('tick_titulo').value = "";

                $(function() {
                  var Toast = Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 3000
                  });
                    toastr.success('El registro se ha guardado correctamente')
                });
              }
      });
    }else {
      e.preventDefault();
      $(function() {
        var Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000
        });
          toastr.error('Complete todos los datos requeridos')
      });
      
  }
}

function tinyRender(){
  var tiny = tinymce.init({
    selector: '#tick_descripcion',
    plugins: 'link lists table image media fullscreen',
    toolbar: 'bold underline fontfamily forecolor fontsize align numlist bullist table link image media fullscreen',
    toolbar_mode: 'floating',
    menubar: false,
    
    setup: function (editor) {
 //    editor.on('init', function (e) {
 //      editor.setContent(infoWysiwyg);
 //      document.getElementById('notes').value = editor.getContent('#tick_descripcion');
 //    });
      editor.on('change', function (e){
        document.getElementById('notes').value = editor.getContent('#tick_descripcion');
      });
      editor.on('submit', function (e){
        editor.setContent('');
      });
    }
  });
  return tiny;
}
 
init();
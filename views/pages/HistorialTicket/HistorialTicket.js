$(document).ready(function(){
  tinyRender();
 });



 function tinyRender(){
  var tiny = tinymce.init({
    selector: '#respuesta_incidencia',
    plugins: 'link lists table image media fullscreen',
    toolbar: 'bold underline fontfamily forecolor fontsize align numlist bullist table link image media fullscreen',
    toolbar_mode: 'floating',
    menubar: false,
    
    setup: function (editor) {
 //    editor.on('init', function (e) {
 //      editor.setContent(infoWysiwyg);
 //      document.getElementById('notes').value = editor.getContent('#respuesta_incidencia');
 //    });
      editor.on('change', function (e){
        document.getElementById('notes').value = editor.getContent('#respuesta_incidencia');
      });
      editor.on('submit', function (e){
        editor.setContent('');
      });
    }
  });
  return tiny;
}
$(document).ready(function(){
    dataTableRender();
});

function dataTableRender(){
 
    $("#dtConsIncidencias").DataTable({
      "responsive": true, "lengthChange": false, "autoWidth": false,
      "buttons": ["copy", "csv", "excel", "pdf", "print", "colvis"]
    }).buttons().container().appendTo('#dtConsIncidencias_wrapper .col-md-6:eq(0)');

}


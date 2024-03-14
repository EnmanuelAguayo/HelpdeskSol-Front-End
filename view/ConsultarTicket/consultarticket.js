var data;
var usu_id = document.getElementById('user_idx').value;
var rol_id = document.getElementById('rol_idx').value;
function init(){

}

$(document).ready(function(){

  if ( rol_id == 1 )
  {
    $('#ticket_data').DataTable({
      "paging": true,
      "lengthChange": false,
      "searching": true,
      "ordering": true,
      "info": true,
      "autoWidth": false,
      "responsive": true,
      "buttons": ["copy", "csv", "excel", "pdf", "print", "colvis"],
      ajax:{
        url: '../../controller/TicketController.php?op=listar_ticket_usu',
        data: {usu_id: usu_id},
        method: 'POST'
        
      }
    });
  }else
  {
    $('#ticket_data').DataTable({
      "paging": true,
      "lengthChange": false,
      "searching": true,
      "ordering": true,
      "info": true,
      "autoWidth": false,
      "responsive": true,
      "buttons": ["copy", "csv", "excel", "pdf", "print", "colvis"],
      ajax:{
        url: '../../controller/TicketController.php?op=listar_ticket',
        method: 'POST'
      }
    });
  }

  

  
});

function ver(tick_id){
  console.log(tick_id);
}

init();
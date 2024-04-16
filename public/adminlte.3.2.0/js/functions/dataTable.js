const renderDataTable = (nameDataTable, data) => {
  $("#" + nameDataTable).DataTable({
    data: data,
    columnDefs: [{searchable: false, targets: 1}],
    "paging": true,
    "lengthChange": false,
    "searching": true,
    "ordering": true,
    "info": true,
    "autoWidth": false,
    "responsive": true,
    "buttons": ["copy", "csv", "excel", "pdf", "print", "colvis"],
  }).buttons().container().appendTo('#' + nameDataTable + '_wrapper' + ' .col-md-6:eq(0)');
};





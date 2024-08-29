const mainJs = () => {
  // REQUIRED SCRIPTS
  let rootAdminLte = '';
  let rootFile = 'public/adminlte.3.2.0/plugins/';
  if (window.location.href.split('/')[5] == 'pages'){
    rootAdminLte = '../../../';
  }else {
    rootAdminLte = '../../';
  }

  // DataTables
  if (window.location.href.split("/")[6] == 'incidencias') {
    const jqueryDataTable = document.createElement('script');
    jqueryDataTable.src = rootAdminLte + rootFile + 'datatables/jquery.dataTables.min.js';
    document.body.appendChild(jqueryDataTable);

    const bootstrapDataTable = document.createElement('script');
    bootstrapDataTable.src = rootAdminLte + rootFile + 'datatables-bs4/js/dataTables.bootstrap4.min.js';
    document.body.appendChild(bootstrapDataTable);

    const responsiveDataTable = document.createElement('script');
    responsiveDataTable.src = rootAdminLte + rootFile + 'datatables-responsive/js/dataTables.responsive.min.js';
    document.body.appendChild(responsiveDataTable);

    const responsiveBootstrap = document.createElement('script');
    responsiveBootstrap.src = rootAdminLte + rootFile + 'datatables-responsive/js/responsive.bootstrap4.min.js';
    document.body.appendChild(responsiveBootstrap);

    const buttonsDataTable = document.createElement('script');
    buttonsDataTable.src = rootAdminLte + rootFile + 'datatables-buttons/js/dataTables.buttons.min.js';
    document.body.appendChild(buttonsDataTable);
    
    const buttonsBootstrap = document.createElement('script');
    buttonsBootstrap.src = rootAdminLte + rootFile +'datatables-buttons/js/buttons.bootstrap4.min.js';
    document.body.appendChild(buttonsBootstrap);
    
    const jszipDataTable = document.createElement('script');
    jszipDataTable.src = rootAdminLte + rootFile +'jszip/jszip.min.js';
    document.body.appendChild(jszipDataTable);

    const pdfmakeDataTable = document.createElement('script');
    pdfmakeDataTable.src = rootAdminLte + rootFile +'pdfmake/pdfmake.min.js';
    document.body.appendChild(pdfmakeDataTable);
  
    const pdfmake_vfsDataTable = document.createElement('script');
    pdfmake_vfsDataTable.src = rootAdminLte + rootFile +'pdfmake/vfs_fonts.js';
    document.body.appendChild(pdfmake_vfsDataTable);
    
    const buttonsHtml5 = document.createElement('script');
    buttonsHtml5.src = rootAdminLte + rootFile +'datatables-buttons/js/buttons.html5.min.js';
    document.body.appendChild(buttonsHtml5);

    const buttonsPrint = document.createElement('script');
    buttonsPrint.src = rootAdminLte + rootFile +'datatables-buttons/js/buttons.print.min.js';
    document.body.appendChild(buttonsPrint);
    
    const buttonsColvis = document.createElement('script');
    buttonsColvis.src = rootAdminLte + rootFile +'datatables-buttons/js/buttons.colVis.min.js';
    document.body.appendChild(buttonsColvis);
  };

  


  

}


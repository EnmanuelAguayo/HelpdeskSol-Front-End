const mainJs = async () => {
  // REQUIRED SCRIPTS
  let rootAdminLte = '';
  let rootFile = 'public/adminlte.3.2.0/plugins/';
  if (window.location.href.split('/')[5] == 'pages'){
    rootAdminLte = '../../../';
  }else {
    rootAdminLte = '../../';
  }

  // jQuery
  const jqueryScript = document.createElement('script');
  jqueryScript.src = rootAdminLte + rootFile + 'jquery/jquery.min.js';
  document.body.appendChild(jqueryScript);

  // Bootstrap 4
  const boostrapScript = document.createElement('script');
  boostrapScript.src = rootAdminLte + rootFile + 'bootstrap/js/bootstrap.bundle.min.js';
  document.body.appendChild(boostrapScript);

  // AdminLTE App
  const adminlteScript = document.createElement('script');
  adminlteScript.src = rootAdminLte + 'public/adminlte.3.2.0/js/adminlte.min.js';
  document.body.appendChild(adminlteScript);
  console.log(rootAdminLte + rootFile);

}


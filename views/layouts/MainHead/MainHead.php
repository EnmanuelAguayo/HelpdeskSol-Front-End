  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title><?php echo APP_NAME?></title>

  <!-- Google Font: Source Sans Pro -->
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback">
  <!-- Font Awesome -->
  <link rel="stylesheet" href="<?php echo ROOT_FRAMEWORK_PATH . 'plugins/fontawesome-free/css/all.min.css';?>">
  <!-- SweetAlert2 -->
  <link rel="stylesheet" href="<?php echo ROOT_FRAMEWORK_PATH . 'plugins/sweetalert2-theme-bootstrap-4/bootstrap-4.min.css';?>">
  <!-- Toastr -->
  <link rel="stylesheet" href="<?php echo ROOT_FRAMEWORK_PATH . 'plugins/toastr/toastr.min.css';?>">
  <!-- Ionicons -->
  <link rel="stylesheet" href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css">
  <!-- Tempusdominus Bootstrap 4 -->
  <link rel="stylesheet" href="<?php echo ROOT_FRAMEWORK_PATH . 'plugins/tempusdominus-bootstrap-4/css/tempusdominus-bootstrap-4.min.css';?>">
  <!-- iCheck -->
  <link rel="stylesheet" href="<?php echo ROOT_FRAMEWORK_PATH . 'plugins/icheck-bootstrap/icheck-bootstrap.min.css';?>">
  <!-- JQVMap -->
  <link rel="stylesheet" href="<?php echo ROOT_FRAMEWORK_PATH . 'plugins/jqvmap/jqvmap.min.css';?>">
  <!-- Theme style -->
  <link rel="stylesheet" href="<?php echo ROOT_FRAMEWORK_PATH . 'css/adminlte.min.css';?>">
  <!-- overlayScrollbars -->
  <link rel="stylesheet" href="<?php echo ROOT_FRAMEWORK_PATH . 'plugins/overlayScrollbars/css/OverlayScrollbars.min.css';?>">
  <!-- Daterange picker -->
  <link rel="stylesheet" href="<?php echo ROOT_FRAMEWORK_PATH . 'plugins/daterangepicker/daterangepicker.css';?>">
  <!-- summernote -->
  <link rel="stylesheet" href="<?php echo ROOT_FRAMEWORK_PATH . 'plugins/summernote/summernote-bs4.min.css';?>">
  <!-- styles -->
  <link rel="stylesheet" href="<?php echo ROOT_FRAMEWORK_PATH . 'css/styles.css';?>">
  <?php 
  
          if(isset($_GET['pagina'])){
            switch($_GET['pagina']){
              case "InformarProblema":
  ?>
                <!-- tiny wysiwyg -->
                <script src="https://cdn.tiny.cloud/1/mj7oj9b3thngvf1uh9hrwz93cirqz039nk63xvwi6s5krv58/tinymce/6/tinymce.min.js" referrerpolicy="origin"></script>
  <?php
              break;
              case "HistorialTicket":
  ?>
                <!-- tiny wysiwyg -->
                <script src="https://cdn.tiny.cloud/1/mj7oj9b3thngvf1uh9hrwz93cirqz039nk63xvwi6s5krv58/tinymce/6/tinymce.min.js" referrerpolicy="origin"></script>
  <?php
              break;
              case "ConsultarIncidencia":
  ?>
                <!-- DataTables -->
                <link rel="stylesheet" href="<?php echo ROOT_FRAMEWORK_PATH . 'plugins/datatables-bs4/css/dataTables.bootstrap4.min.css';?>">
                <link rel="stylesheet" href="<?php echo ROOT_FRAMEWORK_PATH . 'plugins/datatables-responsive/css/responsive.bootstrap4.min.css';?>">
                <link rel="stylesheet" href="<?php echo ROOT_FRAMEWORK_PATH . 'plugins/datatables-buttons/css/buttons.bootstrap4.min.css';?>">
  <?php
              break;
            }
          }
  
  ?>
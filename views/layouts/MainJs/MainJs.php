<!-- jQuery -->
<script src="<?php echo ROOT_FRAMEWORK_PATH . 'plugins/jquery/jquery.min.js';?>"></script>
<!-- jQuery UI 1.11.4 -->
<script src="<?php echo ROOT_FRAMEWORK_PATH . 'plugins/jquery-ui/jquery-ui.min.js';?>"></script>
<!-- Resolve conflict in jQuery UI tooltip with Bootstrap tooltip -->
<script>
  $.widget.bridge('uibutton', $.ui.button)
</script>
<!-- Bootstrap 4 -->
<script src="<?php echo ROOT_FRAMEWORK_PATH . 'plugins/bootstrap/js/bootstrap.bundle.min.js';?>"></script>
<!-- SweetAlert2 -->
<script src="<?php echo ROOT_FRAMEWORK_PATH . 'plugins/sweetalert2/sweetalert2.min.js';?>"></script>
<!-- Toastr -->
<script src="<?php echo ROOT_FRAMEWORK_PATH . 'plugins/toastr/toastr.min.js';?>"></script>
<!-- ChartJS -->
<script src="<?php echo ROOT_FRAMEWORK_PATH . 'plugins/chart.js/Chart.min.js';?>"></script>
<!-- Sparkline -->
<script src="<?php echo ROOT_FRAMEWORK_PATH . 'plugins/sparklines/sparkline.js';?>"></script>
<!-- JQVMap -->
<script src="<?php echo ROOT_FRAMEWORK_PATH . 'plugins/jqvmap/jquery.vmap.min.js';?>"></script>
<script src="<?php echo ROOT_FRAMEWORK_PATH . 'plugins/jqvmap/maps/jquery.vmap.usa.js';?>"></script>
<!-- jQuery Knob Chart -->
<script src="<?php echo ROOT_FRAMEWORK_PATH . 'plugins/jquery-knob/jquery.knob.min.js';?>"></script>
<!-- daterangepicker -->
<script src="<?php echo ROOT_FRAMEWORK_PATH . 'plugins/moment/moment.min.js';?>"></script>
<script src="<?php echo ROOT_FRAMEWORK_PATH . 'plugins/daterangepicker/daterangepicker.js';?>"></script>
<!-- Tempusdominus Bootstrap 4 -->
<script src="<?php echo ROOT_FRAMEWORK_PATH . 'plugins/tempusdominus-bootstrap-4/js/tempusdominus-bootstrap-4.min.js';?>"></script>
<!-- Summernote -->
<script src="<?php echo ROOT_FRAMEWORK_PATH . 'plugins/summernote/summernote-bs4.min.js';?>"></script>
<!-- overlayScrollbars -->
<script src="<?php echo ROOT_FRAMEWORK_PATH . 'plugins/overlayScrollbars/js/jquery.overlayScrollbars.min.js';?>"></script>
<!-- AdminLTE App -->
<script src="<?php echo ROOT_FRAMEWORK_PATH . 'js/adminlte.js';?>"></script>
<!-- AdminLTE for demo purposes -->
<script src="<?php echo ROOT_FRAMEWORK_PATH . 'js/demo.js';?>"></script>
<!-- Default alerts -->
<script src="<?php echo ROOT_LAYOUTS_PATH . 'Alerts/alerts.js';?>"></script>
<!-- Main Aside -->
<script src="<?php echo ROOT_LAYOUTS_PATH . 'MainAside/MainAside.js';?>"></script>

<?php 
  
          if(isset($_GET['pagina'])){

            if(
              $_GET['pagina'] == 'ConsultarIncidencia' or
              $_GET['pagina'] == 'ConsultarTipoEquipo' or
              $_GET['pagina'] == 'ConsultarIncidencia' or
              $_GET['pagina'] == 'ConsultarPerfiles' or
              $_GET['pagina'] == 'ConsultarEquipo' or
              $_GET['pagina'] == 'CrearUsuario'
            ){
              require_once('DataTablesPlugins.php');
              echo $_GET['pagina'];
?>      
              <script src="<?php echo ROOT_VIEWS_PATH . $_GET['pagina'] . '/' . $_GET['pagina'] . '.js';?>"></script>
<?php      
            }else{
?>
              <script src="<?php echo ROOT_VIEWS_PATH . $_GET['pagina'] . '/' . $_GET['pagina'] . '.js';?>"></script>
<?php
            }
          }
?>
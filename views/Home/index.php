<?php
      require_once "../../config/conexion.php";
      require_once "../../config/routes.php";


      if(isset($_SESSION['user_id'])){

?>

<!DOCTYPE html>
<html lang="es">

<head>
  <?php require_once ROOT_LAYOUTS_PATH . "MainHead/MainHead.php"; ?>
</head>

<body class="hold-transition sidebar-mini layout-fixed">
  <div class="wrapper">

    <!-- Preloader -->
    <div class="preloader flex-column justify-content-center align-items-center">
      <img class="animation__shake" src="<?php echo ROOT_IMAGES_PATH . 'help-desk.png';?>" alt="Logo El Sol" height="60" width="60">
    </div>

    <!-- Navbar -->
    <?php require_once ROOT_LAYOUTS_PATH . "MainNav/MainNav.php"; ?>
    <!-- /.navbar -->

    <!-- Main Sidebar Container -->
    <?php require_once ROOT_LAYOUTS_PATH . "MainAside/MainAside.php" ?>

    <!-- Dinamic Main content -->
    <?php require_once ROOT_LAYOUTS_PATH . "MainDinamicContent/MainDinamicContent.php"; ?>
    <!-- /. Dinamic Main Content -->

    <!-- Footer -->
    <?php require_once ROOT_LAYOUTS_PATH . "MainFooter/MainFooter.php"; ?>
    <!-- /. Footer -->

    <!-- Control Sidebar -->
    <aside class="control-sidebar control-sidebar-dark">
      <!-- Control sidebar content goes here -->
    </aside>
    <!-- /.control-sidebar -->
  </div>
  <!-- ./wrapper -->

  <!-- Scripts -->
  <?php require_once ROOT_LAYOUTS_PATH . "MainJs/MainJs.php"; ?>
  <!-- /. Scripts -->

</body>

</html>

<?php 

      }else{
        header("location: " . Conexion::ruta());
      }

?>
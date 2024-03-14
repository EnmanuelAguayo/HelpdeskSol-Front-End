<?php 
      require_once("../../config/conexion.php");
      if ( isset($_SESSION['usu_id']) )
      {
?>


<!DOCTYPE html>
<html lang="es">

  <?php require_once "../MainHead/head.php"; ?>
  
  <title>Consultar ticket</title>

<body class="hold-transition sidebar-mini">
  <!-- Site wrapper -->
  <div class="wrapper">
    <!-- Navbar -->
    <?php require_once "../MainNavbar/navbar.php"; ?>
    <!-- /.navbar -->

    <!-- Main Sidebar Container -->
    <?php require_once "../MainAside/aside.php"; ?>

    <!-- Content Wrapper. Contains page content -->
    <div class="content-wrapper">
      <!-- Content Header (Page header) -->
      <section class="content-header">
        <div class="container-fluid">
          <div class="row mb-2">
            <div class="col-sm-6">
              <h1>Consultar ticket</h1>
            </div>
            <div class="col-sm-6">
              <ol class="breadcrumb float-sm-right">
                <li class="breadcrumb-item"><a href="../Home/">Home</a></li>
                <li class="breadcrumb-item active">Tickets</li>
                <li class="breadcrumb-item active">Consultar ticket</li>
              </ol>
            </div>
          </div>
        </div><!-- /.container-fluid -->
      </section>

      <!-- Main content -->
      <section class="content">

        <!-- Default box -->
        <div class="card">
          <div class="card-header">
            <h3 class="card-title">Consultar ticket</h3>
          </div>
          <div class="card-body">
           <table id="ticket_data" class="table table-bordered table-striped">
              <thead>
                <tr>
                <th style="width: 2%">Nro. Ticket</th> 
                <th style="width: 5%">Categor&iacute;a</th>
                <th style="width: 25%">T&iacute;tulo</th>
                <th style="width: 3%">Estado</th>
                <th style="width: 5%">Fecha creaci&oacute;n</th>
                <th style="width: 2%">Acciones</th>
                </tr>
              </thead>
              <tbody id="data">
                
              </tbody>
           </table>
          </div>
          <!-- /.card-body -->
          <div class="card-footer">
            Footer
          </div>
          <!-- /.card-footer-->
        </div>
        <!-- /.card -->

      </section>
      <!-- /.content -->
    </div>
    <!-- /.content-wrapper -->

    <?php require_once "../MainFooter/footer.php"; ?>

    <!-- Control Sidebar -->
    <aside class="control-sidebar control-sidebar-dark">
      <!-- Control sidebar content goes here -->
    </aside>
    <!-- /.control-sidebar -->
  </div>
  <!-- ./wrapper -->

  <?php require_once "../MainJs/js.php"; ?>
  <script type="text/javascript" src="consultarticket.js"></script>
  
</body>

</html>

<?php
      } else
      {
            header("Location:" . Conexion::ruta() . "view");
      }

?>
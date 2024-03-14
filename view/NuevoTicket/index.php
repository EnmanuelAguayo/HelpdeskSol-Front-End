<?php
require_once("../../config/conexion.php");
if (isset($_SESSION['usu_id'])) {
?>


  <!DOCTYPE html>
  <html lang="es">

  <?php require_once "../MainHead/head.php"; ?>
  <script src="https://cdn.tiny.cloud/1/mj7oj9b3thngvf1uh9hrwz93cirqz039nk63xvwi6s5krv58/tinymce/6/tinymce.min.js" referrerpolicy="origin"></script>

  <title>Nuevo ticket</title>

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
                <h1>Nuevo ticket</h1>
              </div>
              <div class="col-sm-6">
                <ol class="breadcrumb float-sm-right">
                  <li class="breadcrumb-item"><a href="../Home/">Home</a></li>
                  <li class="breadcrumb-item active">Tickets</li>
                  <li class="breadcrumb-item active">Nuevo ticket</li>
                </ol>
              </div>
            </div>
          </div><!-- /.container-fluid -->
        </section>

        <!-- Main content -->
        <section class="content">

          <!-- Default box -->
          <div class="card card-primary">
            <div class="card-header">
              <h3 class="card-title">Gestionar nuevo ticket</h3>
            </div>
            <!-- form start -->
            <form method="post" id="ticket_form">
              <input type="hidden" name="usu_id" id="usu_id" value="<?php echo $_SESSION['usu_id']; ?>">
              <div class="card-body">
                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group">
                      <label for="categoria">Categor&iacute;a</label>
                      <select class="custom-select form-control-border" name="cat_id" id="cat_id"></select>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label for="titulo">T&iacute;tulo</label>
                      <input type="text" class="form-control" name="tick_titulo" id="tick_titulo" placeholder="Ingrese el titulo">
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="form-group">
                      <label for="exampleInputFile">Descripci&oacute;n</label>
                      <textarea name="tick_descripcion" id="tick_descripcion"></textarea>
                      <input type="hidden" name="notes" id="notes">
                    </div>
                  </div>
                </div>
              </div>
              <!-- /.card-body -->

              <div class="card-footer">
                <button type="submit" name="action" value="add" class="btn btn-primary toastrDefaultSuccess">Guardar</button>
                <a href="#" class="btn btn-danger">Cancelar</a>
              </div>
            </form>
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
    <script type="text/javascript" src="nuevoticket.js"></script>

  </body>

  </html>

<?php
} else {
  header("Location:" . Conexion::ruta() . "view");
}

?>
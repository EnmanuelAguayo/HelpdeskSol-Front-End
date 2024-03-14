<div class="content-wrapper">
  <!-- Content Header (Page header) -->
  <div class="content-header">
    <div class="container-fluid">
      <div class="row mb-2">
        <div class="col-sm-6">
          <h1 class="m-0"><i class="nav-icon fas fa-user"></i> Consultar perfiles</h1>
        </div><!-- /.col -->
        <div class="col-sm-6">
          <ol class="breadcrumb float-sm-right">
            <li class="breadcrumb-item"><a href="#">Home</a></li>
            <li class="breadcrumb-item">Mantenimiento</li>
            <li class="breadcrumb-item">Usuarios</li>
            <li class="breadcrumb-item active">Consultar Perfiles</li>
          </ol>
        </div><!-- /.col -->
      </div><!-- /.row -->
    </div><!-- /.container-fluid -->
  </div>
  <!-- /.content-header -->

  <section id="table_container" class="content">
    <div class="container-fluid">
      <!-- row -->
      <div class="row">
        <div class="col-sm-12 card">
          <table id="listar_perfiles" class="table table-bordered table striped">
            <thead>
              <tr>
                <th style="width: 5%">Nombre del perfil</th>
                <th style="width: 5%">Estado</th>
                <th style="width: 5%">Acciones</th>
              </tr>
            </thead>
          </table>
        </div>
      </div>
    </div>
    <!-- /.container-fluid -->
  </section>
  <section class="content" id="form_container">
    <div class="container-fluid">
      <!-- row -->
      <div class="row">
        <div class="col-sm-6">
          <input type="hidden" id="item">
          <?php require_once('../layouts/Forms/form_perfil.php');?>
        </div>
      </div>
    </div>
    <!-- /.container-fluid -->
  </section>
  <section class="content" id="redirect" style="display: none;">
    <div class="container-fluid">
      <p class="lead">
        A&uacute;n no hay nada por aqu&iacute;, empieza con algo de informaci&oacute;n. <a href="CrearPerfiles">Crear Perfiles</a>
      </p>

    </div>
  </section>
</div>
<!-- /.content-wrapper -->
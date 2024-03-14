<!-- Content Wrapper. Contains page content -->
<div class="content-wrapper">
  <!-- Content Header (Page header) -->
  <div class="content-header">
    <div class="container-fluid">
      <div class="row mb-2">
        <div class="col-sm-6">
          <h1 class="m-0">Bienvenido <span class="text-primary"><?php echo $_SESSION['user_name']; ?></span></h1>
        </div><!-- /.col -->
        <div class="col-sm-6">
          <ol class="breadcrumb float-sm-right">
            <li class="breadcrumb-item"><a href="#">Home</a></li>
            <li class="breadcrumb-item active">Bienvenido</li>
          </ol>
        </div><!-- /.col -->
      </div><!-- /.row -->
    </div><!-- /.container-fluid -->
  </div>
  <!-- /.content-header -->

  <section class="content">
    <div class="container-fluid">
      <!-- row -->
      <div class="row">
        <div class="col-sm-12 col-md-6 col-lg-6 col-lx-6">
          <div class="col-sm-12 col-md-12 col-lg-12 col-lx-12">
            <div class="card">
              <div class="card-header">
                <h5 class="text-center">Datos personales</h5>
              </div>
              <ul class="lista-grupo">
                <li class="lista-grupo-item"><strong>Nombre completo: </strong> <?php echo $_SESSION['user_name']; ?></li>
                <li class="lista-grupo-item"><strong>Departamento:</strong> Emisi&oacute;n de p&oacute;lizas</li>
                <li class="lista-grupo-item"><strong>Perfil de usuario:</strong> <?php echo $_SESSION['profile_name'];?></li>
              </ul>
            </div>
          </div>

          <div class="col-sm-12 col-md-12 col-lg-12 col-lx-12">
            <div class="card">
              <div class="card-header">
                <h5 class="text-center">Dispositivo</h5>
              </div>
              <div class="card-body">
                <div class="row">
                  <div class="col-sm-12 col-md-12 col-lg-12 col-lx-12 text-center">
                    <h5 class="lead text-center">Hp laptop 15"</h5>
                    <img class="img-laptop text-center" src="<?php echo ROOT_IMAGES_PATH . 'laptop.jpg'; ?>" alt="Laptop">
                  </div>
                  <!-- /. left -->
                  <div class="col-sm-12 col-md-12 col-lg-12 col-lx-12">
                    <ul class="lista-grupo">
                      <li class="lista-grupo-item">Pantalla: 15.6" FHD (1920 x 1080).</li>
                      <li class="lista-grupo-item">Modelo: 15-DW1084LA</li>
                      <li class="lista-grupo-item">Procesador: Pavilion AMD Ryzen 3-300U.</li>
                      <li class="lista-grupo-item">Memoria: 8 GB de RAM DDR4.</li>
                      <li class="lista-grupo-item">Almacenamiento: Disco duro SATA de 1 TB.</li>
                      <li class="lista-grupo-item">Sistema Operativo: Windows 10 profesional.</li>
                    </ul>
                  </div>
                  <!-- /. right -->
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- /. left -->
        <div class="col-sm-12 col-md-6 col-lg-6 col-lx-6">
          <div class="card">
            <div class="card-header">
              <h5 class="text-center">
                Soluciones populares
              </h5>
              <div class="form-group">
                <div class="input-group input-group-md">
                  <input type="search" class="form-control form-control-md" placeholder="Buscar soluciones">
                  <div class="input-group-append">
                    <button type="submit" class="btn btn-md btn-default">
                      <i class="fa fa-search"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">
                T&iacute;tulo de la soluci&oacute;n
                <p class="text-muted">descripcion del art&iacute;culo</p>
                <a href="#" class="link">
                  Leer m&aacute;s
                </a>
              </li>
              <li class="list-group-item">
                T&iacute;tulo de la soluci&oacute;n
                <p class="text-muted">descripcion del art&iacute;culo</p>
                <a href="#" class="link">
                  Leer m&aacute;s
                </a>
              </li>
              <li class="list-group-item">
                T&iacute;tulo de la soluci&oacute;n
                <p class="text-muted">descripcion del art&iacute;culo</p>
                <a href="#" class="link">
                  Leer m&aacute;s
                </a>
              </li>
            </ul>
          </div>
          <div class="card">
            <div class="card-header">
              <h5 class="text-center"><a href="#" class="link">Incidencias</a></h5>
            </div>
            <ul class="list-group">
              <li class="list-group-item d-flex justify-content-between align-items-center">
                Abiertas
                <span class="badge badge-success badge-pill">14</span>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-center">
                En proceso
                <span class="badge badge-warning badge-pill">2</span>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-center">
                Cerradas
                <span class="badge badge-danger badge-pill">2</span>
              </li>
            </ul>
          </div>
        </div>
        <!-- /. right-->
      </div>
    </div>
    <!-- /.container-fluid -->
  </section>
</div>
<!-- /.content-wrapper -->
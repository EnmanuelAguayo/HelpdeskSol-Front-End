<aside class="main-sidebar sidebar-dark-primary elevation-4">
  <!-- Brand Logo -->
  <a href="#" class="brand-link">
    <img src="../../public/adminlte/img/logo.jpg" alt="Helpdesk Logo" class="brand-image img-circle elevation-3" style="opacity: .8">
    <span class="brand-text font-weight-light">Helpdesk</span>
  </a>

  <!-- Sidebar -->
  <div class="sidebar">
    <!-- Sidebar user (optional) -->
    <div class="user-panel mt-3 pb-3 mb-3 d-flex">
      <div class="image">
        <img src="../../public/adminlte/img/user2-160x160.jpg" class="img-circle elevation-2" alt="User Image">
      </div>
      <div class="info">
        <input type="hidden" id="rol_idx" value="<?php echo $_SESSION['rol_id']?>">
        <a href="#" class="d-block"><?php echo $_SESSION['usu_nom'] . " " . $_SESSION['usu_ap']; ?></a>
        <small><a href="#" class="d-block"><?php echo $_SESSION['usu_correo']; ?></a></small>
        <input type="hidden" id="user_idx" value="<?php echo $_SESSION['usu_id']; ?>"><!-- Id de usuario global -->
      </div>
    </div>

    <!-- SidebarSearch Form -->
    <div class="form-inline">
      <div class="input-group" data-widget="sidebar-search">
        <input class="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search">
        <div class="input-group-append">
          <button class="btn btn-sidebar">
            <i class="fas fa-search fa-fw"></i>
          </button>
        </div>
      </div>
    </div>

    <!-- Sidebar Menu -->
    <nav class="mt-2">
      <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
        <!-- Add icons to the links using the .nav-icon class
               with font-awesome or any other icon font library -->

        <li class="nav-item">
          <a href="../Home" class="nav-link">
            <i class="nav-icon fa-solid fa-house"></i>
            <p>
              Inicio
            </p>
          </a>
        </li>

        <li class="nav-item">
          <a href="#" class="nav-link">
            <i class="nav-icon fa-solid fa-file-circle-check"></i>
            <p>
              Tickets
              <i class="right fas fa-angle-left"></i>
            </p>
          </a>
          <ul class="nav nav-treeview">
            <li class="nav-item" id="nuevoTicket">
              <a href="../NuevoTicket/" class="nav-link">
                <i class="far fa-circle nav-icon"></i>
                <p>Nuevo ticket</p>
              </a>
            </li>
            <li class="nav-item" id="consultarTicket">
              <a href="../ConsultarTicket/" class="nav-link">
                <i class="far fa-circle nav-icon"></i>
                <p>Consultar ticket</p>
              </a>
            </li>
          </ul>
        </li>

        <li class="nav-item">
          <a href="../Logout/logout.php" class="nav-link">
            <i class="nav-icon fa-solid fa-power-off"></i>
            <p>Cerrar cesi&oacute;n</p>
          </a>
        </li>
        
      </ul>
    </nav>
    <!-- /.sidebar-menu -->
  </div>
  <!-- /.sidebar -->
</aside>
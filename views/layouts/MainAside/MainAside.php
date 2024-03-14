<aside class="main-sidebar sidebar-dark-primary elevation-4">
  <!-- Brand Logo -->
  <a href="Bienvenido" class="brand-link">
    <img src="<?php echo ROOT_IMAGES_PATH . 'help-desk.png'; ?>" alt="Logo El Sol" class="brand-image img-circle elevation-3" style="opacity: .8">
    <span class="brand-text font-weight-light"><?php echo APP_NAME; ?></span>
  </a>


  <!-- Sidebar -->
  <div class="sidebar">
    <!-- Sidebar user panel (optional) -->
    <div class="user-panel mt-3 pb-3 mb-3 d-flex">
      <div class="image">
        <?php
        if (empty($_SESSION['user_photo'])) {
        ?>
          <img src="<?php echo ROOT_IMAGES_PATH . 'user.png'; ?>" class="img-circle elevation-2" alt="User Image">
        <?php
        } else {
        ?>
          <img src="<?php echo ROOT_IMAGES_PATH . $_SESSION['user_photo']; ?>" class="img-circle elevation-2" alt="User Image">
        <?php
        }
        ?>
      </div>
      <div class="info">

        <a href="Bienvenido" class="d-block">
          <?php if (isset($_SESSION['user_id'])) {
            echo $_SESSION['user_name'];
          } ?>
        </a>

        <span class="text-primary">
          <?php 
            if(isset($_SESSION['profile_name'])){
              echo $_SESSION['profile_name'];
            }
          ?>
        </span>
        <input type="hidden" name="profile_id" id="profile_id" value="<?php if(isset($_SESSION['profile_id'])){echo $_SESSION['profile_id'];}?>">
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

        
        <!-- /. list soluciones populares -->
        <li id="content_reportes" class="nav-item <?php if (isset($_GET['pagina'])){if ($_GET['pagina'] == "Reportes"){echo "menu-open";}}?>">
          <a href="#" class="nav-link <?php if (isset($_GET['pagina'])){if ($_GET['pagina'] == "Reportes") {echo "active";}} ?>">
            <i class="nav-icon fas fa-tachometer-alt"></i>
            <p>
              Reportes
              <i class="right fas fa-angle-left"></i>
            </p>
          </a>
          <ul class="nav nav-treeview">
            <li class="nav-item">
              <a href="Reportes" class="nav-link <?php if (isset($_GET['pagina'])) {if ($_GET['pagina'] == 'Reportes') {echo "active";}} ?>">
                <i class="far fa-circle nav-icon"></i>
                <p>Reportes</p>
              </a>
            </li>
          </ul>
        </li>
        <!-- /. list reportes -->
        <li id="content_tickets" class="nav-item <?php if (isset($_GET['pagina'])) {if ($_GET['pagina'] == 'InformarProblema' or $_GET['pagina'] == 'ConsultarIncidencia') {echo 'menu-open';}}?>">
          <a href="#" class="nav-link <?php if (isset($_GET['pagina'])) {if ($_GET['pagina'] == 'InformarProblema' or $_GET['pagina'] == 'ConsultarIncidencia') {echo 'active';}}?>">
            <i class="nav-icon fas fa-laptop-medical"></i>
            <p>
              Incidencias
              <i class="right fas fa-angle-left"></i>
            </p>
          </a>
          <ul class="nav nav-treeview">
            <li id="informar_problema" class="nav-item">
              <a href="InformarProblema" class="nav-link <?php if (isset($_GET['pagina'])) {if ($_GET['pagina'] == 'InformarProblema') {echo 'active';}} ?>">
                <i class="far fa-circle nav-icon"></i>
                <p>Informar problema</p>
              </a>
            </li>
          </ul>
          <ul class="nav nav-treeview">
            <li id="consultar_incidencias" class="nav-item">
              <a href="ConsultarIncidencia" class="nav-link <?php if (isset($_GET['pagina'])) {if ($_GET['pagina'] == 'ConsultarIncidencia') {echo 'active';}} ?>">
                <i class="nav-icon far fa-circle"></i>
                <p>Consultar incidencias</p>
              </a>
            </li>
          </ul>
        </li>
        <!-- /. list tickets -->
        
        <li class="nav-item" id="soluciones_populares">
          <a href="#" class="nav-link">
            <i class="nav-icon fas fa-info-circle"></i>
            <p>Soluciones populares</p>
          </a>
        </li>
        <!-- /. list soluciones populares -->

        <li id="content_usuarios" class="nav-item <?php if (isset($_GET['pagina'])) {if ($_GET['pagina'] == 'CrearUsuario' or $_GET['pagina'] == 'ConsultarUsuarios' or $_GET['pagina'] == 'PerfileUsuario') {echo 'menu-open';}}?>">
          <a href="#" class="nav-link <?php if (isset($_GET['pagina'])) {if ($_GET['pagina'] == 'CrearUsuario' or $_GET['pagina'] == 'ConsultarUsuarios' or $_GET['pagina'] == 'PerfileUsuario') {echo 'active';}}?>">
            <i class="nav-icon fas fa-user"></i>
            <p>
              Usuarios
              <i class="right fas fa-angle-left"></i>
            </p>
          </a>
          <ul class="nav nav-treeview">
            <li class="nav-item" id="crear_usuarios">
              <a href="CrearUsuario" class="nav-link <?php if (isset($_GET['pagina'])) {if ($_GET['pagina'] == 'CrearUsuario') {echo 'active';}} ?>">
                <i class="far fa-circle nav-icon"></i>
                <p>Crear usuarios</p>
              </a>
            </li>
          </ul>
          <ul class="nav nav-treeview">
            <li class="nav-item" id="consultar_usuarios">
              <a href="ConsultarUsuarios" class="nav-link <?php if (isset($_GET['pagina'])) {if ($_GET['pagina'] == 'ConsultarUsuarios') {echo 'active';}} ?>">
                <i class="far fa-circle nav-icon"></i>
                <p>Consultar usuarios</p>
              </a>
            </li>
          </ul>
        </li>
        <!-- /. list usuarios -->
        <li id="content_perfiles" class="nav-item <?php if (isset($_GET['pagina'])) {if ($_GET['pagina'] == 'CrearPerfiles' or $_GET['pagina'] == 'ConsultarPerfiles') {echo 'menu-open';}}?>">
          <a href="#" class="nav-link <?php if(isset($_GET['pagina'])) {if ($_GET['pagina'] == 'CrearPerfiles' or $_GET['pagina'] == 'ConsultarPerfiles') {echo 'active';}}?>">
          <i class="nav-icon fas fa-users"></i>
            <p>
              Perfiles 
              <i class="right fas fa-angle-left"></i>
            </p>
          </a>
          <ul class="nav nav-treeview">
            <li class="nav-item" id="crear_perfiles">
              <a href="CrearPerfiles" class="nav-link <?php if (isset($_GET['pagina'])) {if ($_GET['pagina'] == 'CrearPerfiles') {echo 'active';}} ?>">
                <i class="far fa-circle nav-icon"></i>
                <p>Crear Perfiles</p>
              </a>
            </li>
          </ul>
          <ul class="nav nav-treeview">
            <li class="nav-item" id="consultar_perfiles">
              <a href="ConsultarPerfiles" class="nav-link <?php if(isset($_GET['pagina'])) {if ($_GET['pagina'] == 'ConsultarPerfiles') {echo 'active';}}?>">
                <i class="far fa-circle nav-icon"></i>
                <p>Consultar Perfiles</p>
              </a>
            </li>
          </ul>
        </li>
        <!-- /. list perfiles -->

        <li id="content_equipos" class="nav-item <?php if (isset($_GET['pagina'])){if($_GET['pagina'] == "CrearEquipo" or $_GET['pagina'] == "ConsultarEquipo" or $_GET['pagina'] == "CrearTipoEquipo" or $_GET['pagina'] == "ConsultarTipoEquipo"){echo 'menu-open';}} ?>">
          <a href="#" class="nav-link <?php if (isset($_GET['pagina'])){if($_GET['pagina'] == "CrearEquipo" or $_GET['pagina'] == "ConsultarEquipo" or $_GET['pagina'] == "CrearTipoEquipo" or $_GET['pagina'] == "ConsultarTipoEquipo"){echo 'active';}} ?>">
            <i class="nav-icon fas fa-desktop"></i>
            <p>
              Equipos
              <i class="right fas fa-angle-left"></i>
            </p>
          </a>
          <ul class="nav nav-treeview">
            <li class="nav-item" id="crear_equipos">
              <a href="CrearEquipo" class="nav-link <?php if (isset($_GET['pagina'])){if($_GET['pagina'] == "CrearEquipo"){echo 'active';}} ?>">
                <i class="nav-icon far fa-circle"></i>
                <p>Crear Equipo</p>
              </a>
            </li>
          </ul>
          <ul class="nav nav-treeview">
            <li class="nav-item" id="consultar_equipos">
              <a href="ConsultarEquipo" class="nav-link <?php if (isset($_GET['pagina'])){if($_GET['pagina'] == "ConsultarEquipo"){echo 'active';}} ?>">
                <i class="nav-icon far fa-circle"></i>
                <p>Consultar equipos</p>
              </a>
            </li>
          </ul>
          <ul class="nav nav-treeview">
            <li class="nav-item" id="crear_tipo_equipo">
              <a href="CrearTipoEquipo" class="nav-link <?php if (isset($_GET['pagina'])){if($_GET['pagina'] == "CrearTipoEquipo"){echo 'active';}} ?>">
                <i class="nav-icon far fa-circle"></i>
                <p>Crear tipo de equipo</p>
              </a>
            </li>
          </ul>
          <ul class="nav nav-treeview">
            <li class="nav-item" id="consultar_tipo_equipo">
              <a href="ConsultarTipoEquipo" class="nav-link <?php if (isset($_GET['pagina'])){if($_GET['pagina'] == "ConsultarTipoEquipo"){echo 'active';}} ?>">
                <i class="nav-icon far fa-circle"></i>
                <p>Consultar tipo de equipo</p>
              </a>
            </li>
          </ul>
        </li>
        <!-- /. list equipos-->
        
        <li id="content_ramas_categorias" class="nav-item<?php if (isset($_GET['pagina'])) {if ($_GET['pagina'] == 'CrearServicio' or $_GET['pagina'] == 'ConsultarServicios' or $_GET['pagina'] == 'CrearCategoria' or $_GET['pagina'] == 'ConsultarCategorias' or $_GET['pagina'] == 'CrearRama' or $_GET['pagina'] == 'ConsultarRamas') {echo 'menu-open';}}?>">
          <a href="#" class="nav-link <?php if (isset($_GET['pagina'])) {if ($_GET['pagina'] == 'CrearServicio' or$_GET['pagina'] == 'ConsultarServicios' or$_GET['pagina'] == 'CrearCategoria' or$_GET['pagina'] == 'ConsultarCategorias' or$_GET['pagina'] == 'CrearRama' or $_GET['pagina'] == 'ConsultarRamas') {echo 'active';}}?>">
            <i class="nav-icon fas fa-filter"></i>
            <p>
              Ramas y categor&iacute;as
              <i class="right fas fa-angle-left"></i>
            </p>
          </a>
          <ul class="nav nav-treeview">
            <li class="nav-item" id="crear_servicios">
              <a href="CrearServicio" class="nav-link <?php if (isset($_GET['pagina'])) {if ($_GET['pagina'] == 'CrearServicio') {echo 'active';}} ?>">
                <i class="nav-icon far fa-circle text-info"></i>
                <p>Crear servicios</p>
              </a>
            </li>
            <li class="nav-item" id="consultar_servicios">
              <a href="ConsultarServicios" class="nav-link <?php if (isset($_GET['pagina'])) {if ($_GET['pagina'] == 'ConsultarServicios') {echo 'active';}} ?>">
                <i class="nav-icon far fa-circle text-info"></i>
                <p>Consultar servicios</p>
              </a>
            </li>
            <li class="nav-item" id="crear_categorias">
              <a href="CrearCategoria" class="nav-link <?php if (isset($_GET['pagina'])) {if ($_GET['pagina'] == 'CrearCategoria') {echo 'active';}} ?>">
                <i class="nav-icon far fa-circle text-warning"></i>
                <p>Crear categor&iacute;as</p>
              </a>
            </li>
            <li class="nav-item" id="consultar_categorias">
              <a href="ConsultarCategorias" class="nav-link <?php if (isset($_GET['pagina'])) {if ($_GET['pagina'] == 'ConsultarCategorias') {echo 'active';}} ?>">
                <i class="nav-icon far fa-circle text-warning"></i>
                <p>Consultar categor&iacute;as</p>
              </a>
            </li>
            <li class="nav-item" id="crear_ramas">
              <a href="CrearRama" class="nav-link <?php if (isset($_GET['pagina'])) {if ($_GET['pagina'] == 'CrearRama') {echo 'active';}} ?>">
                <i class="nav-icon far fa-circle text-danger"></i>
                <p>Crear ramas</p>
              </a>
            </li>
            <li class="nav-item" id="consultar_ramas">
              <a href="ConsultarRamas" class="nav-link <?php if (isset($_GET['pagina'])) {if ($_GET['pagina'] == 'ConsultarRamas') {echo 'active';}} ?>">
                <i class="nav-icon far fa-circle text-danger"></i>
                <p>Consultar ramas</p>
              </a>
            </li>
          </ul>
        </li>
        <!--/. list mantenimiento del sistema-->
        <li class="nav-header">SESION</li>
        <li class="nav-item">
          <a href="<?php echo ROOT_VIEWS_PATH . 'Salir'; ?>" class="nav-link">
            <i class="nav-icon fas fa-power-off"></i>
            <p>Salir</p>
          </a>
        </li>
      </ul>
    </nav>
    <!-- /.sidebar-menu -->
  </div>
  <!-- /.sidebar -->
</aside>
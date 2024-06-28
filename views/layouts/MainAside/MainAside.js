const mainAside = async () => {
  const container = document.getElementById('mainAside');
  const userDataJson = sessionStorage.getItem('user');
  const userData = JSON.parse(userDataJson);
  
  const content = `
      <!-- Brand Logo -->
      <a href="index3.html" class="brand-link">
        <img src="../../../public/adminlte.3.2.0/img/help-desk.png" alt="Helpdesk Logo" class="brand-image img-circle elevation-3" style="opacity: .8">
        <span class="brand-text font-weight-light">HelpDesk</span>
      </a>

      <!-- Sidebar -->
      <div class="sidebar">
        <!-- Sidebar user panel (optional) -->
        <div class="user-panel mt-3 pb-3 mb-3 d-flex">
          <div class="image">
            <img src="../../../public/adminlte.3.2.0/img/user.png" class="img-circle elevation-2" alt="User Image">
          </div>
          <div class="info">
            <a href="#" class="d-block">${userData.username}</a>
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
            
                <li class="nav-item linkPage">
                <a href="../bienvenido" class="nav-link linkPage link-aside" link-aside-target="true">
                  <i class="fas fa-house nav-icon linkPage"></i>
                  <p class="linkPage">Bienvenido</p>
                </a>
              </li>

            <li class="nav-item">
              <a href="#" class="nav-link link-aside-target" link-aside-target="true">
                <i class="nav-icon far fa-ticket"></i>
                <p>
                  Tickets
                  <i class="right fas fa-angle-left"></i>
                </p>
              </a>
              <ul class="nav nav-treeview linkPage">
                <li class="nav-item">
                  <a href="../nuevoTicket" class="nav-link link-aside">
                    <i class="fas fa-plus nav-icon"></i>
                    <p>Nuevo ticket</p>
                  </a>
                </li>
                <li class="nav-item">
                  <a href="../tickets" class="nav-link link-aside">
                    <i class="fas fa-list nav-icon"></i>
                    <p>Tickets</p>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
        <!-- /.sidebar-menu -->
      </div>
      <!-- /.sidebar -->
    `
  container.innerHTML = content;
} 
document.addEventListener('DOMContentLoaded', mainAside);
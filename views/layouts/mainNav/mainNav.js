const mainNav = async () => {
  const container = document.getElementById('mainNav');
  const content = `
    <!-- Left navbar links -->
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" data-widget="pushmenu" href="#" role="button"><i class="fas fa-bars"></i></a>
      </li>
      <li class="nav-item d-none d-sm-inline-block">
        <a href="../bienvenido" class="nav-link">Home</a>
      </li>
    </ul>
    <ul class="navbar-nav ml-auto">   
      <!-- Notifications Dropdown Menu -->
      <li class="nav-item dropdown">
        <a id="logout" class="nav-link text-danger" data-toggle="dropdown" href="#">
          Cerrar sesi&oacute;n
        </a>
      </li>
    </ul>
  `;
  container.innerHTML = content;
}
document.addEventListener('DOMContentLoaded', mainNav);
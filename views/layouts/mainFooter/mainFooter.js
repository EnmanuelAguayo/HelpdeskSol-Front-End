const mainFooter = async () => {
  const container = document.getElementById('mainFooter');
  const content = `  
      <strong>Copyright &copy; 2022-2023 <a href="#">El Sol Seguros</a>.</strong>
      Todos los derechos reservados
      <div class="float-right d-none d-sm-inline-block">
        <b>Version</b> 3.2.0 - 26/09/2022
      </div>
  `;
  container.innerHTML = content;
}

document.addEventListener('DOMContentLoaded', mainFooter);

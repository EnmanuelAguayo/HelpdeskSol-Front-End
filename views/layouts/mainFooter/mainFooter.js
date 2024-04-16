const mainFooter = async () => {
  const container = document.getElementById('mainFooter');
  const content = `  
      <strong><a href="#">El Sol Seguros</a></strong>
      
      <div class="float-right d-none d-sm-inline-block">
        <b>Version</b> s1.0.0 - 16/04/2024
      </div>
  `;
  container.innerHTML = content;
}

document.addEventListener('DOMContentLoaded', mainFooter);

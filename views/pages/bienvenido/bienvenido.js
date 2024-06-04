const bienvenido = async () => {
  const userDataString = sessionStorage.getItem('user');
  const userData = JSON.parse(userDataString);
  
  if (userData == null) {
    window.location.href = '../../../login';
  }
  
  const endpointInfoCustomer = 'http://127.0.0.1:8000/info/customer';
  const endpointInfoDevices = 'http://127.0.0.1:8000/info/customer/devices';
  const endpointSummaryTickets = 'http://127.0.0.1:8000/ticket/summary/customer/' + userData.id;
  
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + userData.token
    }
  }

  
  try { 
    const responseCustomer = await fetch(endpointInfoCustomer, options);
    const responseDevices = await fetch(endpointInfoDevices, options);
      
      if (responseCustomer.status == 200 && responseDevices.status == 200) {
        // Datos de usuario
        let dataCustomer = await responseCustomer.json();
        pushContent();
        let infoCustomer = `
          <strong>Nombre: </strong> ${dataCustomer.fullname} </br>
          <strong>Usuario: </strong> ${dataCustomer.username} </br>
          <strong>Team: </strong> ${dataCustomer.team} </br>
          <strong>Estado: </strong> ${dataCustomer.availability} </br>
        `;
        document.getElementById('infoCustomer').innerHTML = infoCustomer;

        // Dispositivos
        let dataDevices = await responseDevices.json();
        for (let index = 0; index < dataDevices.length; index++) {
          const element = dataDevices[index];
          let infoDevices = `
            <strong>${element.description}</strong> - ${element.type_name} </br>
          `;
          document.getElementById('infoDevices').innerHTML = infoDevices;
        }
        
      } else if (response.status == 401) {
        sessionStorage.clear();
        window.location.href = '../../../login';
      } else if (response.status == 403) {
        window.location.href = '../error403.html';
      } else if (response.status == 404) {
        window.location.href = '../error404.html';
      } else {
          console.error('Error', response.status);
      }
  } catch (error){
    console.error(error);
  }
  
  // Summary tickets
  try {
    const listIncidencias = document.getElementById('listIncidencias');
    const response = await fetch(endpointSummaryTickets, options);
    const optionsSummary = ['open_count', 'in_progress_count', 'solved_count', 'approved_count', 'rejected_count'];
  
    if ( response.status == 200) {
      let data = await response.json();
      const contentSummary = `
        <li class="list-group-item d-flex justify-content-between align-items-center">
          Abiertos
          <span class="badge badge-success badge-pill">${data.open_count}</span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center">
          En progreso
          <span class="badge badge-warning badge-pill">${data.in_progress_count}</span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center">
          Solucionados
          <span class="badge badge-primary badge-pill">${data.solved_count}</span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center">
          Aprobados
          <span class="badge badge-info badge-pill">${data.approved_count}</span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center">
          Rechazados
          <span class="badge badge-danger badge-pill">${data.rejected_count}</span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center">
          Cerrados por sistema
          <span class="badge badge-danger badge-pill">${data.closed_system_count}</span>
        </li>
    `;
    listIncidencias.innerHTML = contentSummary;
    } else if (response.status == 404) {
      listIncidencias.innerHTML = '<p>Contenido no disponible</p>';
    } else if (response.status == 403) {
      listIncidencias.innerHTML == '<p>No posee permiso para visualizar el contenido de este apartado.</p>';
    }
  } catch (error) {
    console.error(error)
  }
}

const pushContent = async () => {
  const container = document.getElementById('mainDinamic');
  container.setAttribute('pageName', 'bienvenido');
  const content = ` 
    <!-- Content Header (Page header) -->
    <div class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1 class="m-0">Bienvenido <span class="text-primary"></span></h1>
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
                <p id='infoCustomer' class="m-3"></p>
              </div>
            </div>

            <div class="col-sm-12 col-md-12 col-lg-12 col-lx-12">
              <div class="card">
                <div class="card-header">
                  <h5 class="text-center">Dispositivo</h5>
                </div>
                <div class="card-body">
                  <div class="row">
                    <p id="infoDevices" class="m-3"></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- /. left -->
          <div class="col-sm-12 col-md-6 col-lg-6 col-lx-6">
            <div class="card">
              <div class="card-header">
                <h5 class="text-center"><a href="#" class="link">Incidencias</a></h5>
              </div>
              <ul class="list-group" id="listIncidencias"></ul>
            </div>
          </div>
          <!-- /. right-->
        </div>
      </div>
      <!-- /.container-fluid -->
    </section>
  `;
  container.innerHTML = content;
}

document.addEventListener('DOMContentLoaded', bienvenido);

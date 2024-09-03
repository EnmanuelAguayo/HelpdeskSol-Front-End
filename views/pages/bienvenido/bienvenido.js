const bienvenido = async () => {

  resultUserData = checkSessionToken();
  
  if (resultUserData === false) {
    console.log("userData", userData);
    window.location.href = '../../../login';
    return false;
  }

  const userDataString = sessionStorage.getItem('user');
  const userData = JSON.parse(userDataString);
  
  // Endpoints
  
    // Customer
    const endpointInfoCustomer = 'http://127.0.0.1:8000/info/customer';
    const endpointInfoDevices = 'http://127.0.0.1:8000/info/customer/devices';
    const endpointSummaryTicketsCustomer = 'http://127.0.0.1:8000/ticket/summary/customer/' + userData.id;
  
    // Support
    const endpointInfoSoporte = 'http://127.0.0.1:8000/info/support';
    const endpointSummaryTicketsSupport = 'http://127.0.0.1:8000/ticket/summary/support/' + userData.id;
   
  
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + userData.token
    }
  }

  // Information
  try { 
    let responseBasicInformation = await fetch(userData.type_user == "C" ? endpointInfoCustomer : endpointInfoSoporte, options);
    let responseDevices = userData.type_user == "C" ? await fetch(endpointInfoDevices, options) : '';
      
    // Datos de usuario
      if (responseBasicInformation.status == 200) {
        let dataUser = await responseBasicInformation.json();
        pushContent();
        let infoUser = `
          <strong>Nombre: </strong> ${dataUser.fullname} </br>
          <strong>Usuario: </strong> ${dataUser.username} </br>
          <strong>Team: </strong> ${userData.type_user == "C" ? dataUser.team : 'Soporte'}</br>
          <strong>Estado: </strong> ${dataUser.availability} </br>
        `;
        document.getElementById('infoUser').innerHTML = infoUser;
      } else if (responseBasicInformation.status == 401) {
        sessionStorage.clear();
        window.location.href = '../../../login';
      } else if (responseBasicInformation.status == 403) {
        document.getElementById('infoUser').innerHTML = '<p>Error 403. No Autorizado.</p>';
      } else if (responseBasicInformation.status == 404) {
          document.getElementById('infoUser').innerHTML = '<p>Error 404. No encontrado.</p>';
      } else {
        console.error('Ocurrió un error inesperado');
      }

    // Dispositivos
      if (userData.type_user == "C") {

        if (responseDevices.status == 200) {
          let dataDevices = await responseDevices.json();
          let infoDevices = "";
          
          if (dataDevices) {
            for (let index = 0; index < dataDevices.length; index++) {
              const device = dataDevices[index];
  
              if (device.image == null) {
                  infoDevices += `
                  
                    <div class="col-sm-6 ml-5 card text-black bg-light" style="max-width: 18rem;">
                      <div class="card-header">
                        <strong>${device.description}</strong> - ${device.type_name}
                      </div>
                      <div class="card-body">
                        <img class="img-fluid" src="../../../public/adminlte.3.2.0/img/device.png">
                      </div>
                    </div>
                  `;
              } else {
                  infoDevices += `
                    <div class="col-sm-6 ml-5 card text-black bg-light" style="max-width: 18rem;">
                      <div class="card-header">
                        <strong>${device.description}</strong> - ${device.type_name}
                      </div>
                      <div class="card-body">
                        <img class="img-fluid" src="${device.image}">
                      </div>
                    </div>
                  `;
              }
            }
          } else {
            infoDevices = '<p class="text-secondary">Ningún dispositivo asignado.</p>'
          }
          document.getElementById('infoDevices').innerHTML = infoDevices;
        } else if (responseDevices == 401) {
          sessionStorage.clear();
          window.location.href = '../../../login';
        } else if (responseDevices == 403) {
          document.getElementById('infoDevices').innerHTML = '<p>Error 403. No Autorizado.</p>';
        } else if (responseDevices == 404) {
          document.getElementById('infoDevices').innerHTML = '<p>Error 404. No Encontrado.</p>';
        } else {
          console.error('Ocurri&oacute; un error inesperado');
        }

      } else {
        document.getElementsByClassName('infoDevices')[0].style.display = 'none';
      }
  } catch (error){
    console.error(error);
  }
  
  // Summary tickets
  try {
    const listIncidencias = document.getElementById('listIncidencias');
    let response = await fetch(userData.type_user == "C" ? endpointSummaryTicketsCustomer : endpointSummaryTicketsSupport, options);
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
      listIncidencias.innerHTML = '<li class="list-group-item d-flex justify-content-between align-items-center">Error 404. No Encontrado.</li>';
    } else if (response.status == 403) {
      listIncidencias.innerHTML = '<li class="list-group-item d-flex justify-content-between align-items-center">Error 403. No Autorizado.</li>';
    }
  } catch (error) {
    console.error(error)
  }
}

const pushContent = async () => {
  const container = document.getElementById('mainDinamic');
  container.setAttribute('pagename', 'bienvenido');
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
                <p id='infoUser' class="m-3"></p>
              </div>
            </div>

            <div class="col-sm-12 col-md-12 col-lg-12 col-lx-12 infoDevices">
              <div class="card">
                <div class="card-header">
                  <h5 class="text-center">Dispositivos</h5>
                </div>
                <div class="card-body">
                  <div id="infoDevices" class="row"></div>
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

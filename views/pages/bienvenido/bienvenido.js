const bienvenido = async () => {
  const userDataString = sessionStorage.getItem('user');
  const userData = JSON.parse(userDataString);
  
  if (userData == null) {
    window.location.href = '../../../login.html';
  }
  
  const endpointInfoCustomer = 'http://127.0.0.1:8000/info/customer';
  const endpointInfoDevices = 'http://127.0.0.1:8000/info/customer/devices';
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
        
      }else if (response.status == 401) {
        console.error(response.status);
      }else if (response.status == 403) {
        console.error(response.status);
      }else if (response.status == 404 || response.status == 400) {
        console.error(response.status);
      }else {
          console.error('Error', response.status);
      }
  } catch (error){
    console.error(error);
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
  `;
  container.innerHTML = content;
}

document.addEventListener('DOMContentLoaded', bienvenido);

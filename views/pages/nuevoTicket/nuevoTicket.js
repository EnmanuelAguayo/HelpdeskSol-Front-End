const getServiceType = async () => {
    const userDataString = sessionStorage.getItem('user');
    const userData = JSON.parse(userDataString);
    
    if (userData == null) {
        window.location.href = '../../../login';
    };

    const endpointListServiceType = 'http://127.0.0.1:8000/list/service-type';

    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + userData.token
        }
    }

    try {
        const response = await fetch(endpointListServiceType, options);
        if (response.status == 200) {
            let data = await response.json();
            const select = document.getElementById('serviceType');

            data.forEach(service =>{
                let optionElement = document.createElement('option');
                optionElement.value = service.id;
                optionElement.text = service.name;
                select.appendChild(optionElement);
            });

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
    } catch (error) {
        console.error('Error', error);
    }


}

const pushContent = async () => {
    const container = document.getElementById('mainDinamic');
    container.setAttribute('pageName', 'nuevaIncidencia');
    const content = `
        <!-- Content Header (Page header) -->
        <div class="content-header">
        <div class="container-fluid">
            <div class="row mb-2">
            <div class="col-sm-6">
                <h1 class="m-0"><i class="nav-icon fas fa-laptop-medical"></i> Nuevo Ticket</h1>
            </div><!-- /.col -->
            <div class="col-sm-6">
                <ol class="breadcrumb float-sm-right">
                <li class="breadcrumb-item"><a href="#">Home</a></li>
                <li class="breadcrumb-item">Tickets</li>
                <li class="breadcrumb-item active">Nuevo Ticket</li>
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
            <div class="col-sm-12" id="formContainerNewTicket"></div>
            </div>
        </div>
        <!-- /.row -->
    </div><!-- /.container-fluid -->
    </section>
    `;
    container.innerHTML = content;
    renderFormNewTicket();
    tinyRender('textarea#description');
    document.getElementById('submitNewTicket').addEventListener('click', newTicket);
};

const newTicket = async () => {
    const userDataString = sessionStorage.getItem('user');
    const userData = JSON.parse(userDataString);
    
    if (userData == null) {
        window.location.href = '../../../login';
    };

    const endpointNewTicket = 'http://127.0.0.1:8000/ticket/new';
    const title = document.getElementById('title').value;
    const description = document.getElementById('notes').value;
    const serviceTypeId = document.getElementById('serviceType').value;
    const files = document.getElementById('files').files;

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + userData.token
        },
        body: JSON.stringify({
            'title': title,
            'description': description,
            'service_type_id': serviceTypeId,
            'files': files
        })
    }

    // Delete errors
    deleteErrors();

    try {
        const response = await fetch(endpointNewTicket, options);
        
        if (response.status == 201) {
            const data = await response.json();
            alert(data.Message + ' Ticket: ' + data.Ticket + '. Soporte: ' + data.Soporte);
        } else if (400) {
            let dataError = await response.json();
            for (let errorMessage in dataError) {
                showErrors(errorMessage + ': ' + dataError[errorMessage], 'formNewTicket');
            }
        } else if (response.status == 401) {
            window.location.href = '../../../login';
        } else if (response.status == 403) {
            window.location.href = '../error403.html';
        } else if (response.status == 404) {
            window.location.href = '../error404.html';
        }
    } catch (error) {
        console.error('Error', error);
    }
};

document.addEventListener('DOMContentLoaded', pushContent);
document.addEventListener('DOMContentLoaded', getServiceType);


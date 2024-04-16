const getTickets = async () => {
    const userDataString = sessionStorage.getItem('user');
    const userData = JSON.parse(userDataString);

    if (userData == null) {
        window.location.href = '../../../login.html';
    }

    const endpointListOpenTickets = 'http://127.0.0.1:8000/ticket/list/customer';
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + userData.token
        }
    };

    try {
        const response = await fetch(endpointListOpenTickets, options);
        
        if (response.status == 200) {
            let dataTicket = await response.json();
            let data = [];
            dataTicket.forEach(dataRow => {
                let subArray = [];
                subArray.push(`#${dataRow.ticket}`);
                subArray.push(dataRow.create_at);
                subArray.push(dataRow.title);
                subArray.push(dataRow.support);
                subArray.push(
                    `
                        <span class='badge badge-pill badge-success'> ${dataRow.state} </span>
                    `
                );
                subArray.push(
                    `
                        <button type='button' onClick='viewTicket(${dataRow.ticket})' id='${dataRow.ticket}' class='btn btn-info'>
                            <i class='far fa-solid fa-eye'></i>
                        </button>
                    `
                );
                data.push(subArray);
            });
            pushContent('dtIncidencias', data);
            
            
        } else if (response.status == 400) {
            console.error(response.status);
        } else if (response.status == 401) {
            window.location.href = '../../../login.html';
        } else if (response.status == 403) {
            console.error(response.status);
        } else if (response.status == 404) {
            console.error(response.status);
        }
    } catch (error) {
        console.error('Error', error);
    };

};

const pushContent = (nameDataTable, data) => {
    const container = document.getElementById('mainDinamic');
    container.setAttribute('pageName', 'incidencias');
    
    const content = `
        <!-- Content Header (Page header) -->
        <div class="content-header">
        <div class="container-fluid">
            <div class="row mb-2">
            <div class="col-sm-6">
                <h1 class="m-0"><i class="nav-icon fas fa-laptop-medical"></i> Incidencias</h1>
            </div><!-- /.col -->
            <div class="col-sm-6">
                <ol class="breadcrumb float-sm-right">
                <li class="breadcrumb-item"><a href="#">Home</a></li>
                <li class="breadcrumb-item">Tickets</li>
                <li class="breadcrumb-item active">Incidencias</li>
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
            <div class="col-sm-12">
                <div class="card">
                <!-- /.card-header -->
                <div class="card-body">
                    <table id="dtIncidencias" class="table table-bordered table-striped">
                    <thead>
                        <tr>
                        <th>Nro. ticket</th>
                        <th>Fecha de creaci&oacute;n</th>
                        <th>T&iacute;tulo</th>
                        <th>Asignado a</th>
                        <th>Estado</th>
                        <th>Ver ticket</th>
                        </tr>
                    </thead>
                    <tbody></tbody>
                    </table>
                </div>
                <!-- /.card-body -->
                </div>
                <!-- /.card -->
            </div>
            </div>
        </div>
        <!-- /.container-fluid -->
        </section>
    `;

    container.innerHTML = content;
    
    renderDataTable(nameDataTable, data);
    document.addEventListener('click', viewTicket);
};

const viewTicket = () => {
    
};

document.addEventListener('DOMContentLoaded', getTickets);


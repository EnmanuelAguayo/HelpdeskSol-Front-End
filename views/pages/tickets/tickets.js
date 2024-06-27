// API listar tickets de cliente y crear contenido (data) para la función (htmlListTickets)
const listTickets = async () => {
    const userDataString = sessionStorage.getItem('user');
    const userData = JSON.parse(userDataString);

    if (userData == null) {
        window.location.href = '../../../login';
    }

    const endpointListTickets = 'http://127.0.0.1:8000/ticket/list/customer';
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + userData.token
        }
    };

    const stateSelectorColor = {
        'Abierto': 'success',
        'En progreso': 'warning',
        'Solucionado': 'primary',
        'Aprobado': 'info',
        'Rechazado': 'danger',
        'Cierre automático': 'danger',
    };

    try {
        const response = await fetch(endpointListTickets, options);
        
        if (response.status == 200) {
            let dataTicket = await response.json();
            let dataAbiertos = [];
            let dataProgreso = [];
            let dataSolucionado = [];
            let dataAprobado = [];
            let dataRechazado = [];
            let dataCierreAut = [];

            dataTicket.forEach(dataRow => {
                switch (dataRow.state) {
                    case 'Abierto':
                        let idUnReadAbierto = []
                        let subArrayAbiertos = [];
                        subArrayAbiertos.push(`#${dataRow.ticket}`);
                        subArrayAbiertos.push(dataRow.title);
                        
                        if (dataRow.unread_history != null) {
                            let message = "";

                            for (let i=0; i < dataRow.unread_history.length; i++) {
                                idUnReadAbierto.push(dataRow.unread_history[i].id);
                                message += 
                                `
                                <span class="badge badge-pill badge-secondary"> ${dataRow.unread_history[i].sub_state}</span><br>
                                `
                            }
                            subArrayAbiertos.push(
                                `
                                    <button type='button' 
                                        onClick='htmlViewTicket(this, ${dataRow.ticket})' 
                                        id='${dataRow.ticket}' 
                                        approved='${dataRow.approved}' 
                                        class='btn btn-info' 
                                        statusKey='${dataRow.state}'
                                        subState='${dataRow.sub_state}'
                                        description='${dataRow.description}'
                                        ids-unreads='${idUnReadAbierto}'>
                                        <i class='far fa-solid fa-eye'></i>
                                    </button>
                                    <!-- Button trigger modal -->
                                    <button type="button" class="mt-2 btn btn-dark btn-sm btn-message-progress" data-toggle="modal" data-target="#modal-message-progress${dataRow.ticket}">
                                        <i class="nav-icon far fa-envelope"></i> ${dataRow.unread_history.length}
                                    </button>

                                    <!-- Modal -->
                                    <div class="modal fade" id="modal-message-progress${dataRow.ticket}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div class="modal-dialog">
                                            <div class="modal-content">
                                            <div class="modal-header">
                                                <h5 class="modal-title" id="exampleModalLabel">Notificaci&oacute;n de movimientos</h5>
                                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                            <div class="modal-body">
                                                ${message}
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                `
                            );
                        }else if (dataRow.unread_history == null) {
                            subArrayAbiertos.push(
                                `
                                    <button type='button' 
                                        onClick='htmlViewTicket(this, ${dataRow.ticket})' 
                                        id='${dataRow.ticket}' 
                                        approved='${dataRow.approved}' 
                                        class='btn btn-info' 
                                        statusKey='${dataRow.state}'
                                        subState='${dataRow.sub_state}'
                                        description='${dataRow.description}'>
                                        <i class='far fa-solid fa-eye'></i>
                                    </button>
                                `
                            );
                            
                        }
                        dataAbiertos.push(subArrayAbiertos);
                        break;
                    case 'En progreso':
                        let idUnReadProgreso = [];
                        let subArrayProgreso = [];
                        subArrayProgreso.push(`#${dataRow.ticket}`);
                        subArrayProgreso.push(dataRow.title);
                        
                        if (dataRow.unread_history != null) {
                            let message = "";
                            for (let i=0; i < dataRow.unread_history.length; i++) {
                                idUnReadProgreso.push(dataRow.unread_history[i].id);
                                message += 
                                `
                                <span class="badge badge-pill badge-secondary"> ${dataRow.unread_history[i].sub_state}</span><br>
                                `
                            }
                            subArrayProgreso.push(
                                `
                                    <button type='button' 
                                        onClick='htmlViewTicket(this, ${dataRow.ticket})' 
                                        id='${dataRow.ticket}' 
                                        approved='${dataRow.approved}' 
                                        class='btn btn-info' 
                                        statusKey='${dataRow.state}'
                                        subState='${dataRow.sub_state}'
                                        description='${dataRow.description}'
                                        ids-unreads='${idUnReadProgreso}'>
                                        <i class='far fa-solid fa-eye'></i>
                                    </button>
                                    <!-- Button trigger modal -->
                                    <button type="button" class="mt-2 btn btn-dark btn-sm btn-message-progress" data-toggle="modal" data-target="#modal-message-progress${dataRow.ticket}">
                                        <i class="nav-icon far fa-envelope"></i> ${dataRow.unread_history.length}
                                    </button>

                                    <!-- Modal -->
                                    <div class="modal fade" id="modal-message-progress${dataRow.ticket}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div class="modal-dialog">
                                            <div class="modal-content">
                                            <div class="modal-header">
                                                <h5 class="modal-title" id="exampleModalLabel">Notificaci&oacute;n de movimientos</h5>
                                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                            <div class="modal-body">
                                                ${message}
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                `
                            );
                        }else {
                            subArrayProgreso.push(
                                `
                                    <button type='button' 
                                        onClick='htmlViewTicket(this, ${dataRow.ticket})' 
                                        id='${dataRow.ticket}' 
                                        approved='${dataRow.approved}' 
                                        class='btn btn-info' 
                                        statusKey='${dataRow.state}'
                                        subState='${dataRow.sub_state}'
                                        description='${dataRow.description}'>
                                        <i class='far fa-solid fa-eye'></i>
                                    </button>
                                `
                            );
                        }
                        dataProgreso.push(subArrayProgreso);
                        break;
                    case 'Solucionado':
                        let idUnReadSolucionado = [];
                        let subArraySolucionado = [];
                        subArraySolucionado.push(`#${dataRow.ticket}`);
                        subArraySolucionado.push(dataRow.title);
                        if (dataRow.unread_history != null) {
                            let message = "";
                            for (let i=0; i < dataRow.unread_history.length; i++) {
                                idUnReadSolucionado.push(dataRow.unread_history[i].id);
                                message += 
                                `
                                <span class="badge badge-pill badge-secondary"> ${dataRow.unread_history[i].sub_state}</span><br>
                                `
                            }
                            subArraySolucionado.push(
                                `
                                    <button type='button' 
                                        onClick='htmlViewTicket(this, ${dataRow.ticket})' 
                                        id='${dataRow.ticket}' 
                                        approved='${dataRow.approved}' 
                                        class='btn btn-info' 
                                        statusKey='${dataRow.state}'
                                        subState='${dataRow.sub_state}'
                                        description='${dataRow.description}'
                                        ids-unreads='${idUnReadSolucionado}'>
                                        <i class='far fa-solid fa-eye'></i>
                                    </button>
                                    <!-- Button trigger modal -->
                                    <button type="button" class="mt-2 btn btn-dark btn-sm btn-message-progress" data-toggle="modal" data-target="#modal-message-progress${dataRow.ticket}">
                                        <i class="nav-icon far fa-envelope"></i> ${dataRow.unread_history.length}
                                    </button>

                                    <!-- Modal -->
                                    <div class="modal fade" id="modal-message-progress${dataRow.ticket}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div class="modal-dialog">
                                            <div class="modal-content">
                                            <div class="modal-header">
                                                <h5 class="modal-title" id="exampleModalLabel">Notificaci&oacute;n de movimientos</h5>
                                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                            <div class="modal-body">
                                                ${message}
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                `
                            )
                        }else {
                            subArraySolucionado.push(
                                `
                                    <button type='button' 
                                        onClick='htmlViewTicket(this, ${dataRow.ticket})' 
                                        id='${dataRow.ticket}' 
                                        approved='${dataRow.approved}' 
                                        class='btn btn-info' 
                                        statusKey='${dataRow.state}'
                                        subState='${dataRow.sub_state}'
                                        description='${dataRow.description}'>
                                        <i class='far fa-solid fa-eye'></i>
                                    </button>
                                `
                            );
                        }
                        dataSolucionado.push(subArraySolucionado);
                        break;
                    case 'Aprobado':
                        let idUnReadAprobado = [];
                        let subArrayAprobado = [];
                        subArrayAprobado.push(`#${dataRow.ticket}`);
                        subArrayAprobado.push(dataRow.title);
                        if (dataRow.unread_history != null) {
                            let message = "";
                            for (let i=0; i < dataRow.unread_history.length; i++) {
                                idUnReadAprobado.push(dataRow.unread_history[i].id);
                                message += 
                                `
                                <span class="badge badge-pill badge-secondary"> ${dataRow.unread_history[i].sub_state}</span><br>
                                `
                            }
                            subArrayAprobado.push(
                                `
                                    <button type='button' 
                                        onClick='htmlViewTicket(this, ${dataRow.ticket})' 
                                        id='${dataRow.ticket}' 
                                        approved='${dataRow.approved}' 
                                        class='btn btn-info' 
                                        statusKey='${dataRow.state}'
                                        subState='${dataRow.sub_state}'
                                        description='${dataRow.description}'
                                        ids-unreads='${idUnReadAprobado}'>
                                        <i class='far fa-solid fa-eye'></i>
                                    </button>
                                    <!-- Button trigger modal -->
                                    <button type="button" class="mt-2 btn btn-dark btn-sm btn-message-progress" data-toggle="modal" data-target="#modal-message-progress${dataRow.ticket}">
                                        <i class="nav-icon far fa-envelope"></i> ${dataRow.unread_history.length}
                                    </button>

                                    <!-- Modal -->
                                    <div class="modal fade" id="modal-message-progress${dataRow.ticket}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div class="modal-dialog">
                                            <div class="modal-content">
                                            <div class="modal-header">
                                                <h5 class="modal-title" id="exampleModalLabel">Notificaci&oacute;n de movimientos</h5>
                                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                            <div class="modal-body">
                                                ${message}
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                `
                            )
                        }else {
                            subArrayAprobado.push(
                                `
                                    <button type='button' 
                                        onClick='htmlViewTicket(this, ${dataRow.ticket})' 
                                        id='${dataRow.ticket}' 
                                        approved='${dataRow.approved}' 
                                        class='btn btn-info' 
                                        statusKey='${dataRow.state}'
                                        subState='${dataRow.sub_state}'
                                        description='${dataRow.description}'>
                                        <i class='far fa-solid fa-eye'></i>
                                    </button>
                                `
                            );
                        }
                        dataAprobado.push(subArrayAprobado);
                        break;
                    case 'Rechazado':
                        let idUnReadRechazado = [];
                        let subArrayRechazado = [];
                        subArrayRechazado.push(`#${dataRow.ticket}`);
                        subArrayRechazado.push(dataRow.title);
        
                        if (dataRow.unread_history != null) {
                            let message = "";
                            for (let i=0; i < dataRow.unread_history.length; i++) {
                                idUnReadRechazado.push(dataRow.unread_history[i].id);
                                message += 
                                `
                                <span class="badge badge-pill badge-secondary"> ${dataRow.unread_history[i].sub_state}</span><br>
                                `
                            }
                            subArrayRechazado.push(
                                `
                                    <button type='button' 
                                        onClick='htmlViewTicket(this, ${dataRow.ticket})' 
                                        id='${dataRow.ticket}' 
                                        approved='${dataRow.approved}' 
                                        class='btn btn-info' 
                                        statusKey='${dataRow.state}'
                                        subState='${dataRow.sub_state}'
                                        description='${dataRow.description}'
                                        ids-unreads='${idUnReadRechazado}'>
                                        <i class='far fa-solid fa-eye'></i>
                                    </button>
                                    <!-- Button trigger modal -->
                                    <button type="button" class="mt-2 btn btn-dark btn-sm btn-message-progress" data-toggle="modal" data-target="#modal-message-progress${dataRow.ticket}">
                                        <i class="nav-icon far fa-envelope"></i> ${dataRow.unread_history.length}
                                    </button>

                                    <!-- Modal -->
                                    <div class="modal fade" id="modal-message-progress${dataRow.ticket}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div class="modal-dialog">
                                            <div class="modal-content">
                                            <div class="modal-header">
                                                <h5 class="modal-title" id="exampleModalLabel">Notificaci&oacute;n de movimientos</h5>
                                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                            <div class="modal-body">
                                                ${message}
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                `
                            );
                        }else {
                            subArrayRechazado.push(
                                `
                                    <button type='button' 
                                        onClick='htmlViewTicket(this, ${dataRow.ticket})' 
                                        id='${dataRow.ticket}' 
                                        approved='${dataRow.approved}' 
                                        class='btn btn-info' 
                                        statusKey='${dataRow.state}'
                                        subState='${dataRow.sub_state}'
                                        description='${dataRow.description}'>
                                        <i class='far fa-solid fa-eye'></i>
                                    </button>
                                `
                            );
                        }
                        dataRechazado.push(subArrayRechazado);
                        
                        break;
                    case 'Cierre automático':
                        let subArrayCierreAut = [];
                        subArrayCierreAut.push(`#${dataRow.ticket}`);
                        subArrayCierreAut.push(dataRow.title);
                        subArrayCierreAut.push(
                            `
                                <button type='button' 
                                    onClick='htmlViewTicket(this, ${dataRow.ticket})' 
                                    id='${dataRow.ticket}' 
                                    approved='${dataRow.approved}' 
                                    class='btn btn-info' 
                                    statusKey='${dataRow.state}'
                                    subState='${dataRow.sub_state}'
                                    description='${dataRow.description}'>
                                    <i class='far fa-solid fa-eye'></i>
                                </button>
                            `
                        );
                        dataCierreAut.push(subArrayCierreAut);
                        break;        
                    default:
                        break;
                }
            });
            let dictDataTable = {
                'data_table': [
                    'dtAbiertos','dtProgreso', 'dtSolucionado', 'dtAprobado', 'dtRechazado', 'dtCierreAut'
                ],
                'data': [
                    dataAbiertos, dataProgreso, dataSolucionado, dataAprobado, dataRechazado, dataCierreAut
                ]
            }
            htmlListTickets(dictDataTable['data_table'], dictDataTable['data']);
        } else if (response.status == 400) {
            console.error(response.status);
        } else if (response.status == 401) {
            sessionStorage.clear();
            window.location.href = '../../../login';
        } else if (response.status == 403) {
            window.location.href = '../error403.html';
        } else if (response.status == 404) {
            window.location.href = '../error404.html';
        }
    } catch (error) {
        console.error('Error', error);
    };

};

// HTML Listar tickets en el front (Activos, En proceso, Resueltos)
const htmlListTickets = (nameDataTable, data) => {
    const container = document.getElementById('mainDinamic');
    container.setAttribute('pagename', 'tickets');
    
    const content = `
        <!-- Content Header (Page header) -->
        <div class="content-header">
        <div class="container-fluid">
            <div class="row mb-2">
            <div class="col-sm-6">
                <h1 class="m-0">Tickets</h1>
            </div><!-- /.col -->
            <div class="col-sm-6">
                <ol class="breadcrumb float-sm-right">
                <li class="breadcrumb-item"><a href="#">Home</a></li>
                <li class="breadcrumb-item">Tickets</li>
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
            <div class="col-sm-12" style="overflow-x: auto !important; height: 500vh">
                <!-- Kanban -->
                    <div class="scroll-div bg-light p-3 border">
                        <div class="content-scroll">
                            <div class="content-wrapper kanban" style="min-height: 751px; margin-left: 0px !important">
                                <section class="content pb-3">
                                    <div class="container-fluid h-100">
                                        <div class="card card-row card-primary" style="height:auto;">
                                            <div class="card-header">
                                                <h3 class="card-title">
                                                    Abiertos
                                                </h3>
                                            </div>
                                            <div id="abierto" class="card-body">
                                                <table id="dtAbiertos" class="table table-bordered table-striped">
                                                    <thead>
                                                        <tr>
                                                            <th>Nro. ticket</th>
                                                            <th>T&iacute;tulo</th>
                                                            <th>Ver ticket</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody></tbody>
                                                </table>
                                            </div>
                                        </div>
                                        <div class="card card-row card-warning" style="height:auto;">
                                            <div class="card-header">
                                                <h3 class="card-title">
                                                    En Progreso
                                                </h3>
                                            </div>
                                            <div id="progreso" class="card-body">
                                                <table id="dtProgreso" class="table table-bordered table-striped">
                                                    <thead>
                                                        <tr>
                                                            <th>Nro. ticket</th>
                                                            <th>T&iacute;tulo</th>
                                                            <th>Ver ticket</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody></tbody>
                                                </table>
                                            </div>
                                        </div>
                                        <div class="card card-row card-info" style="height:auto;">
                                            <div class="card-header bg-info">
                                                <h3 class="card-title">
                                                    Solucionado por soporte
                                                </h3>
                                            </div>
                                            <div id="solucionado" class="card-body">
                                                <table id="dtSolucionado" class="table table-bordered table-striped">
                                                    <thead>
                                                        <tr>
                                                            <th>Nro. ticket</th>
                                                            <th>T&iacute;tulo</th>
                                                            <th>Ver ticket</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody></tbody>
                                                </table>
                                            </div>
                                        </div>
                                        <div class="card card-row card-success" style="height:auto;">
                                            <div class="card-header">
                                                <h3 class="card-title">
                                                    Aprobados
                                                </h3>
                                            </div>
                                            <div id="aprobado" class="card-body">
                                                <table id="dtAprobado" class="table table-bordered table-striped">
                                                    <thead>
                                                        <tr>
                                                            <th>Nro. ticket</th>
                                                            <th>T&iacute;tulo</th>
                                                            <th>Ver ticket</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody></tbody>
                                                </table>
                                            </div>
                                        </div>
                                        <div class="card card-row card-danger" style="height:auto;">
                                            <div class="card-header">
                                                <h3 class="card-title">
                                                    Rechazados
                                                </h3>
                                            </div>
                                            <div id="rechazado" class="card-body">
                                                <table id="dtRechazado" class="table table-bordered table-striped">
                                                    <thead>
                                                        <tr>
                                                            <th>Nro. ticket</th>
                                                            <th>T&iacute;tulo</th>
                                                            <th>Ver ticket</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody></tbody>
                                                </table>
                                            </div>
                                        </div>
                                        <div class="card card-row card-danger" style="height:auto;">
                                            <div class="card-header">
                                                <h3 class="card-title">
                                                    Cierre autom&aacute;tico
                                                </h3>
                                            </div>
                                            <div id="cierreAut" class="card-body">
                                                <table id="dtCierreAut" class="table table-bordered table-striped">
                                                    <thead>
                                                        <tr>
                                                            <th>Nro. ticket</th>
                                                            <th>T&iacute;tulo</th>
                                                            <th>Ver ticket</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody></tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div> 
                <!-- kanban -->
            </div><!-- /.col -->
            </div>
        </div>
        <!-- /.container-fluid -->
        </section>
    `;

    container.innerHTML = content;
    for (let i=0; i<6; i++) {
        renderDataTable(nameDataTable[i], data[i]);
    }
    
};

// HTML Renderizar información del ticket (View and TimeLine) al dar click en el registro

const htmlViewTicket = (element, ticket) => { //Si la página viewticket cargó correctamente usamos el parámetro ticket para enviar las historias no leídas
   
    const container = document.getElementById('mainDinamic');
    const checkpagename = container.getAttribute('pagename');
    
    if (checkpagename == 'viewTicket') { // Comprobamos si la página de vista ha cargado correctamente
        check_target_and_scroll();

        if (element) {
            endPointReadsHistories(element);
        }

    } else {
        container.setAttribute('pagename', 'viewTicket');
        
        const stateSelectorColor = {
            'Abierto': 'success',
            'En progreso': 'warning',
            'Solucionado': 'primary',
            'Aprobado': 'info',
            'Rechazado': 'danger',
            'Cierre automático': 'danger',
        };
        const statusKey = element.getAttribute('statusKey');
        const content = ` 
            <!-- Content Header (Page header) -->
            <div class="content-header">
                <div class="container-fluid">
                <div class="row mb-2">
                    <div class="col-sm-6">
                        <h1 class="m-0"><i class="nav-icon fas fa-clock"></i> Ticket</h1>
                    </div>
                    <!-- /.col -->
                    <div class="col-sm-6">
                        <ol class="breadcrumb float-sm-right">
                            <li class="breadcrumb-item"><a href="#">Home</a></li>
                            <li class="breadcrumb-item">Ticket</li>
                            <li class="breadcrumb-item active">Ver ticket</li>
                        </ol>
                    </div><!-- /.col -->
                </div><!-- /.row -->
                </div><!-- /.container-fluid -->
            </div>
            <!-- /.content-header -->
    
            <section class="content">
                <div class="container-fluid">
                <div class="row">
                    <h3 id="stateTicket">
                        <strong>
                            <span class="badge badge-pill badge-${stateSelectorColor[statusKey]}" id="title"></span>
                            <input type="hidden" value="" id="description">
                        </strong>
                    </h3>
                    <div class="col-sm-12 card bg-white p-4">
                        <div class="row">
                            <div class="col-sm-6 col-md-6 col-lg-6 col-lx-6">
                            <div class="row">
                                <!-- list-group -->
                                <div class="col-6 mb-2">
                                    <b>Estado:</b>
                                </div>
                                <div class="col-6 mb-2" id="state"></div>
                                <!-- list-group -->
                                <div class="col-6 mb-2">
                                    <b>Prioridad:</b>
                                </div>
                                <div class="col-6 mb-2" id="priority"></div>
                                <!-- list-group -->
                                <div class="col-6 mb-2">
                                    <b>Fecha de creaci&oacute;n:</b>
                                </div>
                                <div class="col-6 mb-2" id="createAt"></div>
                            </div>
                            </div>
                            <!-- /. left -->
                            <div class="col-sm-6 col-md-6 col-lg-6 col-lx-6">
                            <div class="row">
                                <!-- list-group -->
                                <div class="col-6 mb-2">
                                    <b>Usuario:</b>
                                </div>
                                <div class="col-6 mb-2" id="user"></div>
                                <!-- list-group -->
                                <div class="col-6 mb-2">
                                    <b>Categor&iacute;a:</b>
                                </div>
                                <div class="col-6 mb-2" id="category"></div>
                                <!-- list-group -->
                                <div class="col-6 mb-2">
                                    <b>Tipo de servicio:</b>
                                </div>
                                <div class="col-6 mb-2" id="serviceType"></div>
                                <!-- list-group -->
                                <div class="col-6 mb-2">
                                    <b>Asignado a:</b>
                                </div>
                                <div class="col-6 mb-2" id="support"></div>
                            </div>
                            </div>
                            <!-- /. right -->
                        </div>
                    </div>
                    <div class="col-sm-12 card p-2">
                    <!-- The timeline -->
                    <div class="timeline timeline-inverse"></div>
                    </div>
                    <div id="target"></div>
                    <div class="col-sm-12 card p-2" id="formContainerResponseTicket"></div>
                </div>
                </div>
                <!-- /.container-fluid -->
            </section>
        `
        container.innerHTML = content;
        viewTicket(ticket);
        timeLine(ticket, element.getAttribute('description'), element.getAttribute('ids-unreads'));
    
        // Renderizar formulario de respuesta en caso que el ticket aún se encuentre en los siguientes estados (Abierto, En progreso, Solucionado)
        const verifyTicketApproved = element.getAttribute('approved');
    
        if (
            statusKey == 'Abierto' ||
            statusKey == 'En progreso' ||
            statusKey == 'Solucionado'
        ) {
            let showApprovedCheck = false
            if (statusKey == 'Solucionado') {
                showApprovedCheck = true
            }
            renderFormResponseTicket(ticket, showApprovedCheck);
            tinyRender('textarea#comment');
    
            document.getElementById('submitResponseTicket').addEventListener('click', responseTicket);
        } else if (
            verifyTicketApproved == 'true' ||
            statusKey == 'Rechazado' ||
            statusKey == 'Cierre Automático'
        ) {
            document.getElementById('formContainerResponseTicket').style.display = 'none';
        }
    }
};

// API View ticket
const viewTicket = async (ticket) => {
    const userDataString = sessionStorage.getItem('user');
    const userData = JSON.parse(userDataString);
    if (userData == null) {
        window.location.href = '../../../login/';
    };

    const endpointViewTicket = 'http://127.0.0.1:8000/ticket/view/' + ticket;
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + userData.token
        }
    }

    try {
        const response = await fetch(endpointViewTicket, options);
        if (response.status == 200) {
            const data = await response.json();

            // Get Dom elements
            const title = document.getElementById('title');
            const state = document.getElementById('state');
            const priority = document.getElementById('priority');
            const createAt = document.getElementById('createAt');
            const user = document.getElementById('user');
            const category = document.getElementById('category');
            const serviceType = document.getElementById('serviceType');
            const support = document.getElementById('support');
            const description = document.getElementById('description');

            // Set Dom elements
            title.textContent = `#Ticket ${data.ticket} - ${data.title}`;
            state.textContent = data.state;
            priority.textContent = data.priority;
            createAt.innerHTML = `${data.create_at} <i class="fas fa-clock"></i>`;
            user.textContent = data.user;
            category.textContent = data.category;
            serviceType.textContent = data.service_type;
            support.textContent = data.support;
            description.value = data.description;

            const strongTicketValue = document.createElement('strong');
            const spanTicketValue = document.createElement('span');

            spanTicketValue.setAttribute('id', 'verifyTicketApproved');
            spanTicketValue.className = 'badge badge-pill badge-secondary';

            if (data.approved[0]) {
                spanTicketValue.textContent = 'Ticket aprobado por el cliente';
                spanTicketValue.setAttribute('value', true);
            } else {
                spanTicketValue.setAttribute('value', false);
            }
            strongTicketValue.appendChild(spanTicketValue);
            document.getElementById('stateTicket').appendChild(strongTicketValue);

            
        } else {
            console.error(response.status);
        }
    } catch (error){
        console.error('Error', error);
    }

}

// API TimeLine
const timeLine = async (ticket, ticketDescription, idsUnReads) => {
    const userDataString = sessionStorage.getItem('user');
    const userData = JSON.parse(userDataString);
    if (userData == null) {
        window.location.href = '../../../login';
    };

    const endpointTimeLine = 'http://127.0.0.1:8000/ticket/timeline/' + ticket;
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + userData.token
        }
    }

    // Captura de elementos no leídos
    const unreads = [];

    try {
        const response = await fetch(endpointTimeLine, options);

        if (response.status == 200) {
            let data = await response.json();
            const timeLineContainer = document.querySelector('div.timeline');
            
            // Corroborar si hay elementos para mostrar
            if (data.length > 0) {
                const monthNames = ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'];
                const userOptions = ['TC', 'BC', 'LC', 'TA', 'CL', 'R1'];
                const supportOptions = ['AS', 'BS', 'LS', 'SS', 'R', 'RR', 'R2'];
                const automaticOptions = ['CA'];

                // Iterar elementos
                data.forEach((history, index) => {
                    /*
                    Al iterar cada elemento se evaluará si item = 0. 
                    1- Si es Verdadero: crea un elemento time-label para segmentar las historias por fecha y time-line-item para mostrar
                    el movimiento por hora en esa fecha.
                    2- Si es Falso: A través de otra condicional evalúa si la fecha es igual al item anterior. Si es verdadero
                    entonces se evitará crear el elemento time-label de nuevo para pasar a crear directamente time-line-item.
                    
                    Con esto lograremos agrupar el historial del ticket por fecha y posicionando como sub-contenido del mismo el movimiento
                    específico por hora y minutos.
                    */
                   
                   // Transformación de datos para fecha y hora
                   const dateHistory = new Date(history.create_at);
                   const stringActualDateHistory = history.create_at.split('T')[0];
                   const stringPreviousDateHistory = index > 0 ? data[index - 1].create_at.split('T')[0] : '';
                   const fullDate = (dateHistory.getDate()) + ' de ' + monthNames[dateHistory.getMonth()] + ' ' + dateHistory.getFullYear();
                   const hour = dateHistory.getHours();
                   const minutes = dateHistory.getMinutes() == 0 ? '00' : (dateHistory.getMinutes() <= 9 ? '0' + dateHistory.getMinutes() : dateHistory.getMinutes());
                   const fullTime = hour <= 12 ? hour + ':' + minutes + ' am' : hour + ':' + minutes + ' pm';
                   
                   if (stringActualDateHistory != stringPreviousDateHistory) {
                        /*
                            Crear elemento time-label y su contenido. Luego agregar con appendChild al timeLineContainer
                        */
                        const timeLabelDiv = document.createElement('div');
                        timeLabelDiv.className = 'time-label';
                        const timeLabelSpan = document.createElement('span');
                        timeLabelSpan.className = 'bg-secondary';
                        timeLabelSpan.innerHTML = fullDate;
                        timeLabelDiv.appendChild(timeLabelSpan);
                        timeLineContainer.appendChild(timeLabelDiv);

                        /*
                            Crear elemento timeline-item el color del mismo dependerá si la respuesta es del cliente o del soporte.
                            Toda respuesta relacionada al cliente será de color azul y del soporte color amarillo.
                        */
                                                    
                        // Crear sub contenido
                        const elementDiv = document.createElement('div');
                        const elementI = document.createElement('i');
                        const timeLineItemDiv = document.createElement('div');
                        const timeSpan = document.createElement('span');
                        const header = document.createElement('h3');
                        
                        // Set attribute
                        if (userOptions.includes(history.sub_state_simple)) {
                            elementI.className = 'fas fa-envelope bg-primary';   
                        } else if (supportOptions.includes(history.sub_state_simple)) {
                            elementI.className = 'fas fa-envelope bg-warning';
                        } else {
                            elementI.className = 'fas fa-envelope bg-secondary';
                        }
                        timeLineItemDiv.className = 'timeline-item';
                        timeSpan.className = 'time';
                        header.className = 'timeline-header';

                        // Set id last history
                        if ((data.length - 1) == index) {
                            header.setAttribute('id', 'history-last');
                        }
                       
                        // Append content
                        if (
                            history.sub_state_simple == 'TC' ||
                            history.sub_state_simple == 'BC' ||
                            history.sub_state_simple == 'LC' ||
                            history.sub_state_simple == 'TA' ||
                            history.sub_state_simple == 'CL' ||
                            history.sub_state_simple == 'R1'
                        ) {
                            // Mark unread
                            if (history.read_by_customer == false){
                                unreads.push(history.id);
                                header.innerHTML = history.sub_state + ' <a href="#">' + history.customer + '</a>' + "<span class='badge badge-pill badge-dark ml-3'><i class='nav-icon far fa-envelope'></i></span><br>";
                            }else{
                                header.innerHTML = history.sub_state + ' <a href="#">' + history.customer + '</a>';
                            }
                        } else if (
                            history.sub_state_simple == 'AS' ||
                            history.sub_state_simple == 'BS' ||
                            history.sub_state_simple == 'LS' ||
                            history.sub_state_simple == 'SS' ||
                            history.sub_state_simple == 'R' ||
                            history.sub_state_simple == 'R2'
                        ) {
                            // Mark unread
                            if (history.read_by_customer == false){
                                unreads.push(history.id);
                                header.innerHTML = history.sub_state + ' <a href="#">' + history.support + '</a>' + "<span class='badge badge-pill badge-dark ml-3'><i class='nav-icon far fa-envelope'></i></span><br>";
                            }else{
                                header.innerHTML = history.sub_state + ' <a href="#">' + history.support + '</a>';
                            }
            
                        } else if (
                            history.sub_state_simple == 'RR' ||
                            history.sub_state_simple == 'CA' 
                        ) {
                            // Mark unread
                            if (history.read_by_customer == false){
                                if (history.sub_state_simple == 'RR') {
                                    unreads.push(history.id);
                                    header.innerHTML = history.sub_state + ' <a href="#" class="text-secondary">Sistema</a>' + "<span class='badge badge-pill badge-dark ml-3'><i class='nav-icon far fa-envelope'></i></span><br>";
                                }else{
                                    header.innerHTML = history.sub_state + ' <a href="#" class="text-secondary">Sistema</a>';    
                                }
                            }else{
                                header.innerHTML = history.sub_state + ' <a href="#" class="text-secondary">Sistema</a>';
                            }
                        };
                                
                        timeSpan.innerHTML = '<i class="far fa-clock"></i> ' + fullTime;
                        timeLineItemDiv.appendChild(timeSpan);
                        timeLineItemDiv.appendChild(header);
                        
                        // Mostrar comentarios
                        if (history.sub_state_simple == 'R1' || history.sub_state_simple == 'R2' || history.sub_state_simple == 'TC') {
                            const body = document.createElement('div');
                            
                            body.className = 'timeline-body';
                            if (history.sub_state_simple == 'TC') {
                                body.innerHTML = ticketDescription;
                            } else {
                                body.innerHTML = history.comment.comment;
                                
                                // Mostrar Files
                                if (history.comment.files.length > 0) {
                                    const elementPFile = document.createElement('p');
                                    const urlFiles = history.comment.files;
                                    
                                    // Iterar files
                                    urlFiles.forEach(file => {
                                        // Crear elemento aHref y agregar link para visualizar archivo en una nueva pestaña
                                        const elementAHref = document.createElement('a');
                                        const elementSpanNameFile = document.createElement('span');
                                        const elementBr = document.createElement('br');
                                        elementBr.style.marginBottom = '8%';
                                        elementAHref.setAttribute('href', 'http://127.0.0.1:8000' + file.url);
                                        elementAHref.setAttribute('target', 'blank');

                                        // Crear elementos de imagen y modificar su tamaño 
                                        const elementImgFile = document.createElement('img');
                                        elementImgFile.setAttribute('width', '10%');
                                        
                                        if (
                                            file.url.split('.')[1] == 'png' ||
                                            file.url.split('.')[1] == 'jpg' ||
                                            file.url.split('.')[1] == 'jpeg' ||
                                            file.url.split('.')[1] == 'gif' 
                                        ) {
                                            
                                            elementImgFile.setAttribute('src', 'http://127.0.0.1:8000' + file.url);
                                            
                                            // Agregar elemento
                                            elementAHref.appendChild(elementImgFile);
                                            elementSpanNameFile.innerHTML = file.url.split('/')[3]; 
                                            elementAHref.appendChild(elementSpanNameFile);
                                            elementPFile.appendChild(elementBr);
                                            elementPFile.appendChild(elementAHref);
                                        } else if (
                                            file.url.split('.')[1] == 'doc' ||
                                            file.url.split('.')[1] == 'docx'
                                        ) {
                                            elementImgFile.setAttribute('src', '../../../public/adminlte.3.2.0/img/icons/word.png');

                                            // Agregar elemento
                                            elementAHref.appendChild(elementImgFile);
                                            elementSpanNameFile.innerHTML = file.url.split('/')[3]; 
                                            elementAHref.appendChild(elementSpanNameFile);
                                            elementPFile.appendChild(elementBr);
                                            elementPFile.appendChild(elementAHref);
                                        } else if (
                                            file.url.split('.')[1] == 'xls' ||
                                            file.url.split('.')[1] == 'xlsx' 
                                        ) {
                                            elementImgFile.setAttribute('src', '../../../public/adminlte.3.2.0/img/icons/excel.png');

                                            // Agregar elemento
                                            elementAHref.appendChild(elementImgFile);
                                            elementSpanNameFile.innerHTML = file.url.split('/')[3]; 
                                            elementAHref.appendChild(elementSpanNameFile);
                                            elementPFile.appendChild(elementBr);
                                            elementPFile.appendChild(elementAHref);
                                        } else if (
                                            file.url.split('.')[1] == 'ppt' ||
                                            file.url.split('.')[1] == 'pptx'
                                        ) {
                                            elementImgFile.setAttribute('src', '../../../public/adminlte.3.2.0/img/icons/powerpoint.png');

                                            // Agregar elemento
                                            elementAHref.appendChild(elementImgFile);
                                            elementSpanNameFile.innerHTML = file.url.split('/')[3]; 
                                            elementAHref.appendChild(elementSpanNameFile);
                                            elementPFile.appendChild(elementBr);
                                            elementPFile.appendChild(elementAHref);
                                        } else if (
                                            file.url.split('.')[1] == 'pdf'
                                        ) {
                                            elementImgFile.setAttribute('src', '../../../public/adminlte.3.2.0/img/icons/pdf.png');

                                            // Agregar elemento
                                            elementAHref.appendChild(elementImgFile);
                                            elementSpanNameFile.innerHTML = file.url.split('/')[3]; 
                                            elementAHref.appendChild(elementSpanNameFile);
                                            elementPFile.appendChild(elementBr);
                                            elementPFile.appendChild(elementAHref);
                                        }
                                    })
                                    body.appendChild(elementPFile);
                                }
                            }
                            timeLineItemDiv.appendChild(body);  
                        };

                        elementDiv.appendChild(elementI);
                        elementDiv.appendChild(timeLineItemDiv);
                        timeLineContainer.appendChild(elementDiv);
                    } else {
                        // Comparamos si la fecha actual que se está iterando es igual a la fecha del elemento anterior. Esto sirve para resumir movimientos de la misma fecha.
                        // Crear sub contenido
                        const elementDiv = document.createElement('div');
                        const elementI = document.createElement('i');
                        const timeLineItemDiv = document.createElement('div');
                        const timeSpan = document.createElement('span');
                        const header = document.createElement('h3');
                        
                        // Set attribute
                        if (userOptions.includes(history.sub_state_simple)) {
                            elementI.className = 'fas fa-envelope bg-primary';   
                        } else if (supportOptions.includes(history.sub_state_simple)) {
                            elementI.className = 'fas fa-envelope bg-warning';
                        } else {
                            elementI.className = 'fas fa-envelope bg-secondary';
                        }
                        timeLineItemDiv.className = 'timeline-item';
                        timeSpan.className = 'time';
                        header.className = 'timeline-header';
                        
                        // Set id last history
                        if ((data.length - 1) == index) {
                            header.setAttribute('id', 'history-last');
                        }
                          
                        // Append content
                        if (
                            history.sub_state_simple == 'TC' ||
                            history.sub_state_simple == 'BC' ||
                            history.sub_state_simple == 'LC' ||
                            history.sub_state_simple == 'TA' ||
                            history.sub_state_simple == 'CL' ||
                            history.sub_state_simple == 'R1'
                        ) {
                            // Mark unread
                            if (history.read_by_customer == false){
                                unreads.push(history.id);
                                header.innerHTML = history.sub_state + ' <a href="#">' + history.customer + '</a>' + "<span class='badge badge-pill badge-dark ml-3'><i class='nav-icon far fa-envelope'></i></span><br>";
                            }else{
                                header.innerHTML = history.sub_state + ' <a href="#">' + history.customer + '</a>';
                            }
                        } else if (
                            history.sub_state_simple == 'AS' ||
                            history.sub_state_simple == 'BS' ||
                            history.sub_state_simple == 'LS' ||
                            history.sub_state_simple == 'SS' ||
                            history.sub_state_simple == 'R' ||
                            history.sub_state_simple == 'R2'
                        ) {
                            // Mark unread
                            if (history.read_by_customer == false){
                                unreads.push(history.id);
                                header.innerHTML = history.sub_state + ' <a href="#">' + history.support + '</a>' + "<span class='badge badge-pill badge-dark ml-3'><i class='nav-icon far fa-envelope'></i></span><br>";
                            }else{
                                header.innerHTML = history.sub_state + ' <a href="#">' + history.support + '</a>';
                            }

                        } else if (
                            history.sub_state_simple == 'RR' ||
                            history.sub_state_simple == 'CA' 
                        ) {
                            // Mark unread
                            if (history.read_by_customer == false){
                                if (history.sub_state_simple == 'RR') {
                                    unreads.push(history.id);
                                    header.innerHTML = history.sub_state + ' <a href="#" class="text-secondary">Sistema</a>' + "<span class='badge badge-pill badge-dark ml-3'><i class='nav-icon far fa-envelope'></i></span><br>";
                                }
                            }else{
                                header.innerHTML = history.sub_state + ' <a href="#" class="text-secondary">Sistema</a>'
                            }
                            header.innerHTML = history.sub_state + ' <a href="#" class="text-secondary">Sistema</a>';
                        };
                        
                        timeSpan.innerHTML = '<i class="far fa-clock"></i> ' + fullTime;
                        timeLineItemDiv.appendChild(timeSpan);
                        timeLineItemDiv.appendChild(header);
                        
                        // Mostrar comentarios
                        if (history.sub_state_simple == 'R1' || history.sub_state_simple == 'R2') {
                            const body = document.createElement('div');
                            body.className = 'timeline-body';
                            body.innerHTML = history.comment.comment;
                            timeLineItemDiv.appendChild(body);
                            
                            // Mostrar Files
                            if (history.comment.files.length > 0) {
                                const elementPFile = document.createElement('p');
                                const urlFiles = history.comment.files;
                                
                                // Iterar files
                                urlFiles.forEach(file => {
                                    // Crear elemento aHref y agregar link para visualizar archivo en una nueva pestaña
                                    const elementAHref = document.createElement('a');
                                    const elementSpanNameFile = document.createElement('span');
                                    const elementBr = document.createElement('br');
                                    elementBr.style.marginBottom = '8%';
                                    elementAHref.setAttribute('href', 'http://127.0.0.1:8000' + file.url);
                                    elementAHref.setAttribute('target', 'blank');

                                    // Crear elementos de imagen y modificar su tamaño 
                                    const elementImgFile = document.createElement('img');
                                    elementImgFile.setAttribute('width', '10%');
                                    
                                    if (
                                        file.url.split('.')[1] == 'png' ||
                                        file.url.split('.')[1] == 'jpg' ||
                                        file.url.split('.')[1] == 'jpeg' ||
                                        file.url.split('.')[1] == 'gif' 
                                    ) {
                                        
                                        elementImgFile.setAttribute('src', 'http://127.0.0.1:8000' + file.url);
                                        
                                        // Agregar elemento
                                        elementAHref.appendChild(elementImgFile);
                                        elementSpanNameFile.innerHTML = file.url.split('/')[3]; 
                                        elementAHref.appendChild(elementSpanNameFile);
                                        elementPFile.appendChild(elementBr);
                                        elementPFile.appendChild(elementAHref);
                                    } else if (
                                        file.url.split('.')[1] == 'doc' ||
                                        file.url.split('.')[1] == 'docx'
                                    ) {
                                        elementImgFile.setAttribute('src', '../../../public/adminlte.3.2.0/img/icons/word.png');

                                        // Agregar elemento
                                        elementAHref.appendChild(elementImgFile);
                                        elementSpanNameFile.innerHTML = file.url.split('/')[3]; 
                                        elementAHref.appendChild(elementSpanNameFile);
                                        elementPFile.appendChild(elementBr);
                                        elementPFile.appendChild(elementAHref);
                                    } else if (
                                        file.url.split('.')[1] == 'xls' ||
                                        file.url.split('.')[1] == 'xlsx' 
                                    ) {
                                        elementImgFile.setAttribute('src', '../../../public/adminlte.3.2.0/img/icons/excel.png');

                                        // Agregar elemento
                                        elementAHref.appendChild(elementImgFile);
                                        elementSpanNameFile.innerHTML = file.url.split('/')[3]; 
                                        elementAHref.appendChild(elementSpanNameFile);
                                        elementPFile.appendChild(elementBr);
                                        elementPFile.appendChild(elementAHref);
                                    } else if (
                                        file.url.split('.')[1] == 'ppt' ||
                                        file.url.split('.')[1] == 'pptx'
                                    ) {
                                        elementImgFile.setAttribute('src', '../../../public/adminlte.3.2.0/img/icons/powerpoint.png');

                                        // Agregar elemento
                                        elementAHref.appendChild(elementImgFile);
                                        elementSpanNameFile.innerHTML = file.url.split('/')[3]; 
                                        elementAHref.appendChild(elementSpanNameFile);
                                        elementPFile.appendChild(elementBr);
                                        elementPFile.appendChild(elementAHref);
                                    } else if (
                                        file.url.split('.')[1] == 'pdf'
                                    ) {
                                        elementImgFile.setAttribute('src', '../../../public/adminlte.3.2.0/img/icons/pdf.png');

                                        // Agregar elemento
                                        elementAHref.appendChild(elementImgFile);
                                        elementSpanNameFile.innerHTML = file.url.split('/')[3]; 
                                        elementAHref.appendChild(elementSpanNameFile);
                                        elementPFile.appendChild(elementBr);
                                        elementPFile.appendChild(elementAHref);
                                    }
                                })
                                body.appendChild(elementPFile);
                            }
                        };

                        elementDiv.appendChild(elementI);
                        elementDiv.appendChild(timeLineItemDiv);
                        timeLineContainer.appendChild(elementDiv);
                    }
                });
            
            // End TimeLine
            const endTimeLineDiv = document.createElement('div');
            const endTimeLineIcon = document.createElement('i');
            endTimeLineIcon.className = 'far fa-clock bg-gray';
            endTimeLineDiv.appendChild(endTimeLineIcon);
            timeLineContainer.appendChild(endTimeLineDiv);

            } else {
                timeLineContainer.innerText = 'No hay historias para mostrar';
                timeLineContainer.className = '';
            }
        } else {
            console.error(response.status);
        }
    } catch (error) {
        console.error('Error', error);
    }

    htmlViewTicket(idsUnReads, 'default');
};

// API Response ticket
const responseTicket = async () => {
    userDataString = sessionStorage.getItem('user');
    userData = JSON.parse(userDataString)
    
    if (userData.token == null) {
        window.location.href = '../../../login';
    };

    const endpointNewTicket = 'http://127.0.0.1:8000/ticket/response/customer';
    const ticket = document.getElementById('ticket').value;
    const comment = document.getElementById('notes').value;
    const files = document.getElementById('files').files;
    let approved = "";

    try {
        approved = document.getElementById('approved').checked;
    } catch (error) {
        approved = "false";
    }

    const formData = new FormData();
    formData.append('ticket', ticket);
    formData.append('comment', comment);
    for (let i = 0; i < files.length; i++) {
        formData.append('files', files[i]);
    }
    formData.append('approved', approved);


    const options = {
        method: 'POST',
        headers: {
            'Authorization': 'Bearer ' + userData.token
        },
        body: formData
    };

    // Delete errors
    deleteErrors();

    try {
        const response = await fetch(endpointNewTicket, options);
        
        if (response.status == 201) {
            const data = await response.json();
            alert(data.Message);
            window.location.href = '../tickets';
        } else if (400) {
            let dataError = await response.json();
            for (let errorMessage in dataError) {
                showErrors(errorMessage + ': ' + dataError[errorMessage], 'formResponseTicket');
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
}

// Check target and scroll
const check_target_and_scroll = () => {
    const element = document.getElementById('history-last');

    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
};

const endPointReadsHistories = async (idsUnReads) => {
    
    //Check authentication jwt
    const userDataString = sessionStorage.getItem('user');
    const userData = JSON.parse(userDataString);

    if (userData.token == null) {
        window.location.href = '../../../login';
    }

    let arrString = idsUnReads.split(',');
    let arrInteger = [];
    for (let i = 0; i < arrString.length; i++) {
        arrInteger.push(parseInt(arrString[i]));
    }
    const jsonArrInteger = JSON.stringify({"id_histories": arrInteger});

    const endPointReadsHistories = 'http://127.0.0.1:8000/ticket/read-history-customer';
    const options = {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json',
            'Authorization': 'Bearer ' + userData.token
        },
        body: jsonArrInteger
    }
    

    try {
        const response = await fetch(endPointReadsHistories, options);
        if (response == 200) {
            const data = response.json();
            console.log(data);

        } else if (response.status == 400) {
            console.error(response.status);
        } else if (response.status == 401) {
            sessionStorage.clear();
            window.location.href = '../../../login';
        } else if (response.status == 403) {
            window.location.href = '../error403.html';
        } else if (response.status == 404) {
            window.location.href = '../error404.html';
        }

    } catch (error) {
        console.error('Error', error);
    }

}

document.addEventListener('DOMContentLoaded', listTickets);




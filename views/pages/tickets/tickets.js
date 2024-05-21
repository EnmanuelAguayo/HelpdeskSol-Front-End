// API listar tickets de cliente y crear contenido (data) para la función (htmlListTickets)
const listTickets = async () => {
    const userDataString = sessionStorage.getItem('user');
    const userData = JSON.parse(userDataString);

    if (userData == null) {
        window.location.href = '../../../login';
    }

    const endpointListOpenTickets = 'http://127.0.0.1:8000/ticket/list/customer';
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
                
                let statusKey = dataRow.state;
                subArray.push(
                    `
                        <span class='badge badge-pill badge-${stateSelectorColor[statusKey]}'> ${dataRow.state} </span>
                    `
                );
                subArray.push(
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
                data.push(subArray);
            });
            htmlListTickets('dtIncidencias', data);
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
                <li class="breadcrumb-item active">Tickets abiertos</li>
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
};

// HTML Renderizar información del ticket (View and TimeLine) al dar click en el registro
const htmlViewTicket = (element, ticket) => {
    const container = document.getElementById('mainDinamic');
    container.setAttribute('pageName', 'viewTicket');
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
                <div class="col-sm-12 card p-2" id="formContainerResponseTicket"></div>
            </div>
            </div>
            <!-- /.container-fluid -->
        </section>
    `
    container.innerHTML = content;
    viewTicket(ticket);
    timeLine(ticket, element.getAttribute('description'));

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
const timeLine = async (ticket, ticketDescription) => {
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
                            # User
                            ('TC', 'Ticket creado'),
                            ('BC', 'Ticket en bandeja del cliente'),
                            ('LC', 'Cliente abrió el ticket'),
                            ('TA', 'Ticket aprobado por el cliente'),
                            ('CL', 'Ticket calificado por el cliente'),

                            # Support
                            ('AS', 'Ticket asignado a soporte'),
                            ('BS', 'Ticket en bandeja del soporte'),
                            ('LS', 'Soporte abrió el ticket'),
                            ('SS', 'Ticket se marcó como solucionado por soporte'),
                            ('R', 'Ticket Rechazado por soporte'),
                            ('RR', 'Ticket reasignado a soporte'),

                            # Automatic
                            ('CA', 'Este ticket se cerró automáticamente porque han pasado 2 días sin respuesta del cliente desde la solución por parte de soporte.'),
                            ('R1', 'Respuesta de cliente'),
                            ('R2', 'Respuesta de soporte'),

                            Toda respuesta relacionada al cliente será de color azul y del soporte color amarillo. Al aprobar el ticket será de color verde.
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
                          
                        // Append content
                        if (
                            history.sub_state_simple == 'TC' ||
                            history.sub_state_simple == 'BC' ||
                            history.sub_state_simple == 'LC' ||
                            history.sub_state_simple == 'TA' ||
                            history.sub_state_simple == 'CL' ||
                            history.sub_state_simple == 'R1'
                        ) {
                            header.innerHTML = history.sub_state + ' <a href="#">' + history.customer + '</a>';
                        } else if (
                            history.sub_state_simple == 'AS' ||
                            history.sub_state_simple == 'BS' ||
                            history.sub_state_simple == 'LS' ||
                            history.sub_state_simple == 'SS' ||
                            history.sub_state_simple == 'R' ||
                            history.sub_state_simple == 'R2'
                        ) {
                            header.innerHTML = history.sub_state + ' <a href="#">' + history.support + '</a>';
                        } else if (
                            history.sub_state_simple == 'RR' ||
                            history.sub_state_simple == 'CA' 
                        ) {
                            header.innerHTML = history.sub_state + ' <a href="#" class="text-secondary">Sistema</a>';
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
                                body.innerHTML = history.comment;
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
                          
                        // Append content
                        if (
                            history.sub_state_simple == 'TC' ||
                            history.sub_state_simple == 'BC' ||
                            history.sub_state_simple == 'LC' ||
                            history.sub_state_simple == 'TA' ||
                            history.sub_state_simple == 'CL' ||
                            history.sub_state_simple == 'R1'
                        ) {
                            header.innerHTML = history.sub_state + ' <a href="#">' + history.customer + '</a>';
                        } else if (
                            history.sub_state_simple == 'AS' ||
                            history.sub_state_simple == 'BS' ||
                            history.sub_state_simple == 'LS' ||
                            history.sub_state_simple == 'SS' ||
                            history.sub_state_simple == 'R' ||
                            history.sub_state_simple == 'R2'
                        ) {
                            header.innerHTML = history.sub_state + ' <a href="#">' + history.support + '</a>';
                        } else if (
                            history.sub_state_simple == 'RR' ||
                            history.sub_state_simple == 'CA' 
                        ) {
                            header.innerHTML = history.sub_state + ' <a href="#" class="text-secondary">Sistema</a>';
                        };
                        
                        timeSpan.innerHTML = '<i class="far fa-clock"></i> ' + fullTime;
                        timeLineItemDiv.appendChild(timeSpan);
                        timeLineItemDiv.appendChild(header);
                        
                        // Mostrar comentarios
                        if (history.sub_state_simple == 'R1' || history.sub_state_simple == 'R2') {
                            const body = document.createElement('div');
                            body.className = 'timeline-body';
                            body.innerHTML = history.comment;
                            timeLineItemDiv.appendChild(body);  
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

    console.info(approved);
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

document.addEventListener('DOMContentLoaded', listTickets);


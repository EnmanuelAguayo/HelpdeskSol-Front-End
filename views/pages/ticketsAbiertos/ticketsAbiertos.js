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
                        <button type='button' onClick='renderTicketContent(${dataRow.ticket})' id='${dataRow.ticket}' class='btn btn-info'>
                            <i class='far fa-solid fa-eye'></i>
                        </button>
                    `
                );
                data.push(subArray);
            });
            listTickets('dtIncidencias', data);
            
            
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

            // Set Dom elements
            title.textContent = `#Ticket ${data.ticket} - ${data.title}`;
            state.textContent = data.state;
            priority.textContent = data.priority;
            createAt.innerHTML = `${data.create_at} <i class="fas fa-clock"></i>`;
            user.textContent = data.user;
            category.textContent = data.category;
            serviceType.textContent = data.service_type;
            support.textContent = data.support;
        } else {
            console.error(response.status);
        }
    } catch (error){
        console.error('Error', error);
    }

}

const listTickets = (nameDataTable, data) => {
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

const renderTicketContent = (ticket) => {
    if (ticket > 0) {
        ticketContent(ticket);
    };
};

const ticketContent = (ticket) => {
    viewTicket(ticket);
    const container = document.getElementById('mainDinamic');
    container.setAttribute('pageName', 'viewTicket');
    const content = ` 
    <!-- Content Header (Page header) -->
    <div class="content-header">
        <div class="container-fluid">
        <div class="row mb-2">
            <div class="col-sm-6">
            <h1 class="m-0"><i class="nav-icon fas fa-clock"></i> Ticket</h1>
            </div><!-- /.col -->
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
            <h3>
                <strong>
                    <span class="badge badge-pill badge-success" id="title"></span>
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
            <div class="timeline timeline-inverse">
                <!-- timeline time label -->
                <div class="time-label">
                <span class="bg-secondary">
                    22 de set 2022
                </span>
                </div>
                <!-- /.timeline-label -->
                <!-- timeline item -->
                <div>
                <i class="fas fa-envelope bg-success"></i>

                <div class="timeline-item">
                    <span class="time"><i class="far fa-clock"></i> 12:05</span>

                    <h3 class="timeline-header">Ticket creado por<a href="#"> Enmanuel Aguayo</a></h3>

                    <div class="timeline-body">
                    Etsy doostang zoodles disqus groupon greplin oooj voxy zoodles,
                    weebly ning heekya handango imeem plugg dopplr jibjab, movity
                    jajah plickers sifteo edmodo ifttt zimbra. Babblely odeo kaboodle
                    quora plaxo ideeli hulu weebly balihoo...
                    </div>
                </div>
                </div>
                <!-- END timeline item -->
                <!-- timeline item -->
                <div>
                <i class="fas fa-envelope bg-warning"></i>

                <div class="timeline-item">
                    <span class="time"><i class="far fa-clock"></i> 12:05 pm</span>

                    <h3 class="timeline-header border-0">Ticket asignado a <a href="#">Roberto Mart&iacute;nez</a>
                    </h3>
                </div>
                </div>
                <!-- END timeline item -->
                <!-- timeline item -->
                <div>
                <i class="fas fa-envelope bg-warning"></i>

                <div class="timeline-item">
                    <span class="time"><i class="far fa-clock"></i> 12:05 pm</span>

                    <h3 class="timeline-header">Ticket se encuentra en proceso <a href="#">Roberto Mart&iacute;nez</a></h3>
                    <!--<div class="timeline-footer">
                    <a href="#" class="btn btn-warning btn-flat btn-sm">View comment</a>
                    </div>-->
                </div>
                </div>
                <!-- END timeline item -->
                <!-- timeline item -->
                <div>
                <i class="fas fa-envelope bg-warning"></i>

                <div class="timeline-item">
                    <span class="time"><i class="far fa-clock"></i> 12:05 pm</span>

                    <h3 class="timeline-header">Respuesta de <a href="#">Roberto Mart&iacute;nez</a></h3>

                    <div class="timeline-body">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quam omnis corrupti pariatur corporis vel
                    voluptatibus rem est eius eos dignissimos quia laboriosam autem deserunt illum dolores odit, obcaecati
                    accusamus.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quam omnis corrupti pariatur corporis vel
                    voluptatibus rem est eius eos dignissimos quia laboriosam autem deserunt illum dolores odit, obcaecati
                    accusamus.
                    </div>

                </div>
                </div>
                <!-- END timeline item -->
                <!-- timeline item -->
                <div>
                <i class="fas fa-envelope bg-success"></i>

                <div class="timeline-item">
                    <span class="time"><i class="far fa-clock"></i> 12:05 pm</span>

                    <h3 class="timeline-header">Respuesta de <a href="#">Enmanuel Aguayo</a></h3>

                    <div class="timeline-body">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quam omnis corrupti pariatur corporis vel
                    voluptatibus rem est eius eos dignissimos quia laboriosam autem deserunt illum dolores odit, obcaecati
                    accusamus.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quam omnis corrupti pariatur corporis vel
                    voluptatibus rem est eius eos dignissimos quia laboriosam autem deserunt illum dolores odit, obcaecati
                    accusamus.
                    </div>

                </div>
                </div>
                <!-- END timeline item -->
                <!-- timeline time label -->
                <div class="time-label">
                <span class="bg-secondary">
                    23 de set 2022
                </span>
                </div>
                <!-- /.timeline-label -->
                <!-- timeline item -->
                <div>
                <i class="fas fa-envelope bg-danger"></i>

                <div class="timeline-item">
                    <span class="time"><i class="far fa-clock"></i> 12:05 pm</span>

                    <h3 class="timeline-header">Ticket Cerrado por <a href="#">Roberto Mart&iacute;nez</a></h3>

                    <div class="timeline-body">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam eveniet temporibus nisi quaerat esse.
                    Odio qui fugiat error libero distinctio? Officia aperiam porro praesentium! Rem dolorum qui ullam aspernatur eos.
                    </div>
                </div>
                </div>
                <!-- END timeline item -->
                <!-- timeline item -->
                <div>
                <i class="fas fa-envelope bg-danger"></i>

                <div class="timeline-item">
                    <span class="time"><i class="far fa-clock"></i> 12:05 pm</span>

                    <h3 class="timeline-header">Ticket Aprobado por <a href="#">Enmanuel Aguayo</a></h3>

                    <div class="timeline-body">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam eveniet temporibus nisi quaerat esse.
                    Odio qui fugiat error libero distinctio? Officia aperiam porro praesentium! Rem dolorum qui ullam aspernatur eos.
                    </div>
                </div>
                </div>
                <!-- END timeline item -->
                <div>
                <i class="far fa-clock bg-gray"></i>
                </div>
            </div>
            </div>
            <div class="col-sm-12 card p-2">
            <form action="#" id="formResponseTicket" class="p-4">
                <div class="form-group">
                <label for="description">Escribir una respuesta</label>
                <textarea name="description" id="description"></textarea>
                </div>

                <div class="form-group">
                <label for="images">Adjuntar archivos</label>
                <input type="file" name="images" id="images" class="form-control-file">
                </div>

                <div class="row">
                <div class="col-6">
                    <div class="form-group">
                    <label for="estado">Estado</label>
                    <select class="form-control" name="estado" id="estado">
                        <option>Abierto</option>
                        <option>En proceso</option>
                        <option>Cerrado</option>
                    </select>
                    </div>
                </div>
                </div>

                <div class="btn-grupo">
                <button type="submit" class="btn btn-primary">Enviar respuesta</button>
                </div>
            </form>
            </div>
        </div>
        </div>
        <!-- /.container-fluid -->
    </section>
    `
    container.innerHTML = content;
    tinyRender('textarea#description');
};



document.addEventListener('DOMContentLoaded', getTickets);


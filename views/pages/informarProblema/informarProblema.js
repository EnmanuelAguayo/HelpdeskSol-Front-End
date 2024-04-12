const getServiceType = async () => {
    const userDataString = sessionStorage.getItem('user');
    const userData = JSON.parse(userDataString);
    
    if (userData == null) {
        window.location.href = '../../../login.html';
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

        } else if (response.status == 400){
            console.error(response.status);
        } else if (response.status == 401){
            
            window.location.href = '../../../login.html';
        } else if (response.status == 403){
            console.error(response.status);
        } else if (response.status == 404){
            console.error(response.status);
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
                <h1 class="m-0"><i class="nav-icon fas fa-laptop-medical"></i> Informar problema</h1>
            </div><!-- /.col -->
            <div class="col-sm-6">
                <ol class="breadcrumb float-sm-right">
                <li class="breadcrumb-item"><a href="#">Home</a></li>
                <li class="breadcrumb-item">Incidencias</li>
                <li class="breadcrumb-item active">Informar problema</li>
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
                <form id="formNewTicket" class="card bg-light p-4" method="POST">
    
                <div class="form-group">
                    <label for="title">T&iacute;tulo</label>
                    <input type="text" name="title" id="title" class="form-control" aria-describedby="helpId">
                </div>
    
                <div class="form-group">
                    <label for="serviceType">Tipo de servicio</label>
                    <select class="form-control" name="serviceType" id="serviceType"></select>
                </div>
    
                <div class="form-group">
                    <label for="description">Descripci&oacute;n</label>
                    <textarea name="description" id="description"></textarea>
                    <input type="hidden" id="notes">
                </div>
    
                <div class="form-group">
                    <label for="files">Adjuntar archivos</label>
                    <input type="file" name="files" id="files" class="form-control-file" multiple 
                    accept="image/jpeg, image/jpg, image/png, image/gif, .doc, .docx, .xls, .xlsx, .ppt, .pptx, .pdf">
                </div>
    
                <div class="btn-grupo">
                    <button type="button" name="submitNewTicket" id="submitNewTicket" class="btn btn-primary">Enviar solicitud</button>
                    <button type="button" name="cancelNewTicket" id="cancelNewTicket" class="btn btn-danger">Cancelar</button>
                </div>
                </form>
            </div>
            </div>
        </div>
        <!-- /.row -->
    </div><!-- /.container-fluid -->
    </section>
    `;
    container.innerHTML = content;
    tinyRender();
    document.getElementById('submitNewTicket').addEventListener('click', newTicket);
};

const newTicket = async () => {
    const userDataString = sessionStorage.getItem('user');
    const userData = JSON.parse(userDataString);
    
    if (userData == null) {
        window.location.href = '../../../login.html';
    };

    const endpointNewTicket = 'http://127.0.0.1:8000/ticket/new';
    const title = document.getElementById('title').value;
    const description = document.getElementById('notes').value;
    const serviceTypeId = document.getElementById('serviceType').value;
    const files = document.getElementById('files').value;

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
            window.location.href = '../../../login.html';
        } else if (response.status == 403) {
            window.location.href = '../error403.html';
        } else if (response.status == 404) {
            window.location.href = '../error404.html';
        }
    } catch (error) {
        console.error('Error', error);
    }
};

const tinyRender = () => {
    tinymce.init({
        selector: 'textarea#description',
        plugins: 'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount linkchecker markdown',
        toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table | align lineheight | numlist bullist indent outdent | emoticons charmap | removeformat',

        setup: function(editor) {
            editor.on('change', function (e) {
                document.getElementById('notes').value = editor.getContent('textarea#description');
            });
            editor.on('submit', function (e) {
                editor.setContent('');
            });
        }
    });
};


document.addEventListener('DOMContentLoaded', pushContent);
document.addEventListener('DOMContentLoaded', getServiceType);


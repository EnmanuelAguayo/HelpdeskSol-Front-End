const renderFormNewTicket = () => {
    const container = document.getElementById('formContainerNewTicket');
    const content = `
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
    `;
    container.innerHTML = content;
};
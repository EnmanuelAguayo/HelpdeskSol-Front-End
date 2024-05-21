const renderFormResponseTicket = (ticket, showApprovedCheck) => {
    const container = document.getElementById('formContainerResponseTicket');
    const content = `
        <form id="formResponseTicket" class="p-4" enctype="multipart/form-data" method="POST">
            <input type="hidden" id="ticket">
            <div class="form-group">
                <label for="comment">Escribir una respuesta</label>
                <textarea name="comment" id="comment"></textarea>
                <input type="hidden" id="notes">
            </div>

            <div class="form-group">
                <label for="files">Adjuntar archivos</label>
                <input type="file" name="files" id="files" class="form-control-file" multiple 
                accept="image/jpeg, image/jpg, image/png, image/gif, .doc, .docx, .xls, .xlsx, .ppt, .pptx, .pdf">
            </div>

            <div class="row" id="approvedDisplay">
                <div class="offset-6 col-6">
                    <div class="form-group text-right">
                        <div class="custom-control custom-checkbox custom-control-inline">
                            <input id="approved" class="custom-control-input" type="checkbox" name="approved" value=false>
                            <label for="approved" class="custom-control-label">Marcar ticket como aprobado</label>
                        </div>
                    </div>
                </div>
            </div>

            <div class="btn-grupo">
                <button type="button" id="submitResponseTicket" class="btn btn-primary">Enviar respuesta</button>
            </div>
        </form>
    `;
    container.innerHTML = content;
    if (showApprovedCheck == false) {
        const approvedDisplay = document.getElementById('approvedDisplay');

        approvedDisplay.remove();
    }
    document.getElementById('ticket').value = ticket;
};
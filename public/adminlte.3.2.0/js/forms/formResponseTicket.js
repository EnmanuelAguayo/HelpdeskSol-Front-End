const renderFormResponseTicket = (ticket, showApprovedCheck, type_user, statusKey) => {
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

            <div class="row" style="display: none;">
                <div class="offset-6 col-6" id="selection"></div>
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

    
    if (type_user == 'S' && (statusKey == 'Abierto' || statusKey == 'En progreso' || statusKey == 'Solucionado')){
        console.info(statusKey);

        showApprovedCheck == true ? document.getElementById('approvedDisplay').remove() : '';
        
        // Create elements
        const form_group_element = document.createElement('div');
        const label_element = document.createElement('label');
        const select_element = document.createElement('select');
        const title_element = document.createElement('h6');

        // Set attribute
        form_group_element.className = 'form-group';
        label_element.setAttribute('for', 'state');
        label_element.innerHTML = 'Marcar como:';
        select_element.setAttribute('id', 'select_option');
        select_element.className = 'form-control';

        // Content options for select
        const options = []
        
        if (statusKey == 'Solucionado') {
            options.push({value: 'RE', text: 'Respuesta'});
        }
        
        if (statusKey == 'En progreso' || statusKey == 'Abierto') {
            options.push({value: 'S', text: 'Solucionado'});
            options.push({value: 'RE', text: 'Respuesta'});
            options.push({value: 'R', text: 'Rechazo'});
        }  
        
        // Iter options, add elements
        options.forEach(optionData => {
            const option = document.createElement('option');
            option.value = optionData.value;
            option.text = optionData.text;
            select_element.appendChild(option);
        });

        // Add elements
        form_group_element.appendChild(label_element);
        form_group_element.appendChild(select_element);
        title_element.innerHTML = 'Marcar como:';
        
        const selection = document.getElementById('selection');
        selection.appendChild(form_group_element);
        selection.parentNode.style.display = 'block';

    }
    document.getElementById('ticket').value = ticket;
};
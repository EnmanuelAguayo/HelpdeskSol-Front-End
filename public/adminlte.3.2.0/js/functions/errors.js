const showErrors = (message, idForm) => {
    // Create elements for errors
    const container = document.createElement('div');
    container.className = 'alert alert-warning alert-dismissible fade show mt-3';
    container.role = 'alert';

    // Create content errors
    const content = message;
    const strong = document.createElement('strong');
    strong.textContent = content;
    container.appendChild(strong);

    // Show error
    document.getElementById(idForm).appendChild(container);
};

const deleteErrors = () => {
    // Delete exists errors
    let errorMessage = document.getElementsByClassName('alert-warning');
    if (errorMessage.length > 0){
        for (let index = 0; index <= errorMessage.length; index++) {
            const element = errorMessage[0];
            element.remove();
        }
    }
};
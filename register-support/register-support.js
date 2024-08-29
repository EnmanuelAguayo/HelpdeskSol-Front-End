const register = async (event) => {
    const endpoint = 'http://127.0.0.1:8000/register/support';
    const userName = document.getElementById('fullName').value;
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const repeatPassword = document.getElementById('repeatPassword').value;
    let messagesErrors = [];
    
    // Delete errors
    deleteErrors();
    // Password verify
    if (password != repeatPassword) {
        event.preventDefault();
        // Append errors
        messagesErrors.push('Las contraseñas no coinciden.'); 
    }

    // Check business email
    let splitEmail = email.split('@')[1];
    if (splitEmail != 'elsol.com.py') {
        event.preventDefault();
        // Append errors
        messagesErrors.push('El email corporativo debe incluir el dominio elsol.com.py');
    }

    // Show errors
    if (messagesErrors.length > 0) {
        for (let index in messagesErrors) {
            showErrors(messagesErrors[index], 'formRegister');
        }
        return;
    }

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            'username': userName,
            'first_name': firstName, 
            'last_name': lastName, 
            'email': email, 
            'password': password,
            'type_user': 2, 
        })
    };

    try {
        const response = await fetch(endpoint, options);
        if (response.status == 201) {
            alert('Su usuario fue creado exitosamente');
            const inputs = document.querySelectorAll('input');

            for (let index = 0; index < inputs.length; index++) {
                let element = inputs[index];
                element.value = '';
            }
            window.location.href = '../login';

        } else if (response.status == 400 || response.status == 404) {
            let dataError = await response.json();
            for (let errorMessage in dataError) {
                showErrors(errorMessage + ': ' + dataError[errorMessage]);
            };
        }
    } catch (error){
        console.error('Error', error);
    }

    
};

const fullName = () => {
    // Create name user
    let fullName = '';
    firstName = document.getElementById('firstName').value;
    lastName = document.getElementById('lastName').value;
    fullName = firstName.toLowerCase() + lastName.toLowerCase();
    document.getElementById('fullName').value = fullName;
};

let checkBlank = () => {
    let filterInputBlank = document.querySelectorAll('input');
    let countBlanks = 0;

    for (let index = 0; index < filterInputBlank.length; index++) {
        const element = filterInputBlank[index];
        if (element.value == '') {
            countBlanks += 1;
        }
    }
    return countBlanks;
};

const enabledSubmit = () => {
    const totalBlanks = checkBlank();
    const submitButton = document.getElementById('submitRegister');
    submitButton.disabled = totalBlanks > 0;
};

// Events
document.getElementById('submitRegister').addEventListener('click', function (event) {
    register(event);
});
document.getElementById('fullName').addEventListener('click', fullName);
document.getElementById('firstName').addEventListener('keyup', fullName);
document.getElementById('lastName').addEventListener('keyup', fullName);
document.getElementById('formRegister').addEventListener('input', enabledSubmit);



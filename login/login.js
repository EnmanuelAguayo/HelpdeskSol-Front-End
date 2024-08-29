const login = async (event) =>{
    const endpoint = 'http://127.0.0.1:8000/login';
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    let messagesErrors = [];
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            'email': email,
            'password': password
        })
    }

    // Delete errors
    let domErrors = document.getElementsByClassName('alert-warning');
    if (domErrors.length > 0){
        for (let index = 0; index <= domErrors.length; index++) {
            const element = domErrors[0];
            element.remove();
        }
    }

    // Check business email
    let splitEmail = email.split('@')[1];
    if (splitEmail != 'elsol.com.py') {
        event.preventDefault();
        // Append errors
        messagesErrors.push('El email corporativo debe incluir el dominio elsol.com.py');
    }

    try{
        const response = await fetch(endpoint, options);
        
        if ( response.status == 400 || response.status == 404){
            let dataError = await response.json();
            for (let errorMessage in dataError) {
                showErrors(errorMessage + ': ' + dataError[errorMessage], 'formLogin');
            };
        }
        else if ( response.status == 200 ){
            const data = await response.json();
            const user = {
                'id': data.user.id,
                'email': data.user.email,
                'username': data.user.username,
                'type_user': data.user.type_user,
                'token': data.token_access,
                'refresh_token': data.refresh_token
            }
            sessionStorage.setItem('user', JSON.stringify(user));
            window.location.href = '../views/pages/bienvenido';
        } else {
            console.error('Error', response.status);
        }
    } catch(error){
        console.error(error);
    }
}

const session = () => {
    const userDataString = sessionStorage.getItem('user');
    const userData = JSON.parse(userDataString);

    if (userData != null) {
        console.log("userData.token-login", userData.token);
        window.location.href = '../views/pages/bienvenido';
    };
};

document.addEventListener('DOMContentLoaded', session);
document.querySelector('#submitLogin').addEventListener('click', function (event){
    login(event);
});
const login = async () =>{
    const endpoint = 'http://127.0.0.1:8000/login';
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
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
    let errorMessage = document.getElementsByClassName('alert-warning');
    if (errorMessage.length > 0){
        for (let index = 0; index <= errorMessage.length; index++) {
            const element = errorMessage[0];
            element.remove();
        }
    }

    try{
        const response = await fetch(endpoint, options);
        
        if ( response.status == 400 || response.status == 404){
            const dataError = await response.json();
            for (let clave in dataError){
                // Crear elemento contenedor div para el mensaje de error
                const container = document.createElement('div');
                container.className = 'alert alert-warning alert-dismissible fade show';
                container.role = 'alert';
                
                // Crear contenido para el mensaje de error
                const content = clave + ': ' + dataError[clave];
                const strong = document.createElement('strong');
                strong.textContent = content;
                container.appendChild(strong);

                // Mostrar mensajes
                document.getElementById('formLogin').appendChild(container);
            }
        }
        else if ( response.status == 200 ){
            const data = await response.json();
            const user = {
                'id': data.user.id,
                'email': data.user.email,
                'username': data.user.username,
                'token': data.token_access
            }
            sessionStorage.setItem('user', JSON.stringify(user));
            window.location.href = 'views/pages/bienvenido';
        } else {
            console.error('Error', response.status);
        }
    } catch(error){
        console.error(error);
    }
}

document.querySelector('#submitLogin').addEventListener('click', login);
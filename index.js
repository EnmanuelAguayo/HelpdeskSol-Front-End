function login(event){
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email == "" || password == ""){
        event.preventDefault();
        alert('Complete todos los datos');
        return;
    };
    fetch("http://127.0.0.1:8000/login", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            'email': email,
            'password': password
        })
    })
        .then(response =>{
            if (!response.ok){
                throw new Error('Ocurrió un error inesperado:' + response.status);
            }
        })
        .then(data =>{
            console.log('Datos de respuesta: ' + data);
        })
        .catch(error =>{
            console.error('Error', error);
        })
};

document.getElementById('FormLogin').addEventListener('submit', login);
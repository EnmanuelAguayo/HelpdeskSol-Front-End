
const cargarDatos = async () => {
    const userDataString = sessionStorage.getItem('user');
    const userData = JSON.parse(userDataString);
    const endpoint = 'http://127.0.0.1:8000/ticket/list/customer/' + userData.id;
    
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + userData.token
        }
    }
        
    try{
        const response = await fetch(endpoint, options);
        if (response.status == 200){
            const container = document.getElementById('lista');
            const data = await response.json();
        
            for (let clave in data){
                const content = document.createElement('li');
                content.textContent = clave;
                container.appendChild(content);
            }
        }else if (response.status == 401) {
            window.location.href = 'views/pages/error401.html';
        }else if (response.status == 403) {
            window.location.href = 'views/pages/error403.html';
        }else if (response.status == 404 || response.status == 400) {
            window.location.href = 'views/pages/error404.html';
        }else {
            console.error('Error', response.status);
        }
    } catch(error){
        console.error(error);
    }
};


document.addEventListener('DOMContentLoaded', cargarDatos); 
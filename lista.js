function listar(){
    const url = 'http://127.0.0.1:8000/ticket/list/customer';
    fetch(url, {
        headers: {
            method: 'GET',
        }
    })
        .then(res =>{
            if(!res.ok){
                throw new Error('Error: ' + res.status);
            };
        })
        .then(data =>{
            console.log(data);
        })
        .catch(error =>{
            console.error('Error', error);
        })
}

document.getElementById('listar').addEventListener('click', listar);
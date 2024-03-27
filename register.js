const getTeam = async () => {
    const endpoint = 'http://127.0.0.1:8000/info/team/list';
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }

    try {
        const response = await fetch(endpoint, options);

        if (response.status == 200) {
            let data = await response.json();
            const select = document.getElementById('teamList');
            
            data.forEach(option => {
                let optionElement = document.createElement('option');
                optionElement.value = option.id;
                optionElement.text = option.name;
                select.appendChild(optionElement);
            });
            
        } else if (response.status == 400) {
            console.log(response.status);        
        } else if (response.status == 401) {
            console.log(response.status);
        } else if (response.status == 403) {
            console.log(response.status);
        } else if (response.status == 404) {
            console.log(response.status);
        }
    } catch (error){
        console.error('Error', error);
    }
};

const getDevices = async () => {
    const endpoint = 'http://127.0.0.1:8000/info/device/list';
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }

    try {
        const response = await fetch(endpoint, options);
        if (response.status == 200) {
            let data = await response.json();
            const select = document.getElementById('deviceList');
            data.forEach(option => {
                let optionElement = document.createElement('option');
                optionElement.value = option.id;
                optionElement.text = option.type_name + '-' + option.description;
                select.appendChild(optionElement);
            });
        } else if(response.status == 400){
            console.error(response.status);
        } else if(response.status == 401){
            console.error(response.status);
        } else if(response.status == 403){
            console.error(response.status);
        } else if(response.status == 404){
            console.error(response.status);
        }
    } catch(error){
        console.error('Error', error);
    }
};

const register = async () => {
    const enpoint = 'http://127.0.0.1:8000/register';
    const data = {

    }
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
        body: {
            
        }
    }

    
};

document.addEventListener('DOMContentLoaded', getTeam);
document.addEventListener('DOMContentLoaded', getDevices);
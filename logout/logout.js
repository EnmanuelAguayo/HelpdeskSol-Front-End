const logout = async () => {
    const userDataString = sessionStorage.getItem('user');
    const userData = JSON.parse(userDataString);
  
    if (userData.token === null) {
        window.location.href = '../../../login';
    }
    
    const endpointLogout = 'http://127.0.0.1:8000/logout';
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + userData.token
        },
        body: JSON.stringify({
            'refresh_token': userData.refresh_token,
        })
    }
  
    try {
        const response = await fetch(endpointLogout, options);
        const data = await response.json();
        
        if (response.status == 401) {
            alert(data.Error);
        } else if (response.status == 200) {
            sessionStorage.removeItem('user');
            alert(data.Message);
            window.location.href = "../../../login";
        } else {
            console.error('Error', response.status);
        }       
    } catch (error) {
        console.error('Error', error);
    }
}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('logout').addEventListener('click', logout);
})

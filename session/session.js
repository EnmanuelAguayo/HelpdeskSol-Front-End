const checkSessionToken = async () => {
    // Check sessionStorage token
    const userDataString = sessionStorage.getItem('user');
    const userDataObj = JSON.parse(userDataString);
    
    if (userDataObj === null) {
        return false;
    }
    
    // Check refresh token black listed or expired
    if (userDataObj.refresh_token) {
        const endpointCheckrefreshToken = route_server + 'api/check/refresh/token';
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }, 
            body: JSON.stringify({
                'refresh_token': userDataObj.refresh_token
            })
        };

        try {
            
            const response = await fetch(endpointCheckrefreshToken, options);
            
            // is_blacklisted or expired refresh token
            if (response.status == 500) {
                const userConfirm = confirm('Refresh Token: Su sesión ha expirado. Debe loguearse nuevamente.');
                
                if (userConfirm) {
                    sessionStorage.removeItem('user');
                    window.location.href = route_base_view + 'login';
                }
            } else if(response.status == 404){
                // Check invalid or expired access_token
                if (userDataObj.access_token) {
                    const endpointCheckAccessToken = route_server + 'api/check/access/token';
                    const options = {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            'access_token': userDataObj.token
                        })
                    }

                    try {
                        const response = await fetch(endpointCheckAccessToken, options);

                        if (response.status == 500){

                            // Refresh token and sessionStorage update
                            const endpointRefreshToken = route_server + 'api/token/refresh';
                            const options = {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify({
                                    'refresh': userDataObj.refresh_token
                                })
                            };

                            try {
                                const response = await fetch(endpointRefreshToken, options);

                                if (response.status == 200) {
                                    const data = response.json();

                                    // Token and refresh set info
                                    userDataObj.token = data.access;
                                    userDataObj.refresh_token = data.refresh;
                                    alert('Su sesión se actualizó automáticamente. Nuevo token: ' + data.access);

                                } else if (response.status == 401) {
                                    const userConfirm = confirm('Refresh Token: Su sesión ha expirado. Debe loguearse nuevamente.');
                            
                                    if (userConfirm) {
                                        sessionStorage.removeItem('user');
                                        window.location.href = route_base_view + 'login';
                                    }
                                };

                            } catch (error) {
                                console.error('Error', error);
                            }
                        }
                    } catch (error) {
                        console.error('Error', error);
                    }
                } else {
                    console.error('Error', 'Falta dato: access_token');
                }
            }

        } catch (error) {
            console.error('Error', error);
        }
    } else {
        console.error('Error', 'Falta dato: refresh_token');
    }
}




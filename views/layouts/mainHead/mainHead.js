const mainHead = async () =>{

  const userString = sessionStorage.getItem('user');
  const userObj = JSON.parse(userString);
  let typeUser = "";

  if (userObj.type_user === 'S') {
    typeUser = 'Support | Helpdesk';
  } else if (userObj.type_user === 'C') {
    typeUser = 'Customer | Helpdesk';
  }

  const container = document.getElementById('mainHead');
  const content = `
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>${typeUser}</title>
    
      <!-- Google Font: Source Sans Pro -->
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback">

      <!-- Font Awesome Icons -->
      <link rel="stylesheet" href="../../../public/adminlte.3.2.0/plugins/fontawesome-free/css/all.min.css">
      
      <!-- Theme style -->
      <link rel="stylesheet" href="../../../public/adminlte.3.2.0/css/adminlte.min.css">
    `;
  container.innerHTML = content;
}

document.addEventListener('DOMContentLoaded', mainHead);
            
         
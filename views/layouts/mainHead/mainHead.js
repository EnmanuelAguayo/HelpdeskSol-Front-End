const mainHead = async () =>{
  const container = document.getElementById('mainHead');
  const content = `
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>AdminLTE 3 | Starter</title>
    
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
            
         
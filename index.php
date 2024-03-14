<?php
        require_once "config/conexion.php";
        require_once "config/routes.php";
        require_once "models/UsersModels.php";

        if(isset($_POST['submit_login']) and $_POST['submit_login'] == "ok"){
          $login = new Users();
          $login->login();
        }

        if(isset($_SESSION['user_id'])){
          header("location: " . Conexion::ruta() . "views/Home/Bienvenido");
        }

?>

<!DOCTYPE html>
<html lang="es">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <!-- Google Font: Source Sans Pro -->
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback">
  <!-- Font Awesome -->
  <link rel="stylesheet" href="public/adminlte.3.2.0/plugins/fontawesome-free/css/all.min.css">
  <!-- icheck bootstrap -->
  <link rel="stylesheet" href="public/adminlte.3.2.0/plugins/icheck-bootstrap/icheck-bootstrap.min.css">
  <!-- Theme style -->
  <link rel="stylesheet" href="public/adminlte.3.2.0/css/adminlte.min.css">
  <!-- Styles -->
  <link rel="stylesheet" href="public/adminlte.3.2.0/css/styles.css">
  <script src="https://www.google.com/recaptcha/api.js" async defer></script>


  <title>HELPDESK LOGIN</title>
</head>

<body class="background-login bg-light">

  <div class="container-fluid">
    <div class="row mt-4">
      <div class="col-sm-8 col-md-6 col-lg-4 col-xl-4 offset-sm-2 offset-md-3 offset-lg-4 offset-xl-4">
        <div class="card">
          <div class="card-header text-center bg-dark">
            <img class="logo-login" src="public/adminlte.3.2.0/img/help-desk.png" alt="logo-helpdesk">
          </div>
          <div class="card-body">
            
            <form action="<?php echo htmlspecialchars($_SERVER['PHP_SELF']);?>" method="post">

              <?php 
                      if(isset($_GET['m'])){
                        switch ($_GET['m']){
                          case "1":
              ?>
                            <div class="alert alert-warning alert-dismissible fade show" role="alert">
                              <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                <span class="sr-only">Close</span>
                              </button>
                              <strong>Oh no!</strong> Por favor aseg&uacute;rate de completar todos los tados.
                            </div>
              <?php
                          break;
                          case "2":
              ?>
                            <div class="alert alert-warning alert-dismissible fade show" role="alert">
                              <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                <span class="sr-only">Close</span>
                              </button>
                              <strong>Oh no!</strong> Por favor aseg&uacute;rate de completar todos los tados y validar el captcha.
                            </div>
              <?php
                          break;  
                          case "3":
              ?>
                            <div class="alert alert-warning alert-dismissible fade show" role="alert">
                              <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                <span class="sr-only">Close</span>
                              </button>
                              <strong>Oh no!</strong> Por favor aseg&uacute;rate de validar el captcha.
                            </div>
              <?php
                          break;
                          case "4":
              ?>
                            <div class="alert alert-danger alert-dismissible fade show" role="alert">
                              <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                <span class="sr-only">Close</span>
                              </button>
                              <strong>Oh no!</strong> Credenciales incorrectas.
                            </div>
              <?php
                          break;
                        }
                      }
              
              ?>





              <div class="form-group">
                <label for="input_correo"><i class="fas fa-envelope"></i> Correo</label>
                <input type="email" name="input_correo" id="input_correo" class="form-control">
              </div>

              <div class="form-group">
                <label for="pass"><i class="fas fa-key"></i> Contrase&ntilde;a</label>
                <input type="password" name="input_password" id="input_password" class="form-control">
              </div>

              
              <div class="g-recaptcha" data-sitekey="6Lda_EUfAAAAAE9u7K2cQVxhc4MSVd2YLeCzbE-U"></div><br>
            

              <div class="form-group mb-0">
                <button type="submit" name="submit_login" id="submit_login" value="ok" class="btn btn-primary btn-block"> <i class="fas fa-arrow-right"></i></button>
              </div>

            </form>
          </div>
          <div class="card-footer bg-light">
            <a href="#" class="link">Olvide mi contrase&ntilde;a</a>
          </div>
        </div>
      </div>
      <div class="col-sm-2 col-md-3 col-lg-4 col-xl-4"></div>
    </div>
  </div>



  <!-- jQuery -->
  <script src="public/adminlte.3.2.0/plugins/jquery/jquery.min.js"></script>
  <!-- Bootstrap 4 -->
  <script src="public/adminlte.3.2.0/plugins/bootstrap/js/bootstrap.bundle.min.js"></script>
  <!-- AdminLTE App -->
  <script src="public/adminlte.3.2.0/js/adminlte.min.js"></script>
</body>

</html>

<?php

    require_once("../config/conexion.php");

    if ( isset($_POST['enviar']) and $_POST['enviar'] == "si" )
    {
          require_once("../models/UsuarioModels.php");
          $usuario = new Usuario();
          $usuario->login();
    }




?>



<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>AdminLTE 3 | Log in</title>

  <!-- Google Font: Source Sans Pro -->
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback">
  <!-- Font Awesome -->
  <link rel="stylesheet" href="../public/adminlte/plugins/fontawesome-free/css/all.min.css">
  <!-- icheck bootstrap -->
  <link rel="stylesheet" href="../public/adminlte/plugins/icheck-bootstrap/icheck-bootstrap.min.css">
  <!-- Theme style -->
  <link rel="stylesheet" href="../public/adminlte/css/adminlte.min.css">
  <!-- recaptcha -->  
  <script src="https://www.google.com/recaptcha/api.js" async defer></script>
  

</head>
<body class="hold-transition login-page">
<div class="login-box">
  <div class="login-logo">
    <a id="tituloAcceso" href="../../index2.html"><b>Acceso Usuario</b></a>
  </div>
  <!-- /.login-logo -->
  <div class="card">
    <div class="card-body login-card-body">
      <p class="login-box-msg">Ingrese sus datos para iniciar sesi&oacute;n</p>

      <form action="<?php echo htmlspecialchars($_SERVER['PHP_SELF']); ?>" method="post" id="login_form">
        <input type="hidden" id="rol_id" name="rol_id" value="1">
      
          <!-- errors -->
          <?php 
          
                if( isset($_GET['m']) )
                {
                    switch($_GET['m'])
                    {
                        case "1":
                        
                        ?>
                                <div class="alert alert-danger alert-dismissible fade show" role="alert">
                                  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                    <span class="sr-only">Close</span>
                                  </button>                                 
                                  <strong>Error!</strong> Credenciales incorrectas.
                                </div>
                            
                        <?php

                        break;
                        case "2":
                        
                        ?>
                                <div class="alert alert-danger alert-dismissible fade show" role="alert">
                                  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                    <span class="sr-only">Close</span>
                                  </button>
                                  <strong>Error!</strong> Por favor completa todos los datos requeridos.
                                </div>
                        <?php
                        break;
                            
                    }
                }
          ?>

        <div class="input-group mb-3">
          <input type="email" name="email" id="email" class="form-control" placeholder="Correo">
          <div class="input-group-append">
            <div class="input-group-text">
              <span class="fas fa-envelope"></span>
            </div>
          </div>
        </div>
        <div class="input-group mb-3">
          <input type="password" name="pass" id="pass" class="form-control" placeholder="Contraseña">
          <div class="input-group-append">
            <div class="input-group-text">
              <span class="fas fa-lock"></span>
            </div>
          </div>
        </div>
        <div class="col-12">
          <!--
              <div class="g-recaptcha" data-sitekey="6Lda_EUfAAAAAE9u7K2cQVxhc4MSVd2YLeCzbE-U"></div><br>
          -->
        </div>
        <div class="row">
          <div class="col-4">
            <input type="hidden" name="enviar" value="si">
            <button type="submit" class="btn btn-primary btn-block">Ingresar</button><br>
          </div>
          <!-- /.col -->
        </div>
      </form>

      <div class="row">
        <!--left-->
        <div class="col-sm-6">
          <a id="btnSoporte" href="#">Acceso a soporte</a>
        </div>
        <!--right-->
        <div class="col-sm-6">
          <a href="forgot-password.html">Olvide mi contraseña</a>
        </div>
      </div>
    </div>
    <!-- /.login-card-body -->
  </div>
</div>
<!-- /.login-box -->

<!-- jQuery -->
<script src="../public/adminlte/plugins/jquery/jquery.min.js"></script>
<!-- Bootstrap 4 -->
<script src="../public/adminlte/plugins/bootstrap/js/bootstrap.bundle.min.js"></script>
<!-- AdminLTE App -->
<script src="../public/adminlte/js/adminlte.min.js"></script>
<script src="index.js"></script>
</body>
</html>

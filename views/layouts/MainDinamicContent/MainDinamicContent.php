<?php 
        if(isset($_GET['pagina'])){

          switch($_GET['pagina']){

            case "Reportes":
              include ROOT_VIEWS_PATH . $_GET['pagina'] . "/index.php";
            break;

            case "Bienvenido":
              include ROOT_VIEWS_PATH . $_GET['pagina'] . "/index.php";
            break;
             
            case "InformarProblema":
              include ROOT_VIEWS_PATH . $_GET['pagina'] . "/index.php";
            break;

            case "ConsultarIncidencia":
              include ROOT_VIEWS_PATH . $_GET['pagina'] . "/index.php";
            break;

            case "HistorialTicket":
              include ROOT_VIEWS_PATH . $_GET['pagina'] . "/index.php";
            break;

            case "CrearUsuario":
              include ROOT_VIEWS_PATH . $_GET['pagina'] . "/index.php";
            break;

            case "CrearPerfiles":
              include ROOT_VIEWS_PATH . $_GET['pagina'] . "/index.php";
            break;

            case "ConsultarPerfiles":
              include ROOT_VIEWS_PATH . $_GET['pagina'] . "/index.php";
            break;

            case "CrearEquipo":
              include ROOT_VIEWS_PATH . $_GET['pagina'] . "/index.php";
            break;

            case "ConsultarEquipo":
              include ROOT_VIEWS_PATH . $_GET['pagina'] . "/index.php";
            break;

            case "CrearTipoEquipo":
              include ROOT_VIEWS_PATH . $_GET['pagina'] . "/index.php";
            break;

            case "ConsultarTipoEquipo":
              include ROOT_VIEWS_PATH . $_GET['pagina'] . "/index.php";
            break;

            case "CrearServicio":
              include ROOT_VIEWS_PATH . $_GET['pagina'] . "/index.php";
            break;

            case "CrearCategoria":
              include ROOT_VIEWS_PATH . $_GET['pagina'] . "/index.php";
            break;

            case "CrearRama":
              include ROOT_VIEWS_PATH . $_GET['pagina'] . "/index.php";
            break;

          }
          
        }

        
?>
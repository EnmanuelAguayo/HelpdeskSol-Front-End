<?php
      require_once "../../../config/conexion.php";
      session_destroy();

      header("location: " . Conexion::ruta());
      exit();



?>
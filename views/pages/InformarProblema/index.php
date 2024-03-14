<!-- Content Wrapper. Contains page content -->
<div class="content-wrapper">
  <!-- Content Header (Page header) -->
  <div class="content-header">
    <div class="container-fluid">
      <div class="row mb-2">
        <div class="col-sm-6">
          <h1 class="m-0"><i class="nav-icon fas fa-laptop-medical"></i> Informar problema</h1>
        </div><!-- /.col -->
        <div class="col-sm-6">
          <ol class="breadcrumb float-sm-right">
            <li class="breadcrumb-item"><a href="#">Home</a></li>
            <li class="breadcrumb-item">Incidencias</li>
            <li class="breadcrumb-item active">Informar problema</li>
          </ol>
        </div><!-- /.col -->
      </div><!-- /.row -->
    </div><!-- /.container-fluid -->
  </div>
  <!-- /.content-header -->

  <section class="content">
    <div class="container-fluid">
      <!-- row -->
      <div class="row">

        <div class="col-sm-12">
          <form action="#" id="#" class="card bg-light p-4">

            <div class="form-group">
              <label for="titulo_incidencia">T&iacute;tulo</label>
              <input type="text" name="titulo_incidencia" id="titulo_incidencia" class="form-control" aria-describedby="helpId">
            </div>

            <div class="form-group">
              <label for="grupo_incidencia">Tipo de servicio</label>
              <select class="form-control" name="grupo_incidencia" id="grupo_incidencia">
                <option></option>
                <option>Cambio o repaci&oacute;n de equipos</option>
                <option>Mudanza de equipos</option>
                <option>El equipo no prende</option>
                <option>El equipo se apaga inesperadamente</option>
                <option>Instalaci&oacute;n de aplicaciones</option>
                <option>Solicitud de permisos web</option>
                <option>Solicitud de permisos sebaot</option>
                <option>Problemas con el correo</option>
              </select>
            </div>

            <div class="form-group">
              <label for="descripcion_incidencia">Descripci&oacute;n</label>
              <textarea name="descripcion_incidencia" id="descripcion_incidencia"></textarea>
            </div>

            <div class="form-group">
              <label for="images">Adjuntar archivos</label>
              <input type="file" name="images" id="images" class="form-control-file">
            </div>

            <div class="btn-grupo">
              <button type="submit" class="btn btn-primary">Enviar solicitud</button>
              <button type="submit" class="btn btn-danger">Cancelar</button>
            </div>


          </form>
        </div>
      </div>
    </div>
    <!-- /.row -->
</div><!-- /.container-fluid -->
</section>
</div>
<!-- /.content-wrapper -->
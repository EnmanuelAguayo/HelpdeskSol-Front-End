<div class="content-wrapper">
  <!-- Content Header (Page header) -->
  <div class="content-header">
    <div class="container-fluid">
      <div class="row mb-2">
        <div class="col-sm-6">
          <h1 class="m-0">Crear Servicios</h1>
        </div><!-- /.col -->
        <div class="col-sm-6">
          <ol class="breadcrumb float-sm-right">
            <li class="breadcrumb-item"><a href="#">Home</a></li>
            <li class="breadcrumb-item">Mantenimiento</li>
            <li class="breadcrumb-item">Grupos y categor&iacute;as</li>
            <li class="breadcrumb-item active">Crear servicios</li>
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
        <div class="col-sm-6">
          <form action="#" id="#" class="card bg-light p-4">

            <div class="form-group">
              <label for="titulo_servicio">Nombre del servicio</label>
              <input type="text" name="titulo_servicio" id="titulo_servicio" class="form-control" aria-describedby="helpId">
            </div>

            <div class="form-group">
              <label for="descripcion_incidencia">Descripci&oacute;n del servicio</label>
              <textarea name="descripcion_servicio" id="descripcion_servicio" class="form-control" style="resize:none;"></textarea>
              <small id="helpId" class="text-muted">Por favor ampl&iacute;a la informaci&oacute;n del servicio</small>
            </div>

            <div class="form-group">
              <label for="categoria">Asignar categor&iacute;a</label>
              <select class="form-control" name="categoria" id="categoria">
                <option>Seguridad</option>
                <option>Ofim&aacute;tica</option>
                <option>Otros</option>
              </select>
            </div>

            <div class="btn-grupo">
              <button type="submit" class="btn btn-primary">Guardar</button>
              <button type="submit" class="btn btn-danger">Cancelar</button>
            </div>

          </form>
        </div>
      </div>
    </div>
    <!-- /.container-fluid -->
  </section>
</div>
<!-- /.content-wrapper -->
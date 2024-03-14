<div class="content-wrapper">
  <!-- Content Header (Page header) -->
  <div class="content-header">
    <div class="container-fluid">
      <div class="row mb-2">
        <div class="col-sm-6">
          <h1 class="m-0">Crear categor&iacute;as</h1>
        </div><!-- /.col -->
        <div class="col-sm-6">
          <ol class="breadcrumb float-sm-right">
            <li class="breadcrumb-item"><a href="#">Home</a></li>
            <li class="breadcrumb-item">Mantenimiento</li>
            <li class="breadcrumb-item">Ramas y categor&iacute;as</li>
            <li class="breadcrumb-item active">Crear categor&iacute;as</li>
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
              <label for="titulo_categoria">Nombre</label>
              <input type="text" name="titulo_categoria" id="titulo_categoria" class="form-control" aria-describedby="helpId">
            </div>

            <div class="row">
              <div class="col-12">
                <div class="form-group">
                  <label for="rama">Asignar rama</label>
                  <select class="form-control" name="rama" id="rama">
                    <option>Software</option>
                    <option>Hardware</option>
                    <option>Otros</option>
                  </select> 
                </div>
              </div>
            </div>

            <div class="form-group">
              <label>Prioridad</label>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked>
                <label class="form-check-label" for="exampleRadios1">
                  Alta
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2">
                <label class="form-check-label" for="exampleRadios2">
                  Media
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2">
                <label class="form-check-label" for="exampleRadios2">
                  Media
                </label>
              </div>
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
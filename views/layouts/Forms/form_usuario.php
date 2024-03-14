<form action="#" id="form_usuario" class="card bg-light p-4">

  <div class="row">
    <div class="col-sm-6">

      <div class="form-group">
        <label for="titulo_rama">Nombre</label>
        <input type="text" name="nom_user" id="nom_user" class="form-control" aria-describedby="helpId">
      </div>

      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" class="form-control" name="email_user" id="email_user" aria-describedby="email" placeholder="">
      </div>

      <div class="form-group">
        <label for="pass_user">Contrase&ntilde;a</label>
        <input type="password" class="form-control" name="pass_user" id="pass_user" placeholder="">
      </div>

      <div class="form-group">
        <label for="">Departamento</label>
        <select class="form-control" name="departamento" id="departamento"></select>
      </div>
    </div>
    <!-- /. left -->
    <div class="col-sm-6">

      <div class="form-group">
        <label for="typeUser">Seleccione perfil para el usuario</label>
        <select class="form-control" name="typeUser" id="typeUser"></select>
      </div>

      <div class="form-group has-feedback" bis_skin_checked="1">
        <a class="btn btn-danger trashFile" id="trashFile" style="display:none; margin-right: 2px;">
          <span class="fas fa-trash"></span>
        </a>
        <div class="btn btn-default btn-file" bis_skin_checked="1">
          <i class="fas fa-paperclip"> Subir foto de perfil</i>
          <input type="hidden" name="fotoActual" id="fotoActual">
          <input type="file" id="uploadFile" name="uploadFile" required>
        </div>
        <img id="prevFile" name="prevFile" class="prevFile img-fluid py-2" width='100' height='100' src="<?php echo ROOT_IMAGES_PATH . 'monitor.png'; ?>">
        <p class="help-block small"> Peso Max. 5MB | Formato: JPG o PNG</p>
      </div><!-- /. end form-group-->

    </div>
    <!-- /. right -->
    <hr class="my-4">
    <div class="col-sm-12 mb-3">
      <div class="btn-grupo mb-5">
        <button type="submit" class="btn btn-primary">Guardar</button>
        <button type="submit" class="btn btn-danger">Cancelar</button>
      </div>
    </div>
    <!-- collapse -->
    <div class="col-sm-12">
      <p>
        <a class="btn btn-primary" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
          Ver equipos
        </a>
      </p>
      <div class="collapse" id="collapseExample">
        <div class="">
          <h4 class="text-left">Equipos del usuario</h4>
          <input type="hidden" value="" name="equipo_user" id="equipo_user">
          <!-- Button asignar equipos -->
          <button type="button" class="btn btn-success mb-3" data-toggle="modal" data-target="#exampleModal">
            Asignar equipo
          </button>
          <input type="hidden" name="refuser" id="refuser" value="<?php echo $_SESSION['user_id']; ?>">
          <div class="row" id="contenedor-dispositivos"></div>

          <!-- Modal asignar equipos -->
          <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel"><strong>Asignar equipo</strong></h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <!-- asignar equipo -->
                <div class="container-fluid">
                  <div class="row">
                    <div class="col-sm-12 card">
                      <table id="listar_equipo" class="table table-bordered table-striped">
                        <thead>
                          <tr>
                            <th style="width: 5%">Nombre</th>
                            <th style="width: 5%">Imagen</th>
                            <th style="width: 5%">Acción</th>
                          </tr>
                        </thead>
                      </table>
                    </div>
                  </div>
                </div>
                <!-- /.container-fluid -->
                <div class="modal-footer">
                  <!-- 
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                    <button type="button" class="btn btn-primary">Aceptar</button>
                  -->
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
    <!-- /. collapse -->
  </div>

</form>
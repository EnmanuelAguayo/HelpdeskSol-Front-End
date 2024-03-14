<form id="form_equipo" method="post" enctype="multipart/form-data" class="card bg-light p-4">

  <div class="form-group">
    <label for="tipo_equipo">Tipo de equipo</label>
    <select class="form-control" name="tipo_equipo" id="tipo_equipo"></select>
  </div>

  <div class="form-group">
    <label for="nom_equipo">Nombre</label>
    <input type="text" name="nom_equipo" id="nom_equipo" class="form-control" required>
  </div>

  <div class="form-group ">
    <label for="desc_equipo">Descripci&oacute;n</label>
    <textarea name="desc_equipo" id="desc_equipo" required class="form-control" rows="5" style="resize: none;"></textarea>
  </div>

  <div class="form-group has-feedback" bis_skin_checked="1">
    <a class="btn btn-danger trashFile" id="trashFile" style="display:none; margin-right: 2px;">
      <span class="fas fa-trash"></span>
    </a>
    <div class="btn btn-default btn-file" bis_skin_checked="1">
      <i class="fas fa-paperclip"> Subir foto del equipo</i>
      <input type="hidden" name="fotoActual" id="fotoActual">
      <input type="file" id="uploadFile" name="uploadFile" required>
    </div>
    <img id="prevFile" name="prevFile" class="prevFile img-fluid py-2" width='100' height='100' src="<?php echo ROOT_IMAGES_PATH . 'monitor.png'; ?>">
    <p class="help-block small"> Peso Max. 5MB | Formato: JPG o PNG</p>
  </div><!-- /. end form-group-->

  <div class="form-group">
    <label for="estado">Estado</label>
    <select class="form-control" name="estado" id="estado">
      <option value="1">Activo</option>
      <option value="0">Inactivo</option>
    </select>
  </div>

  <div class="btn-grupo">
    <button type="submit" class="btn btn-primary">Guardar</button>
    <a type="button" href="ConsultarEquipo" class="btn btn-warning">Listar</a>
  </div>

</form>
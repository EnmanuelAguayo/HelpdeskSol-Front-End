<form method="post" id="form_tipo_equipo" class="card bg-light p-4">

  <div class="form-group">
    <label for="nom_tipo_equipo">Nombre del tipo de equipo</label>
    <input minlength="5" type="text" name="nom_tipo_equipo" required id="nom_tipo_equipo" class="form-control">
  </div>

  <div class="form-group">
    <label for="estado">Estado</label>
    <select class="form-control" name="estado" id="estado">
      <option value="1">Activo</option>
      <option value="0">Inactivo</option>
    </select>
  </div>

  <div class="btn-grupo">
    <button type="submit" class="btn btn-primary">Guardar</button>
    <a type="button" href="ConsultarTipoEquipo" class="btn btn-warning">Listar</a>
  </div>

</form>
<form id="form_perfil" method="post" enctype="multipart/form-data" class="card bg-light p-4">

  <input type="hidden" name="item" id="item">
  <div class="form-group mb-5">
    <label for="nom_perfil">Nombre del perfil</label>
    <input type="text" class="form-control" name="nom_perfil" id="nom_perfil" required>
  </div>

  <div class="row">
    <div class="col-sm-6">

      <div class="check-group">
        <h5 class="border-bottom">Reportes</h5>
        <div class="form-check">
          <label class="form-check-label">
            <input type="checkbox" class="form-check-input" name="check_reportes" id="check_reportes" value="0">
            Reportes
          </label>
        </div>
      </div>
    
      <div class="check-group">
        <h5 class="border-bottom">Incidencias</h5>
        <div class="form-check">
          <label class="form-check-label">
            <input type="checkbox" class="form-check-input" name="check_informar_problema" id="check_informar_problema" value="0">
            Informar Problema
          </label>
        </div>
        <div class="form-check">
          <label class="form-check-label">
            <input type="checkbox" class="form-check-input" name="check_consultar_incidencias" id="check_consultar_incidencias" value="0">
            Consultar incidencias
          </label>
        </div>
      </div>
    
      <div class="check-group">
        <h5 class="border-bottom">Soluciones populares</h5>
        <div class="form-check">
          <label class="form-check-label">
            <input type="checkbox" class="form-check-input" name="check_soluciones_populares" id="check_soluciones_populares" value="0">
            Soluciones populares
          </label>
        </div>
      </div>
    
      <div class="check-group">
        <h5 class="border-bottom">Usuarios</h5>
        <div class="form-check">
          <label class="form-check-label">
            <input type="checkbox" class="form-check-input" name="check_crear_usuarios" id="check_crear_usuarios" value="0">
            Crear usuarios
          </label>
        </div>
        <div class="form-check">
          <label class="form-check-label">
            <input type="checkbox" class="form-check-input" name="check_consultar_usuarios" id="check_consultar_usuarios" value="0">
            Consultar usuarios
          </label>
        </div>
      </div>
    
      <div class="check-group">
        <h5 class="border-bottom">Perfiles</h5>
        <div class="form-check">
          <label class="form-check-label">
            <input type="checkbox" class="form-check-input" name="check_crear_perfiles" id="check_crear_perfiles" value="0">
            Crear perfiles
          </label>
        </div>
        <div class="form-check">
          <label class="form-check-label">
            <input type="checkbox" class="form-check-input" name="check_consultar_perfiles" id="check_consultar_perfiles" value="0">
            Consultar perfiles
          </label>
        </div>
      </div>
    </div>
    <!-- /. col left -->
    <div class="col-sm-6">
      
      <div class="check-group">
        <h5 class="border-bottom">Equipos</h5>
        <div class="form-check">
          <label class="form-check-label">
            <input type="checkbox" class="form-check-input" name="check_crear_equipos" id="check_crear_equipos" value="0">
            Crear equipos
          </label>
        </div>
        <div class="form-check">
          <label class="form-check-label">
            <input type="checkbox" class="form-check-input" name="check_consultar_equipos" id="check_consultar_equipos" value="0">
            Consultar equipos
          </label>
        </div>
        <div class="form-check">
          <label class="form-check-label">
            <input type="checkbox" class="form-check-input" name="check_crear_tipo_equipo" id="check_crear_tipo_equipo" value="0">
            Crear tipo de equipo
          </label>
        </div>
        <div class="form-check">
          <label class="form-check-label">
            <input type="checkbox" class="form-check-input" name="check_consultar_tipo_equipo" id="check_consultar_tipo_equipo" value="0">
            Consultar tipo de equipo
          </label>
        </div>
      </div>
    
      <div class="check-group">
        <h5 class="border-bottom">Ramas y categorías</h5>
        <div class="form-check">
          <label class="form-check-label">
            <input type="checkbox" class="form-check-input" name="check_crear_servicios" id="check_crear_servicios" value="0">
            Crear servicios
          </label>
        </div>
        <div class="form-check">
          <label class="form-check-label">
            <input type="checkbox" class="form-check-input" name="check_consultar_servicios" id="check_consultar_servicios" value="0">
            Consultar servicios
          </label>
        </div>
        <div class="form-check">
          <label class="form-check-label">
            <input type="checkbox" class="form-check-input" name="check_crear_categorias" id="check_crear_categorias" value="0">
            Crear categorías
          </label>
        </div>
        <div class="form-check">
          <label class="form-check-label">
            <input type="checkbox" class="form-check-input" name="check_consultar_categorias" id="check_consultar_categorias" value="0">
            Consultar categorías
          </label>
        </div>
        <div class="form-check">
          <label class="form-check-label">
            <input type="checkbox" class="form-check-input" name="check_crear_ramas" id="check_crear_ramas" value="0">
            Crear ramas
          </label>
        </div>
        <div class="form-check">
          <label class="form-check-label">
            <input type="checkbox" class="form-check-input" name="check_consultar_ramas" id="check_consultar_ramas" value="0">
            Consultar ramas
          </label>
        </div>
      </div>
    </div>
    <!-- /. col right -->

    <div class="col-sm-12">
      
      <div class="check-group">
        <h5 class="border-bottom"></h5>
      </div>

      <div class="form-group">
        <label for="estado">Estado</label>
        <select class="form-control" name="estado" id="estado">
          <option value="1">Activo</option>
          <option value="0">Inactivo</option>
        </select>
      </div>
    </div>
  </div>
  <!-- /. row -->

  <div class="btn-grupo">
    <button type="submit" class="btn btn-primary">Guardar</button>
    <a type="button" href="ConsultarPerfiles" class="btn btn-warning">Listar</a>
  </div>

</form>
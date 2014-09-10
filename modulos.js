// Module

var ModuloUsuarios = (function() {
  var usuarios = [];

  function registrarUsuario(usuario) {
    var contadorUsuarios;

    function agregarUsuarioAColeccion() {
      usuarios.push(usuario);

      contadorUsuarios = usuarios.length;
    }

    if (usuario.email !== '') {
      agregarUsuarioAColeccion();
    }

    return contadorUsuarios;
  }

  return {
    agregar: registrarUsuario,
    listar: function() {
      return usuarios.slice(0);
    }
  };
})();

ModuloUsuarios.agregar({email: 'gustavo@xenda.pe'});
ModuloUsuarios.listar().length = 0;
ModuloUsuarios.listar();
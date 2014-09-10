// Closure

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

registrarUsuario({email: 'gustavo@xenda.pe'});
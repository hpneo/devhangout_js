// Mixins

// - Mixin con funciones constructoras

function Estudiante() {}

Estudiante.prototype.decirCiclo = function() {
  return 'Estoy en ' + this.ciclo + ' ciclo';
}

// - Mixin con objetos
var FamiliaMixin = {};

FamiliaMixin.numeroHermanos = function() {
  return 'Tengo ' + this.hermanos + ' hermanos';
}

function Persona(nombre, apellido) {
  this.nombre = nombre;
  this.apellido = apellido;
}

Persona.prototype = {};

Persona.prototype.saludar = function() {
  return 'Hola, mi nombre es ' + this.nombre;
};

for (var metodo in Estudiante.prototype) {
  Persona.prototype[metodo] = Estudiante.prototype[metodo];
}

for (var metodo in FamiliaMixin) {
  Persona.prototype[metodo] = FamiliaMixin[metodo];
}
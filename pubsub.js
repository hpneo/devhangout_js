// Publish / Subscribe

var PubSub = (function() {
  var canales = {};

  function suscribir(nombreCanal, callback) {
    if (canales[nombreCanal] === undefined) {
      canales[nombreCanal] = [];
    }

    canales[nombreCanal].push(callback);
  }

  function publicar(nombreCanal) {
    var argumentos = [].slice.call(arguments, 1);

    if (canales[nombreCanal] !== undefined) {
      for (var i = 0;
        i < canales[nombreCanal].length;
        i++) {
        var callback = canales[nombreCanal][i];

        callback.apply(null, argumentos);
      }
    }
  }

  return {
    suscribir: suscribir,
    publicar: publicar
  }
})();

PubSub.suscribir('devhangout', function(invitado, host, tema) {
  console.log('Hablando sobre', tema, 'con', host, 'y', invitado);
});

PubSub.publicar('devhangout', 'Gustavo', 'Kattya', 'Patrones con JavaScript');
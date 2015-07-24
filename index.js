var Path = require('path');
var Hapi = require('hapi');

var server = new Hapi.Server();
server.connection({ port: 3000 });

server.views({
  engines: {
    html: require('handlebars')
  },
  path: Path.join(__dirname, 'templates')
});

server.route({
  method: 'GET',
  path: '/',
  handler: function (request, reply) {
      reply.view('index', { title: 'Dropbox Link Saver' });
  }
});

server.route({
  method: 'GET',
  path: '/{param*}',
  handler: {
    directory: {
      path: 'static'
    }
  }
});

server.start(function () {
  console.log('Server running at:', server.info.uri);
});

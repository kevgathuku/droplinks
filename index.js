var Path = require('path');
var Hapi = require('hapi');

var server = new Hapi.Server();
server.connection({ port: process.env.PORT || 3000 });

server.views({
  engines: {
    html: require('handlebars'),
  },
  path: Path.join(__dirname, 'templates'),
});

var routes = [
{
  method: 'GET',
  path: '/',
  handler: function(request, reply) {
    reply.view('index', { title: 'Dropbox Link Saver' });
  },
},
{
  method: 'GET',
  path: '/{param*}',
  handler: {
    directory: {
      path: 'static',
    },
  },
},
]

server.route(routes);

server.start(function() {
  console.log('Server running at:', server.info.uri);
});

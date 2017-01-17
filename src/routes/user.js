var routes = [
{
  method: 'GET',
  path: '/',
  handler: function (request, reply) {
    return reply('Get all users, or may be not.');
    }
  }
];

exports.routes = function (server) {
  server.route(routes);
};

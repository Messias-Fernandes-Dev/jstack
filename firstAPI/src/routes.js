const UserController = require('./controllers/UserController')


module.exports = [
  {
    endpois: '/users',
    method: 'GET',
    handler: UserController.listUsers,
  },
    {
    endpois: '/produtos',
    method: 'GET',
    handler: UserController.listUsers,
  },
]


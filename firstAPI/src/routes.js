const UserController = require('./controllers/UserController')


module.exports = [
  {
    endpois: '/users',
    method: 'GET',
    handler: UserController.listUsers,
  },
    {
    endpois: '/users/:id',
    method: 'GET',
    handler: UserController.getUserById,
  },
]


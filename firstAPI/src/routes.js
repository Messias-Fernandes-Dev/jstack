const UserController = require("./controllers/UserController");

module.exports = [
  {
    endpois: "/users",
    method: "GET",
    handler: UserController.listUsers,
  },
  {
    endpois: "/users/:id",
    method: "GET",
    handler: UserController.getUserById,
  },
  {
    endpois: "/users",
    method: "POST",
    handler: UserController.createUser,
  },
  {
    endpois: "/users/:id",
    method: "PUT",
    handler: UserController.updateUser,
  },
  {
    endpois: "/users/:id",
    method: "DELETE",
    handler: UserController.deleteUser,
  },
];

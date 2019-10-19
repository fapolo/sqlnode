const express = require("express");
const routes = express.Router();
const UserController = require("./controllers/UserController");
const AddressController = require("./controllers/AddressController");
const SubjectController = require("./controllers/SubjectController");
const ReportController = require("./controllers/ReportController");

routes.get("/users", UserController.index);
routes.post("/users", UserController.store);

routes.get("/users/:user_id/addresses", AddressController.index);
routes.post("/users/:user_id/addresses", AddressController.store);

routes.get("/users/:user_id/subjects", SubjectController.index);
routes.post("/users/:user_id/subjects", SubjectController.store);
routes.delete("/users/:user_id/subjects", SubjectController.delete);

routes.get("/report", ReportController.show);

module.exports = routes;

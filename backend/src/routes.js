const express = require("express");
const routes = express.Router();
const OngController = require("./controllers/OngController");
const IncidentsController = require("./controllers/IncidentsController");
const ProfileController = require("./controllers/ProfileController");
const SessionController = require("./controllers/SessionController");

//Login
routes.post("/sessions", SessionController.create);
// Ongs
routes.get("/ongs", OngController.index);
routes.post("/ongs", OngController.create);

//Incidents
routes.get("/incidents", IncidentsController.index);
routes.post("/incidents", IncidentsController.create);
routes.delete("/incidents/:id", IncidentsController.delete);

// Profile
routes.get("/profile", ProfileController.index);

module.exports = routes;

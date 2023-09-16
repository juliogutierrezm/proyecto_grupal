const express = require('express');
const router = express.Router();
const verifyToken = require("../middlewares/verifyToken");
const controllers = require('../controllers');

// Define las rutas y asigna los controladores
router.get("/api/user", verifyToken, controllers.getUserById);
router.post("/api/register", controllers.register);
router.post("/api/login", controllers.login);

module.exports = router;

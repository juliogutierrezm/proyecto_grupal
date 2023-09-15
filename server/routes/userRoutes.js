const express = require('express');
const router = express.Router();
const verifyToken = require("../middlewares/verifyToken");
const controllers = require('../controllers');

// Define las rutas y asigna los controladores
router.get("/user", verifyToken, controllers.getUserById);
router.post("/register", controllers.register);
router.post("/login", controllers.login);

module.exports = router;

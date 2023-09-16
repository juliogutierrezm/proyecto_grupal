const cors = require("cors");
const express = require("express");
require("../server/config/mongoose.config");
const app = express();
require("../server/config/mongoose.config"); 
const userRoutes = require('./routes/userRoutes'); 
require('dotenv').config();

app.use(cors());
app.use(express.json()); // This is new
app.use(express.urlencoded({ extended: true })); 
app.use('/', userRoutes);
 

app.listen(process.env.PORT || 8080, () => {
  console.log("Server started at port 8080")
});

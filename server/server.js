const cors = require("cors");
const express = require("express");
require("../server/config/mongoose.config");
const app = express();
require("../server/config/mongoose.config"); 
const userRoutes = require('./routes/userRoutes'); 


app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json()); // This is new
app.use(express.urlencoded({ extended: true })); 
app.use('/', userRoutes);
 


app.listen(8000, () => {
  console.log("Listening at Port 8000");
});

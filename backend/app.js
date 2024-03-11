const express = require("express");

const app = express();

require("dotenv").config();
require("./config/dbConfig");

const cors = require("cors");

const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use("/api/components", require("./routes/contentRouter.js"));

app.listen(port, () => console.log(`Backend Server Running On PORT ${port}`));

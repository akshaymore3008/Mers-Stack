const express = require('express');

const bodyParser = require("body-parser");
const cors = require("cors");
const connectMongoDb = require('../../CRUD/backend/config/db');
const userRoutes = require('./routes/user.routes');

const app = express();
const PORT = 8080;

connectMongoDb();
app.user (cors());
app.use(express.json);
app.use(bodyParser.json());

app.user('/api', userRoutes);

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
}
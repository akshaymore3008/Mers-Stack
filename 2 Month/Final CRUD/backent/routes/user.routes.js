const express = require('express');

constrouter = express.Router();

Router.get("/get-all-user", getUsers)
Router.post("/create-user", createUser)
Router.put("/update-user", updateUser)
Router.delete("/delete-user", deletUser)

module.exports = router;

const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.send(`<h2>Hello from ${res.baseUrl}</h2>`);
});

module.exports = router;

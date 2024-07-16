const express = require("express");
const v1Router = require("./v1/routes");

const app = express();
const PORT = process.env.PORT || 3000;

// remove
// app.get("/", (req, res) => {
//     res.send("Hello World");
// });

app.use("/api/v1", v1Router);

app.listen(PORT, () => {
    console.log(`API is listening on http://localhost:${PORT}`);
});

const express = require("express");
// const v1Router = require("./v1/routes");
const v1WorkoutRouter = require("./v1/routes/workoutRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

// app.get("/", (req, res) => {
//     res.send("Hello World");
// });

// app.use("/api/v1", v1Router);
app.use("/api/vi/workouts", v1WorkoutRouter);

app.listen(PORT, () => {
    console.log(`API is listening on http://localhost:${PORT}`);
});

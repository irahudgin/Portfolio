const express = require("express");
const path = require("path");
const port = 5000;

const app = express();

app.get("/api/data", (req, res) => {
    res.json({ message: "Helo from express " });
});

app.listen(port, () => {
    console.log("server is running on " + `${port}`);
});

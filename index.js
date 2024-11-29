import express from "express";
import path from "path";

const app = express();

app.get("/", (req, res) => {
    console.log(path.resolve());

    const pathlocation = path.resolve();
    res.sendFile(path.join(pathlocation, "index.html"));
});

app.listen(5000, () => {
    console.log("server is working");
});

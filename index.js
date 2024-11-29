import express from "express";
import path from "path";

const app = express();

// setting up view engine
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("./index", { name: "Aman Kumar" });
});

app.listen(5000, () => {
    console.log("server is working");
});

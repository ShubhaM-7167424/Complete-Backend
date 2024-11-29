import express from "express";
import path from "path";

const app = express();

app.use(express.static(path.join(path.resolve(), "public")));

// setting up view engine
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render('index', {name: 'Shubham Singh'})
});

app.listen(5000, () => {
    console.log("server is working");
});

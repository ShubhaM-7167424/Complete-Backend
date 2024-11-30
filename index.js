import express from "express";
import path from "path";
import mongoose from "mongoose";

mongoose
    .connect("mongodb://localhost:27017/", {
        dbName: "backendApp",
    })
    .then(() => {
        console.log("Database connected");
    })
    .catch((e) => {
        console.log(e);
    });

const messageSchema = mongoose.Schema({
    name: String,
    email: String,
});

const Messge = mongoose.model("Message", messageSchema);

const app = express();

// Middlewares
app.use(express.static(path.join(path.resolve(), "public")));
app.use(express.urlencoded({ extended: true }));

// setting up view engine
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("index", { name: "Shubham Singh" });
});

app.get("/add", async (req, res) => {
    res.send("Nice");
});

app.post("/contact", async (req, res) => {
    const {name, email} = req.body
    await Messge.create({ name, email });
    res.redirect("/success");
});

app.get("/success", (req, res) => {
    res.render("success");
});

app.get("/users", (req, res) => {
    res.json({
        users,
    });
});

app.listen(5000, () => {
    console.log("server is working");
});

import express from "express";
import path from "path";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
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
app.use(cookieParser());

// setting up view engine
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    const { token } = req.cookies;
    if (token) {
        res.render("logout");
    } else {
        res.render("login");
    }
});

app.post("/login", (req, res) => {
    res.cookie("token", "iamin", {
        httpOnly: true,
        expires: new Date(Date.now() + 60 * 1000),
    });
    res.redirect("/");
});

app.get("/logout", (req, res) => {
    res.cookie("token", null, {
        expires: new Date(Date.now()),
    });
    res.redirect("/");
});

app.post("/contact", async (req, res) => {
    const { name, email } = req.body;
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

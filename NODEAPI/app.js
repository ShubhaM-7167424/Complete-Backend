import { parse } from "dotenv";
import express from "express";
import mongoose from "mongoose";

const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

mongoose
    .connect("mongodb://localhost:27017", {
        dbName: "backendapi",
    })
    .then(() => {
        console.log("DB Connected");
    })
    .catch((e) => {
        console.log(e);
    });

const schema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
});

const User = mongoose.model("User", schema);

app.get("/", (req, res) => {
    res.send("Nice working");
});

app.get("/users/all", async (req, res) => {
    const users = await User.find({});

    let keyword = req.query.keyword;
    console.log(keyword);

    res.json({
        success: true,
        users,
    });
});

app.post("/users/new", async (req, res) => {
    const { name, email, password } = req.body;

    await User.create({
        name,
        email,
        password,
    });

    res.status(201).cookie("tempi", "lol").json({
        success: true,
        message: "User Created Successfully",
    });
});

app.get("/userid/special", (req, res) => {
    res.json({
        success: true,
        message: "Just Joking",
    });
});

app.get("/userid/:id", async (req, res) => {
    const { id } = req.params;
    const user = await User.findById(id)

    res.json({
        success: true,
        user
    });
});



app.listen(4000, () => {
    console.log("Server is Running");
});

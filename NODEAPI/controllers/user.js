import { User } from "../models/user.js";

export const getAllUsers = async (req, res) => {
    const users = await User.find({});

    let keyword = req.query.keyword;
    console.log(keyword);

    res.json({
        success: true,
        users,
    });
};

export const addNewUser = async (req, res) => {
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
};

export const specialFunc = (req, res) => {
    res.json({
        success: true,
        message: "Just Joking",
    });
};

export const getUserDetails = async (req, res) => {
    const { id } = req.params;
    const user = await User.findById(id);

    res.json({
        success: true,
        user,
    });
};

export const updateUser = async (req, res) => {
    const { id } = req.params;
    const user = await User.findById(id);

    res.json({
        success: true,
        message: "User Updated Successfully",
    });
};

export const deleteUser = async (req, res) => {
    const { id } = req.params;
    const user = await User.findById(id);

    res.json({
        success: true,
        message: "User Deleted Successfully",
    });
};
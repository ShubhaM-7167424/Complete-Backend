import express from "express";
import {
    addNewUser,
    deleteUser,
    getAllUsers,
    getUserDetails,
    specialFunc,
    updateUser,
} from "../controllers/user.js";

const router = express.Router();

router.get("/all", getAllUsers);

router.post("/new", addNewUser);

router.get("/userid/special", specialFunc);

router.route("/userid/:id").get(getUserDetails).put(updateUser).delete(deleteUser);

// router.get("/userid/:id", getUserDetails);

// router.put("/userid/:id", updateUser);

// router.delete("/userid/:id", deleteUser);

export default router;

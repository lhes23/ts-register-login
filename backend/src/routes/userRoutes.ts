import express from "express";
import { addNewUser, getAllUsers } from "../controllers/userControllers";

const router = express.Router();

router.route("/").get(getAllUsers).post(addNewUser);
router.route("/:id").get().put().delete();

export default router;

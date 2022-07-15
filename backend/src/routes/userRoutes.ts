import express from "express";
import {
  addNewUser,
  deleteUser,
  getAllUsers,
  getSingleUser,
  loginUser,
  updateUser,
} from "../controllers/userControllers";

const router = express.Router();

router.route("/").get(getAllUsers);
router.route("/:id").get(getSingleUser).put(updateUser).delete(deleteUser);
router.post("/login", loginUser);
router.post("/register", addNewUser);

export default router;

import express from "express";
import {
  deleteUser,
  getAllUsers,
  getSingleUser,
  loginUser,
  registerUser,
  updateUser,
} from "../controllers/userControllers";

const router = express.Router();

router.route("/").get(getAllUsers);
router.route("/:id").get(getSingleUser).put(updateUser).delete(deleteUser);
router.post("/login", loginUser);
router.post("/register", registerUser);

export default router;

import express from "express";
import {
  addNewUser,
  deleteUser,
  getAllUsers,
  getSingleUser,
  updateUser,
} from "../controllers/userControllers";

const router = express.Router();

router.route("/").get(getAllUsers).post(addNewUser);
router.route("/:id").get(getSingleUser).put(updateUser).delete(deleteUser);

export default router;

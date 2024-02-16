import express from "express";
import verifyToken from "../utils/verifyUser.js";
import {
  test,
  updateUser,
  deleteUser,
  getUser,
} from "../controllers/user.controller.js";

const router = express.Router();

router.get("/test", test);
router.post("/updateuser/:id", updateUser);
router.delete("/deleteuser/:id", deleteUser);
router.get("/:id", verifyToken, getUser);

export default router;

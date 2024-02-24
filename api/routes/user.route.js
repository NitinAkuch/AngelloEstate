import express from "express";
import { verifyToken } from "../utils/verifyUser.js";
import {
  test,
  updateUser,
  deleteUser,
  getUser,
  getUserListings,
} from "../controllers/user.controller.js";

const router = express.Router();

router.get("/test", test);
router.post("/updateuser/:id", verifyToken, updateUser);
router.delete("/deleteuser/:id", verifyToken, deleteUser);
router.get("/listings/:id", verifyToken, getUserListings);
router.get("/:id", verifyToken, getUser);

export default router;

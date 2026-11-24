
import express from "express";
import {
  addParticipation,
  getMyParticipations,
  getAllParticipations,
} from "../controllers/participationController.js";

const router = express.Router();

router.post("/add", addParticipation);
router.get("/my-participations", getMyParticipations);
router.get("/all", getAllParticipations);

export default router;

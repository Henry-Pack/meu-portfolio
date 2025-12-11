import { Router } from "express";
import { getTimeline } from "../controllers/timeline-controllers.js";

const router = Router();

router.get("/timeline", getTimeline);

export default router;
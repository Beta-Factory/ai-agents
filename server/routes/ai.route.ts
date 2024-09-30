import { Router } from "express";
import {
  chatWIthAIAgent,
  creatAgent,
  getListOfAllAgents,
} from "../controllers/ai.controller";
import upload from "../middlewares/multerConfig";
import { authCheckMiddleware } from "../middlewares/authCheck";

const router = Router();

router.post(
  "/create-agent",
  authCheckMiddleware,
  upload.fields([
    { name: "agentPic", maxCount: 1 },
    { name: "trainFiles", maxCount: 10 },
  ]),
  creatAgent
);
router.get("/get-all-user-agents", authCheckMiddleware, getListOfAllAgents);
router.post("/chat", upload.none(), chatWIthAIAgent);

export default router;

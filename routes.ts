import type { Request, Response } from "express";

import express from "express";

import { chatController } from "./controllers/chat.controller";
import { reviewController } from "./controllers/review.controller";


const router = express.Router();

router.get("/", (req: Request, res: Response) => {
    res.send("hello world");
});

router.get("/api/hello", (req: Request, res: Response) => {
    res.json({ message: "Helo World!" });


});


router.post("/api/chat", chatController.sendMessage);


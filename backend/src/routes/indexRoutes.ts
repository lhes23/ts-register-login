import express, { Request, Response } from "express";
import { port } from "../app";

const router = express.Router();

router.get("/", (req: Request, res: Response) =>
  res.send(`Server running on port : ${port}`)
);

export default router;

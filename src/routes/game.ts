import express from "express";
import { Router, RouterOptions } from "express";
import GameController from "../controllers/GameController";

export function getMatchRoutes(): Router {
    const router: Router = Router();

    router.get("/", async (req, res) => {
        res.send("Getting all the Matches");
    });

    router.post("/", async (req, res) => {
        let controller = new GameController(req.body);
        controller.workAsync();
        res.send("Post to Matches");
    });

    return router;
}

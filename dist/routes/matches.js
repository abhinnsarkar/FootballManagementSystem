"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMatchRoutes = void 0;
const express_1 = require("express");
function getMatchRoutes() {
    const router = (0, express_1.Router)();
    router.get("/", (req, res) => __awaiter(this, void 0, void 0, function* () {
        res.send("Getting all the Matches");
    }));
    router.post("/", (req, res) => __awaiter(this, void 0, void 0, function* () {
        const { venue, matchName, tournamentName, tournamentLongName, teams, winner, temperature, scorers, players, } = req.body;
        res.send("Posting to Matches");
    }));
    return router;
}
exports.getMatchRoutes = getMatchRoutes;
//# sourceMappingURL=matches.js.map
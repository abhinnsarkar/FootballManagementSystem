import express from "express";

import globalConfigs from "./settings/env";

import { getMatchRoutes } from "./routes/game";
import Tournament from "./models/TournamentModel";
import TournamentDBUtils from "./services/database/TournamentDBUtils";
import MatchDBUtils from "./services/database/MatchDBUtils";
import Match from "./models/MatchModel";
import MongoDBUtils from "./services/database/MongoDBUtils";

const app = express();
app.use(express.json());

const envPort = globalConfigs.PORT;
const PORT: Number = globalConfigs.PORT || 1234;

app.get("/", (req, res) => {
    res.send("hello world again");
});

app.use("/api/matches", getMatchRoutes());

app.listen(PORT, async () => {
    console.log(`Listening Again on Port ${PORT}`);
    // await doWork();
});

// async function doWork() {
//     const tournamentDoc = new Tournament("NFL", "National Football League");
//     const matchDoc = new Match("Germany vs Argentina");
//     let dbUtils = await new MongoDBUtils().connectToDatabase();
//     // await dbUtils.connectToDatabase();
//     const tournamentUtils: TournamentDBUtils = new TournamentDBUtils(dbUtils);
//     await tournamentUtils.insertDocument(tournamentDoc);
//     const matchUtils: MatchDBUtils = new MatchDBUtils(dbUtils);
//     await matchUtils.insertDocument(matchDoc);
// }

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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const env_1 = __importDefault(require("./settings/env"));
const game_1 = require("./routes/game");
const app = (0, express_1.default)();
app.use(express_1.default.json());
const envPort = env_1.default.PORT;
const PORT = env_1.default.PORT || 1234;
app.get("/", (req, res) => {
    res.send("hello world again");
});
app.use("/api/matches", (0, game_1.getMatchRoutes)());
app.listen(PORT, () => __awaiter(void 0, void 0, void 0, function* () {
    console.log(`Listening Again on Port ${PORT}`);
    // await doWork();
}));
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
//# sourceMappingURL=index.js.map
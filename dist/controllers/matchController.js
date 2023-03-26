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
const MongoDBUtils_1 = __importDefault(require("../services/database/MongoDBUtils"));
const MatchDBUtils_1 = __importDefault(require("../services/database/MatchDBUtils"));
const TournamentDBUtils_1 = __importDefault(require("../services/database/TournamentDBUtils"));
/**
 * knows it is dealing with Game data so that will all be hardcoded in
 */
class GameController {
    // matchUtils?: MatchDBUtils;
    // tournamentUtils?: MatchDBUtils;
    /**
     *
     */
    constructor() { }
    setupUtilsAndDb() {
        return __awaiter(this, void 0, void 0, function* () {
            this.dbUtils = yield new MongoDBUtils_1.default().connectToDatabase();
        });
    }
    /**
     * extracts all the info from json provided
     */
    process(jsonObj) {
        return __awaiter(this, void 0, void 0, function* () {
            JSON.parse(String(jsonObj));
        });
    }
    /**
     * make the Utils for each field in the Game
     */
    makeUtils() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.setupUtilsAndDb();
            if (this.dbUtils) {
                this.matchUtils = new MatchDBUtils_1.default(this.dbUtils);
                this.tournamentUtils = new TournamentDBUtils_1.default(this.dbUtils);
            }
        });
    }
    /**
     * gives a document for each field and function inserts that into the collection
     */
    insertDocs(matchDoc, tournamentDoc) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.makeUtils();
            if (matchDoc) {
                if (this.matchUtils) {
                    yield this.matchUtils.insertDocumentAsync(matchDoc);
                }
            }
            if (tournamentDoc) {
                if (this.tournamentUtils) {
                    yield this.tournamentUtils.insertDocumentAsync(tournamentDoc);
                }
            }
        });
    }
}
exports.default = GameController;
//# sourceMappingURL=matchController.js.map
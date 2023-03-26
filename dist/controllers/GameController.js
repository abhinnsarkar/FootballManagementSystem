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
const MatchModel_1 = __importDefault(require("../models/MatchModel"));
const TournamentModel_1 = __importDefault(require("../models/TournamentModel"));
/**
 * knows it is dealing with Game data so that will all be hardcoded in
 * must call setUpsAsync before calling insert
 */
class GameController {
    /**
     @param data the req body
     */
    constructor(data) {
        // this.data = this.process(data);
        this.process(data);
    }
    /**
     * extracts all the info from json provided and sets this.correspondingField to it
     */
    process(jsonObj) {
        // return JSON.parse(JSON.stringify(jsonObj));
        this.matchName = jsonObj.matchName;
        this.tournamentName = jsonObj.tournamentName;
        this.tournamentLongName = jsonObj.tournamentLongName;
    }
    setupUtilsAndDb() {
        return __awaiter(this, void 0, void 0, function* () {
            this.dbUtils = yield MongoDBUtils_1.default.build();
        });
    }
    /**
     * make the Utils for each field in the Game
     */
    makeUtilsAsync() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.setupUtilsAndDb();
            if (this.dbUtils) {
                this.matchUtils = new MatchDBUtils_1.default(this.dbUtils);
                this.tournamentUtils = new TournamentDBUtils_1.default(this.dbUtils);
            }
        });
    }
    makeDocs() {
        this.matchDoc = new MatchModel_1.default(this.matchName);
        this.tournamentDoc = new TournamentModel_1.default(this.tournamentName, this.tournamentLongName);
    }
    insertDocsAsync() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.matchDoc) {
                if (this.matchUtils) {
                    this.matchUtils.insertDocumentAsync(this.matchDoc);
                }
            }
            if (this.tournamentDoc) {
                if (this.tournamentUtils) {
                    this.tournamentUtils.insertDocumentAsync(this.tournamentDoc);
                }
            }
        });
    }
    workAsync() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("inside workAsync");
            // this.setupUtilsAndDb();
            yield this.makeUtilsAsync();
            this.makeDocs();
            yield this.insertDocsAsync();
        });
    }
}
exports.default = GameController;
//# sourceMappingURL=GameController.js.map
import * as mongoDb from "mongodb";

import MongoDBUtils from "../services/database/MongoDBUtils";
import MatchDBUtils from "../services/database/MatchDBUtils";
import TournamentDBUtils from "../services/database/TournamentDBUtils";

import MatchModel from "../models/MatchModel";
import TournamentModel from "../models/TournamentModel";
import GameModel from "../models/GameModel";

/**
 * knows it is dealing with Game data so that will all be hardcoded in
 * must call setUpsAsync before calling insert
 */
export default class GameController {
    private dbUtils?: MongoDBUtils;
    private matchUtils?: MatchDBUtils;
    private tournamentUtils?: TournamentDBUtils;
    // private venue?: String;
    private matchName?: string;
    private tournamentName?: string;
    private tournamentLongName?: string;
    // private teams?: [String];
    // private winner?: String;
    // private temperature?: any;
    // private scorers?: [JSON];
    // private players?: [JSON];

    private matchDoc?: MatchModel;
    private tournamentDoc?: TournamentModel;

    /**
     @param data the req body
     */
    constructor(data: GameModel) {
        // this.data = this.process(data);
        this.process(data);
    }

    /**
     * extracts all the info from json provided and sets this.correspondingField to it
     */
    private process(jsonObj: GameModel): void {
        // return JSON.parse(JSON.stringify(jsonObj));
        this.matchName = jsonObj.matchName;
        this.tournamentName = jsonObj.tournamentName;
        this.tournamentLongName = jsonObj.tournamentLongName;
    }

    private async setupUtilsAndDbAsync() {
        this.dbUtils = await MongoDBUtils.build();
    }

    /**
     * make the Utils for each field in the Game
     */
    private async makeUtilsAsync() {
        await this.setupUtilsAndDbAsync();
        if (this.dbUtils) {
            this.matchUtils = new MatchDBUtils(this.dbUtils);
            this.tournamentUtils = new TournamentDBUtils(this.dbUtils);
        }
    }

    private makeDocs() {
        this.matchDoc = new MatchModel(this.matchName!);
        this.tournamentDoc = new TournamentModel(
            this.tournamentName!,
            this.tournamentLongName!
        );
    }

    private async insertDocsAsync() {
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
    }

    public async workAsync() {
        console.log("inside workAsync");
        await this.makeUtilsAsync();
        this.makeDocs();
        await this.insertDocsAsync();
    }
}

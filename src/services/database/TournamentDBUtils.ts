import { Collection, InsertOneResult } from "mongodb";

import MongoDBUtils from "./MongoDBUtils";
import Tournament from "../../models/TournamentModel";

export default class TournamentDBUtils {
    dbUtils: MongoDBUtils;
    private static collectionName: string = "tournament";

    /**
     * Does all 'Tournament' related things by being provided MongoDbUtils
     */
    constructor(dbUtils: MongoDBUtils) {
        this.dbUtils = dbUtils;
    }

    async insertDocumentAsync(document: Tournament): Promise<InsertOneResult> {
        let collection = await this.dbUtils.getCollectionInstance(
            TournamentDBUtils.collectionName
        );

        let collectionTypeObject = collection as Collection<Tournament>;

        let result = collectionTypeObject.insertOne(document);
        return result;
    }
}

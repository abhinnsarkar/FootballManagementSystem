import { Collection, InsertOneResult } from "mongodb";

import MongoDBUtils from "./MongoDBUtils";
import Match from "../../models/MatchModel";

export default class MatchDBUtils {
    dbUtils: MongoDBUtils;
    private static collectionName: string = "match";

    /**
     * Does all 'Tournament' related things by being provided MongoDbUtils
     */
    constructor(dbUtils: MongoDBUtils) {
        this.dbUtils = dbUtils;
    }

    async insertDocumentAsync(document: Match): Promise<InsertOneResult> {
        let collection = await this.dbUtils.getCollectionInstance(
            MatchDBUtils.collectionName
        );

        let collectionTypeObject = collection as Collection<Match>;

        let result = collectionTypeObject.insertOne(document);
        return result;
    }
}

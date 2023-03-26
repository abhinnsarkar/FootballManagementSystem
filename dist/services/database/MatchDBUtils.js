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
class MatchDBUtils {
    /**
     * Does all 'Tournament' related things by being provided MongoDbUtils
     */
    constructor(dbUtils) {
        this.dbUtils = dbUtils;
    }
    insertDocumentAsync(document) {
        return __awaiter(this, void 0, void 0, function* () {
            let collection = yield this.dbUtils.getCollectionInstance(MatchDBUtils.collectionName);
            let collectionTypeObject = collection;
            let result = collectionTypeObject.insertOne(document);
            return result;
        });
    }
}
exports.default = MatchDBUtils;
MatchDBUtils.collectionName = "match";
//# sourceMappingURL=MatchDBUtils.js.map
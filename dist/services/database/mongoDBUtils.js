"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const mongoDB = __importStar(require("mongodb"));
class MongoDBUtils {
    /**
   @param dbName The name of the db used for operations
   */
    // constructor(dbName: string) {
    constructor() {
        // collection?: mongoDB.Collection<any>;
        this.collectionSet = new Map();
        this.connectionString =
            "mongodb://username:password@localhost:1234/?authMechanism=DEFAULT";
        this.dbName = "football";
    }
    static build() {
        return __awaiter(this, void 0, void 0, function* () {
            let selfUtils = new MongoDBUtils();
            yield selfUtils.connectToDatabase();
            return selfUtils;
        });
    }
    /**
     *
     * @returns the class itself so connectToDatabase can be chanined onto the creation of dbUtils
     */
    connectToDatabase() {
        return __awaiter(this, void 0, void 0, function* () {
            const client = new mongoDB.MongoClient(this.connectionString);
            var connectRes = yield client.connect();
            this.db = client.db(this.dbName);
            console.log("just set db");
            return this;
        });
    }
    getCollectionInstance(collectionName) {
        return __awaiter(this, void 0, void 0, function* () {
            let existingcollectionInstance = this.collectionSet.get(collectionName);
            if (existingcollectionInstance) {
                return existingcollectionInstance;
            }
            else {
                // existing collection is null
                let newCollectionInstance = yield this.createCollection(collectionName);
                this.collectionSet.set(collectionName, newCollectionInstance);
                return newCollectionInstance;
            }
        });
    }
    createCollection(collectionName) {
        return __awaiter(this, void 0, void 0, function* () {
            let collection = this.db.collection(collectionName);
            // let collection = this.collectionSet.set(
            //   collectionName,
            //   this.db!.collection<T>(collectionName)
            // );
            // let collectionToReturn = this.collectionSet.get(collectionName);
            return collection;
        });
    }
}
exports.default = MongoDBUtils;
//# sourceMappingURL=MongoDBUtils.js.map
import * as mongoDB from "mongodb";

export default class MongoDBUtils {
    /**
     * Connection String for db
     */
    connectionString: string;
    dbName: string;
    db?: mongoDB.Db;
    // collection?: mongoDB.Collection<any>;
    collectionSet: Map<string, mongoDB.Collection<any>> = new Map();

    /**
   @param dbName The name of the db used for operations
   */
    // constructor(dbName: string) {
    private constructor() {
        this.connectionString =
            "mongodb://username:password@localhost:1234/?authMechanism=DEFAULT";
        this.dbName = "football";
    }

    public static async build() {
        let selfUtils = new MongoDBUtils();
        await selfUtils.connectToDatabase();
        return selfUtils;
    }

    /**
     *
     * @returns the class itself so connectToDatabase can be chanined onto the creation of dbUtils
     */
    private async connectToDatabase() {
        const client: mongoDB.MongoClient = new mongoDB.MongoClient(
            this.connectionString
        );

        var connectRes = await client.connect();
        this.db = client.db(this.dbName);
        console.log("just set db");
        return this;
    }

    public async getCollectionInstance<T extends mongoDB.BSON.Document>(
        collectionName: string
    ): Promise<any> {
        let existingcollectionInstance = this.collectionSet.get(collectionName);

        if (existingcollectionInstance) {
            return existingcollectionInstance;
        } else {
            // existing collection is null
            let newCollectionInstance = await this.createCollection(
                collectionName
            );
            this.collectionSet.set(collectionName, newCollectionInstance);
            return newCollectionInstance;
        }
    }

    private async createCollection<T extends mongoDB.BSON.Document>(
        collectionName: string
    ): Promise<mongoDB.Collection<T>> {
        let collection = this.db!.collection<T>(collectionName);
        // let collection = this.collectionSet.set(
        //   collectionName,
        //   this.db!.collection<T>(collectionName)
        // );
        // let collectionToReturn = this.collectionSet.get(collectionName);
        return collection;
    }

    // async insertDocument<T extends mongoDB.BSON.Document>(
    //   collectionName: string,
    //   document: T
    // ) {
    //   let collectionInstanceExists = this.collectionSet.has(collectionName);
    //   if (collectionInstanceExists) {
    //     this.collectionSet.get(collectionName)?.insertOne(document);
    //   } else {
    //     this.createCollection(collectionName);
    //     let collection = this.collectionSet.get(collectionName);
    //     await collection?.insertOne(document);
    //   }
    //   // await this.createCollection<T>(collectionName);
    //   // if (this.collectionSet.get(collectionName) === null) {
    //   //   throw new Error();
    //   // } else {
    //   //   let collection = this.collectionSet.get(collectionName);
    //   //   if()
    //   //   var res = await this.collection?.insertOne(doc);
    //   //   if (res) {
    //   //     console.log("true inserted the doc");
    //   //     return true;
    //   //   } else {
    //   //     console.log("false did not insert the doc");
    //   //     return false;
    //   //   }
    //   // }
    // }
}

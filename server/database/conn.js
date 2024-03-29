import mongoose from "mongoose";

import { MongoMemoryServer } from "mongodb-memory-server";

async function connect(){

    const mongod = await MongoMemoryServer.create();

    mongoose.set('strictQuery', true)
    const db = await mongoose.connect(process.env.MONGODB_URI);
    console.log("Database Connected")
    return db;
}

export default connect;
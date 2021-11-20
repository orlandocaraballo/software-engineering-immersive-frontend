import { MongoClient } from "mongodb";

const client = new MongoClient(
  "mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000",
  { monitorCommands: true }
);

// setup our monitoring
client.on("commandStarted", console.debug);
client.on("commandSucceeded", console.debug);
client.on("commandFailed", console.debug);

try {
  await client.connect();
} catch (err) {
  console.error(
    `An error has occured while connecting to the database: ${err}`
  );
}

const db = client.db("software-engineering-immersive");

export default db;

export const studentsCollection = db.collection("students");
import { MongoClient } from 'mongodb';

const MONGODB_URI = process.env.NEXT_PUBLIC_MONGODB_URI; // Get the connection string from the environment variable
const MONGODB_DB = process.env.NEXT_PUBLIC_MONGODB_DB;   // The name of your database

if (!MONGODB_URI) {
  throw new Error('Please add your Mongo URI to the .env.local file');
}

if (!MONGODB_DB) {
  throw new Error('Please add your Mongo DB name to the .env.local file');
}

let client;
let db;

async function connectToDatabase() {
  if (client && db) {
    return { client, db };
  }

  client = new MongoClient(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  await client.connect();
  db = client.db(MONGODB_DB);

  return { client, db };
}

export { connectToDatabase };

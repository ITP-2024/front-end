// pages/api/mongo.ts
import { MongoClient, Db } from 'mongodb';

let cachedDb: Db | null = null;

async function connectToDatabase() {
  const uri = 'mongodb+srv://admin:1234@cluster0.oqqgxrp.mongodb.net/';

  if (cachedDb) {
    return cachedDb;
  }

  const client = new MongoClient(uri);
  
  try {
    await client.connect();
    const db = client.db('KpopShop'); // Specify the database name here
    cachedDb = db;
    return db;
  } catch (error) {
    console.error('Error connecting to the database:', error);
    throw error;
  }
}

export default connectToDatabase;
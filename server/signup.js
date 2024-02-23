// server/signup.js

import { MongoClient, ServerApiVersion } from 'mongodb';

const uri = "mongodb+srv://admin2:HelloStranger@atlasarena.wtmdug6.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

export default async function handler(req, res) {
    console.log('Received a request:', req.method);

  try {
    await client.connect();
    const database = client.db("registration");
    const collection = database.collection("registrationInfo");

    // Perform MongoDB operations

    res.status(200).json({ success: true });
  } finally {
    await client.close();
  }
}

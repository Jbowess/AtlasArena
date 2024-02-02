import { MongoClient } from 'mongodb';

const uri = "mongodb+srv://admin:Windowshp321!@atlasarena.wtmdug6.mongodb.net/registration?retryWrites=true&w=majority";
const client = new MongoClient(uri);

export default async function handler(req, res) {
  console.log('Received a request:', req.method);

  try {
    await client.connect();
    const database = client.db("registration");
    const collection = database.collection("registrationInfo");

    const {
      email,
      password,
      country,
      day,
      month,
      year,
      mobileNumber,
      countryCode,
      promoAgreement,
      termsAgreement,
    } = req.body; // Extract form data from req.body

    const formData = {
      email,
      password,
      country,
      day,
      month,
      year,
      mobileNumber,
      countryCode,
      promoAgreement,
      termsAgreement,
    };

    const result = await collection.insertOne(formData);

    console.log(`${result.insertedCount} documents were inserted`);

    res.status(200).json({ success: true });
  } finally {
    await client.close();
  }
}

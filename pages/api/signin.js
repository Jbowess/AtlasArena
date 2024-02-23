import { MongoClient } from 'mongodb';

const uri = "mongodb+srv://admin2:HelloStranger@atlasarena.wtmdug6.mongodb.net/registration?retryWrites=true&w=majority";
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
    } = req.body; // Extract form data from req.body

    const formData = {
      email,
      password,
    };

    // Check if the email and password match an existing record
    const user = await collection.findOne({ email, password });

    if (user) {
      // Email and password match, login successful
      res.status(200).json({
        success: true,
        message: 'Welcome To Atlas Arena',
        userData: {
          userId: user._id,
          email: user.email,
          password: user.password,
          country: user.country,
          day: user.day,
          month: user.month,
          year: user.year,
          mobileNumber: user.mobileNumber,
          countryCode: user.countryCode
        },
      });    
    } else {
      // Email or password is incorrect
      res.status(401).json({ success: false, message: "Invalid credentials" });
    }
  } finally {
    await client.close();
  }
}
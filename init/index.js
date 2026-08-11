require('dotenv').config();

const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const ATLAS_URL = process.env.ATLASDB_URL;

if (!ATLAS_URL) {
  console.error('ATLASDB_URL is not defined. Aborting seeding to prevent accidental local writes.');
  process.exit(1);
}

async function main() {
  try {
    console.log(`Using MongoDB Atlas: ${ATLAS_URL}`);
    await mongoose.connect(ATLAS_URL);
    console.log('Connected to MongoDB Atlas');
  } catch (err) {
    console.error('Failed to connect to MongoDB Atlas:', err.message);
    process.exit(1);
  }
}

const initDB = async () => {
  try {
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj) => ({ ...obj, owner: "6892ea38352a1702e80144af" }));
    await Listing.insertMany(initData.data);
    console.log("data was initialized");
  } catch (err) {
    console.error('Seeding failed:', err.message);
    process.exit(1);
  }
};

(async () => {
  await main();
  await initDB();
  await mongoose.connection.close();
  process.exit(0);
})();
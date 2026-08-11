const mongoose = require('mongoose');
const Listing = require('../models/listing');
const initData = require('./data');

const MONGO_URL =
  process.env.ATLASDB_URL ||
  process.env.MONGO_URL ||
  'mongodb://127.0.0.1:27017/destino';

async function main(){
  await mongoose.connect(MONGO_URL);
  console.log('Connected to DB for migration');

  const data = initData.data || [];
  let updated = 0;
  let notFound = 0;

  for (const item of data){
    if(!item.title) continue;
    const doc = await Listing.findOne({ title: item.title });
    if(doc){
      const newCat = (item.category || '').toLowerCase();
      if(newCat && doc.category !== newCat){
        doc.category = newCat;
        await doc.save();
        updated++;
        console.log(`Updated: ${item.title} -> ${newCat}`);
      }
    } else {
      notFound++;
      console.log(`Not found in DB: ${item.title}`);
    }
  }

  console.log(`Migration complete. Updated: ${updated}, Not found: ${notFound}`);
  await mongoose.connection.close();
  process.exit(0);
}

main().catch(err => {
  console.error('Migration error', err);
  process.exit(1);
});

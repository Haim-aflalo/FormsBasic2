import mongoose from 'mongoose';
import 'dotenv/config';

export async function connectMongo() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Database is connected');
  } catch (err) {
    console.error('Error connecting to the database:', err);
    process.exit(1);
  }
}

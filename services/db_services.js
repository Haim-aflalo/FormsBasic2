import { connectMongo } from '../config/connection.js';
import mongoose from 'mongoose';
import { userSchema } from '../models/schema.js';

const User = mongoose.model('courses', userSchema);

export async function createStudent(data) {
  const db = await connectMongo();
  return await User.create(data);
}

export async function getAllStudents() {
  const db = await connectMongo();
  return await User.find({});
}

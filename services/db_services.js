import { connectMongo } from '../config/connection.js';

export async function createStudent(data) {
  const db = await connectMongo();
  return await db.collection('Courses').insertOne(data);
}

export async function getAllStudents() {
  const db = await connectMongo();
  return await db.collection('Courses').find().toArray();
}

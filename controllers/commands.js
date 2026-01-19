import { createStudent, getAllStudents } from '../services/db_services.js';

export async function create(req, res) {
  try {
    const student = await createStudent(req.body);
    res.status(200).send(student);
  } catch (error) {
    console.error(error);
  }
}

export async function getAll(req, res) {
  try {
    const students = await getAllStudents();
    res.status(200).send(students);
  } catch (error) {
    console.error(error);
  }
}

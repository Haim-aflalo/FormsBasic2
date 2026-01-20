import mongoose from 'mongoose';

export const userSchema = new mongoose.Schema({
  fname: {
    type: String,
    required: true,
  },
  lname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  birth: {
    type: Date,
    required: true,
  },
  Gender: {
    type: String,
    required: true,
    enum: ['Men', 'Women', 'Other'],
  },
  Courses: {
    type: String,
    required: true,
    enum: ['Python', 'SQL', 'JavaScript'],
  },
  regulations: {
    type: String,
    required: true,
    enum: ['on', 'off'],
  },
});

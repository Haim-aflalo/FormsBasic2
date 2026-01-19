import express from 'express';
import { create, getAll } from '../controllers/commands.js';

export const Router = express.Router();


Router.post('/register', (req, res) => {
  create(req, res);
});

Router.get('/students', (req, res) => {
  getAll(req, res);
});

import express from 'express';
import Schedule from '../models/Schedule';

const router = express.Router();

// Create a new schedule
router.post('/', async (req, res) => {
  try {
    const schedule = new Schedule(req.body);
    await schedule.save();
    res.status(201).send(schedule);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Implement other CRUD operations (Read, Update, Delete) here

export default router;
import express from 'express';
import F1Schedule from '../models/F1Schedule';

const router = express.Router();

// Fetch all F1 schedules
router.get('/', async (req, res) => {
  try {
    const schedules = await F1Schedule.find({});
    res.send(schedules);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Fetch a single F1 schedule
router.get('/:id', async (req, res) => {
  try {
    const schedule = await F1Schedule.findById(req.params.id);
    res.send(schedule);
  } catch (error) {
    res.status(500).send
  }
});

export default router;
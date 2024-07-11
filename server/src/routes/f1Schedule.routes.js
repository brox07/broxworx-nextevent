import express from 'express';
import F1Schedule from '../models/F1Schedule';

const router = express.Router();

// Fetch all F1 schedules
router.get('/f1-schedule', async (req, res) => {
  try {
    const schedules = await F1Schedule.find({});
    res.send(schedules);
  } catch (error) {
    res.status(500).send(error);
  }
});

export default router;
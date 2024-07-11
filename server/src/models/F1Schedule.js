import mongoose from 'mongoose';

const f1ScheduleSchema = new mongoose.Schema({
  id: Number,
  event: String,
  sport: String,
  teams: String,
  start_date: String,
  start_time: String,
  end_date: String,
  timezone: String,
});

const F1Schedule = mongoose.model('F1Schedule', f1ScheduleSchema);

export default F1Schedule;
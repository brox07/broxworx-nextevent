import mongoose from 'mongoose';

const scheduleSchema = new mongoose.Schema({
  // Define your schema according to the data structure you have
  name: String,
  time: String,
  // Add other fields as necessary
});

const Schedule = mongoose.model('Schedule', scheduleSchema);

export default Schedule;
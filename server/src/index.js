// server.js
import bodyParser from 'body-parser';
import express from 'express';
import router from './routes';
import './config/mongodb.config';
//import f1ScheduleRoutes from './routes/f1Schedule.routes';

const app = express();
const PORT = 8080;

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json());

app.use('/api', router);

app.get('/', function(req, res){
  res.send('Hello! from the Server ');
});

//app.use('/api/f1-schedule', f1ScheduleRoutes);

app.listen(PORT, function () {
    console.log(`Server Listening on ${PORT}`);
});

export default app;

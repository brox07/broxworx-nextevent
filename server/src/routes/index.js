// require('dotenv').config();
 // function Router(app){
//      // Posts routes
//      app.use('/api/posts', postRoutes);
// }
// export default Router;
import express from 'express';

import f1ScheduleRoutes from './f1Schedule.routes';
import app from '..';

let router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello World');
})

app.use('/api/f1-schedule', f1ScheduleRoutes);

export default router;
// require('dotenv').config();
 // function Router(app){
//      // Posts routes
//      app.use('/api/posts', postRoutes);
// }
// export default Router;
import express from 'express';

import scheduleRoutes from './schedule.routes';
import app from '..';

let router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello World');
})

//app.use('/api/schedules', scheduleRoutes);

export default router;
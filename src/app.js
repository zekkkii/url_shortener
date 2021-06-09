/* eslint-disable new-cap */
import express from 'express';

import routes from './routes/index';
import {notFound404} from './middlewares/index';

const app = express();

app.use(express.json());
app.use('/', routes);
app.use(notFound404);

app.listen(3000, async ()=> {
  console.log(`Working on port 3000`);
});

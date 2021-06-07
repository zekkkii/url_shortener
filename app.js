import express from 'express';

import routes from './routes/index';
import {notFound404} from './middlewares/index';

const app = express();

app.use(express.json());
app.use('/', routes);
app.use(notFound404);

const port = 3000;

app.listen(port, async () => {
  console.log(`Working on port ${port}`);
});

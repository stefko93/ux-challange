import express from 'express';
import morgan from 'morgan';
import logger from './logger';
import bodyParser from 'body-parser';

import { api } from './routes';
import errorHandler from './middlewares/error-handler';

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(morgan('combined', { stream: logger.stream }));
app.use('/api', api);

app.use(errorHandler);

export default app;

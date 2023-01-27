import express from 'express';
import morgan from 'morgan';
import logger from './logger';
import cors from 'cors';
import bodyParser from 'body-parser';

import { api } from './routes';
import errorHandler from './middlewares/error-handler';

const app = express();

app.use(express.urlencoded());
// app.use(cors());
// app.use(express.urlencoded({extended: true}));
// app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use(morgan('combined', { stream: logger.stream }));
app.use('/api', api);

app.use(errorHandler);

export default app;

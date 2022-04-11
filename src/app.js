import express from 'express';
import  morgan from 'morgan';
import routes from './routes.js';
export const app = express();

app.use(express.json());
app.use(morgan('tiny'));
app.use(routes);
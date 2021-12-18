import 'dotenv/config';
import 'reflect-metadata';
import './database';
import express from 'express';
import { router } from './routes';
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api/v1', router);

export { app };
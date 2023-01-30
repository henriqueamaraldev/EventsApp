import express from 'express';
import { allRoutes } from './routes';
import mongoose from 'mongoose';
import { databaseConnection } from './database/connection';

const app = express();
app.use(express.json());

const PORT = 3000;

databaseConnection()

allRoutes(app)

app.listen(PORT, () => {
    console.log('listening on port ' + PORT);
})
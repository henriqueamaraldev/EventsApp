import express from 'express';
import { allRoutes } from './routes';
import { databaseConnection } from './database/connection';
import * as dotenv from 'dotenv'

const app = express();

app.use(express.json());

dotenv.config()

const PORT = process.env.PORT || 3000;

databaseConnection()

allRoutes(app)

app.listen(PORT, () => {
    console.log('listening on port ' + PORT);
})
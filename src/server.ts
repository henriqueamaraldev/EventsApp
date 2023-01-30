import express from 'express';
import { allRoutes } from './routes';
import mongoose from 'mongoose';

const app = express();
app.use(express.json());

const PORT = 3000;

mongoose.connect('mongodb://<username>:<password>@ac-syegvkh-shard-00-00.oreoidt.mongodb.net:27017,ac-syegvkh-shard-00-01.oreoidt.mongodb.net:27017,ac-syegvkh-shard-00-02.oreoidt.mongodb.net:27017/?ssl=true&replicaSet=atlas-33b5t4-shard-0&authSource=admin&retryWrites=true&w=majority')

allRoutes(app)

app.listen(PORT, () => {
    console.log('listening on port ' + PORT);
})
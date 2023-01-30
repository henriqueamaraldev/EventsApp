import mongoose from 'mongoose';

export const mongooseConection = () => {
    mongoose.connect('mongodb://<username>:<password>@ac-syegvkh-shard-00-00.oreoidt.mongodb.net:27017,ac-syegvkh-shard-00-01.oreoidt.mongodb.net:27017,ac-syegvkh-shard-00-02.oreoidt.mongodb.net:27017/?ssl=true&replicaSet=atlas-33b5t4-shard-0&authSource=admin&retryWrites=true&w=majority')
}

import mongoose from 'mongoose';
import debug from 'debug';

const log: debug.IDebugger = debug('app:mongoose-service');

class MongooseService {
  private count = 0;
  private mongooseOptions = {
    useNewUrlParser: true,
    serverSelectionTimeoutMS: 5000,
  };

  constructor() {
    this.connectWithRetry();
  }

  getMongoose() {
    return mongoose;
  }

  connectWithRetry = () => {
    log('Attempting MongoDB connection (will retry if needed)');
    mongoose
      .connect(
        'mongodb+srv://hassan:hassan123@cluster0.rfzfg.mongodb.net/lending-experties?retryWrites=true&w=majority',
        this.mongooseOptions
      )
      .then(() => {
        console.log('Mondo db connected');
        log('MongoDB is connected');
      })
      .catch((err) => {
        console.log('Mondo db not connected');
        const retrySeconds = 5;
        log(
          `MongoDB connection unsuccessful (will retry #${++this
            .count} after ${retrySeconds} seconds):`,
          err
        );
        setTimeout(this.connectWithRetry, retrySeconds * 1000);
      });
  };
}
export default new MongooseService();

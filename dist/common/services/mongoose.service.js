'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const mongoose_1 = __importDefault(require('mongoose'));
const debug_1 = __importDefault(require('debug'));
const log = (0, debug_1.default)('app:mongoose-service');
class MongooseService {
  constructor() {
    this.count = 0;
    this.mongooseOptions = {
      useNewUrlParser: true,
      serverSelectionTimeoutMS: 5000,
    };
    this.connectWithRetry = () => {
      log('Attempting MongoDB connection (will retry if needed)');
      mongoose_1.default
        .connect(
          'mongodb+srv://hassan:hassan123@cluster0.rfzfg.mongodb.net/lending-experties?retryWrites=true&w=majority',
          this.mongooseOptions
        )
        .then(() => {
          log('MongoDB is connected');
        })
        .catch((err) => {
          const retrySeconds = 5;
          log(
            `MongoDB connection unsuccessful (will retry #${++this
              .count} after ${retrySeconds} seconds):`,
            err
          );
          setTimeout(this.connectWithRetry, retrySeconds * 1000);
        });
    };
    this.connectWithRetry();
  }
  getMongoose() {
    return mongoose_1.default;
  }
}
exports.default = new MongooseService();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9uZ29vc2Uuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NvbW1vbi9zZXJ2aWNlcy9tb25nb29zZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsd0RBQWdDO0FBQ2hDLGtEQUEwQjtBQUUxQixNQUFNLEdBQUcsR0FBb0IsSUFBQSxlQUFLLEVBQUMsc0JBQXNCLENBQUMsQ0FBQztBQUUzRCxNQUFNLGVBQWU7SUFPbkI7UUFOUSxVQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ1Ysb0JBQWUsR0FBRztZQUN4QixlQUFlLEVBQUUsSUFBSTtZQUNyQix3QkFBd0IsRUFBRSxJQUFJO1NBQy9CLENBQUM7UUFVRixxQkFBZ0IsR0FBRyxHQUFHLEVBQUU7WUFDdEIsR0FBRyxDQUFDLHNEQUFzRCxDQUFDLENBQUM7WUFDNUQsa0JBQVE7aUJBQ0wsT0FBTyxDQUNOLHlHQUF5RyxFQUN6RyxJQUFJLENBQUMsZUFBZSxDQUNyQjtpQkFDQSxJQUFJLENBQUMsR0FBRyxFQUFFO2dCQUNULEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1lBQzlCLENBQUMsQ0FBQztpQkFDRCxLQUFLLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRTtnQkFDYixNQUFNLFlBQVksR0FBRyxDQUFDLENBQUM7Z0JBQ3ZCLEdBQUcsQ0FDRCxnREFBZ0QsRUFBRSxJQUFJO3FCQUNuRCxLQUFLLFVBQVUsWUFBWSxZQUFZLEVBQzFDLEdBQUcsQ0FDSixDQUFDO2dCQUNGLFVBQVUsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsWUFBWSxHQUFHLElBQUksQ0FBQyxDQUFDO1lBQ3pELENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxDQUFDO1FBMUJBLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFFRCxXQUFXO1FBQ1QsT0FBTyxrQkFBUSxDQUFDO0lBQ2xCLENBQUM7Q0FzQkY7QUFDRCxrQkFBZSxJQUFJLGVBQWUsRUFBRSxDQUFDIn0=

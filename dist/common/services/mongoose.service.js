"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const debug_1 = __importDefault(require("debug"));
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
                .connect('mongodb://localhost:27017/lending', this.mongooseOptions)
                .then(() => {
                log('MongoDB is connected');
            })
                .catch((err) => {
                const retrySeconds = 5;
                log(`MongoDB connection unsuccessful (will retry #${++this
                    .count} after ${retrySeconds} seconds):`, err);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9uZ29vc2Uuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NvbW1vbi9zZXJ2aWNlcy9tb25nb29zZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsd0RBQWdDO0FBQ2hDLGtEQUEwQjtBQUUxQixNQUFNLEdBQUcsR0FBb0IsSUFBQSxlQUFLLEVBQUMsc0JBQXNCLENBQUMsQ0FBQztBQUUzRCxNQUFNLGVBQWU7SUFPbkI7UUFOUSxVQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ1Ysb0JBQWUsR0FBRztZQUN4QixlQUFlLEVBQUUsSUFBSTtZQUNyQix3QkFBd0IsRUFBRSxJQUFJO1NBQy9CLENBQUM7UUFVRixxQkFBZ0IsR0FBRyxHQUFHLEVBQUU7WUFDdEIsR0FBRyxDQUFDLHNEQUFzRCxDQUFDLENBQUM7WUFDNUQsa0JBQVE7aUJBQ0wsT0FBTyxDQUFDLG1DQUFtQyxFQUFFLElBQUksQ0FBQyxlQUFlLENBQUM7aUJBQ2xFLElBQUksQ0FBQyxHQUFHLEVBQUU7Z0JBQ1QsR0FBRyxDQUFDLHNCQUFzQixDQUFDLENBQUM7WUFDOUIsQ0FBQyxDQUFDO2lCQUNELEtBQUssQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFO2dCQUNiLE1BQU0sWUFBWSxHQUFHLENBQUMsQ0FBQztnQkFDdkIsR0FBRyxDQUNELGdEQUFnRCxFQUFFLElBQUk7cUJBQ25ELEtBQUssVUFBVSxZQUFZLFlBQVksRUFDMUMsR0FBRyxDQUNKLENBQUM7Z0JBQ0YsVUFBVSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxZQUFZLEdBQUcsSUFBSSxDQUFDLENBQUM7WUFDekQsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUM7UUF2QkEsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUVELFdBQVc7UUFDVCxPQUFPLGtCQUFRLENBQUM7SUFDbEIsQ0FBQztDQW1CRjtBQUNELGtCQUFlLElBQUksZUFBZSxFQUFFLENBQUMifQ==
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const debug_1 = __importDefault(require("debug"));
const log = (0, debug_1.default)('app:common-permission-middleware');
class CommonPermissionMiddleware {
    permissionFlagRequired(requiredPermissionFlag) {
        return (req, res, next) => {
            try {
                const userPermissionFlags = res.locals.jwt.permissionFlags;
                if (userPermissionFlags == requiredPermissionFlag) {
                    next();
                }
                else {
                    res.status(403).send();
                }
            }
            catch (e) {
                log(e);
            }
        };
    }
}
exports.default = new CommonPermissionMiddleware();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLnBlcm1pc3Npb24ubWlkZGxld2FyZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NvbW1vbi9taWRkbGV3YXJlL2NvbW1vbi5wZXJtaXNzaW9uLm1pZGRsZXdhcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxrREFBMEI7QUFFMUIsTUFBTSxHQUFHLEdBQW9CLElBQUEsZUFBSyxFQUFDLGtDQUFrQyxDQUFDLENBQUM7QUFFdkUsTUFBTSwwQkFBMEI7SUFDOUIsc0JBQXNCLENBQUMsc0JBQW9DO1FBQ3pELE9BQU8sQ0FDTCxHQUFvQixFQUNwQixHQUFxQixFQUNyQixJQUEwQixFQUMxQixFQUFFO1lBQ0YsSUFBSTtnQkFDRixNQUFNLG1CQUFtQixHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQztnQkFDM0QsSUFBSSxtQkFBbUIsSUFBSSxzQkFBc0IsRUFBRTtvQkFDakQsSUFBSSxFQUFFLENBQUM7aUJBQ1I7cUJBQU07b0JBQ0wsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztpQkFDeEI7YUFDRjtZQUFDLE9BQU8sQ0FBQyxFQUFFO2dCQUNWLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNSO1FBQ0gsQ0FBQyxDQUFDO0lBQ0osQ0FBQztDQUNGO0FBRUQsa0JBQWUsSUFBSSwwQkFBMEIsRUFBRSxDQUFDIn0=
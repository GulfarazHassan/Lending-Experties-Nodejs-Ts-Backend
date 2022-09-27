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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLnBlcm1pc3Npb24ubWlkZGxld2FyZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tb24vbWlkZGxld2FyZS9jb21tb24ucGVybWlzc2lvbi5taWRkbGV3YXJlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsa0RBQTBCO0FBRTFCLE1BQU0sR0FBRyxHQUFvQixJQUFBLGVBQUssRUFBQyxrQ0FBa0MsQ0FBQyxDQUFDO0FBRXZFLE1BQU0sMEJBQTBCO0lBQzlCLHNCQUFzQixDQUFDLHNCQUFvQztRQUN6RCxPQUFPLENBQ0wsR0FBb0IsRUFDcEIsR0FBcUIsRUFDckIsSUFBMEIsRUFDMUIsRUFBRTtZQUNGLElBQUk7Z0JBQ0YsTUFBTSxtQkFBbUIsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUM7Z0JBQzNELElBQUksbUJBQW1CLElBQUksc0JBQXNCLEVBQUU7b0JBQ2pELElBQUksRUFBRSxDQUFDO2lCQUNSO3FCQUFNO29CQUNMLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7aUJBQ3hCO2FBQ0Y7WUFBQyxPQUFPLENBQUMsRUFBRTtnQkFDVixHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDUjtRQUNILENBQUMsQ0FBQztJQUNKLENBQUM7Q0FDRjtBQUVELGtCQUFlLElBQUksMEJBQTBCLEVBQUUsQ0FBQyJ9
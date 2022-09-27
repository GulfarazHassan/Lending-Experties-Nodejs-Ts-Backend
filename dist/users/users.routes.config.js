"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersRoutes = void 0;
const common_routes_config_1 = require("../common/common.routes.config");
const users_controller_1 = __importDefault(require("./controllers/users.controller"));
const users_middleware_1 = __importDefault(require("./middleware/users.middleware"));
const express_validator_1 = require("express-validator");
const body_validation_middleware_1 = __importDefault(require("../common/middleware/body.validation.middleware"));
const jwt_middleware_1 = __importDefault(require("../Auth/middleware/jwt.middleware"));
class UsersRoutes extends common_routes_config_1.CommonRoutesConfig {
    constructor(app) {
        super(app, 'UsersRoutes');
    }
    configureRoutes() {
        this.app
            .route(`/users`)
            .get(jwt_middleware_1.default.validJWTNeeded, users_controller_1.default.listUsers)
            .post((0, express_validator_1.body)('email').isEmail(), (0, express_validator_1.body)('password')
            .isLength({ min: 5 })
            .withMessage('Must include password (5+ characters)'), body_validation_middleware_1.default.verifyBodyFieldsErrors, users_middleware_1.default.validateSameEmailDoesntExist, users_controller_1.default.createUser);
        this.app.param(`userId`, users_middleware_1.default.extractUserId);
        this.app
            .route(`/users/:userId`)
            .all(users_middleware_1.default.validateUserExists, jwt_middleware_1.default.validJWTNeeded)
            .get(users_controller_1.default.getUserById)
            .delete(users_controller_1.default.removeUser);
        this.app.put(`/users/:userId`, [
            (0, express_validator_1.body)('email').isEmail(),
            (0, express_validator_1.body)('password')
                .isLength({ min: 5 })
                .withMessage('Must include password (5+ characters)'),
            (0, express_validator_1.body)('firstName').isString(),
            (0, express_validator_1.body)('lastName').isString(),
            (0, express_validator_1.body)('permissionFlags').isInt(),
            body_validation_middleware_1.default.verifyBodyFieldsErrors,
            users_middleware_1.default.validateSameEmailBelongToSameUser,
            users_controller_1.default.put,
        ]);
        this.app.patch(`/users/:userId`, [
            (0, express_validator_1.body)('email').isEmail().optional(),
            (0, express_validator_1.body)('password')
                .isLength({ min: 5 })
                .withMessage('Password must be 5+ characters')
                .optional(),
            (0, express_validator_1.body)('firstName').isString().optional(),
            (0, express_validator_1.body)('lastName').isString().optional(),
            (0, express_validator_1.body)('permissionFlags').isInt().optional(),
            body_validation_middleware_1.default.verifyBodyFieldsErrors,
            users_middleware_1.default.validatePatchEmail,
            users_controller_1.default.patch,
        ]);
        return this.app;
    }
}
exports.UsersRoutes = UsersRoutes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMucm91dGVzLmNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL1VzZXJzL3VzZXJzLnJvdXRlcy5jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEseUVBQW9FO0FBQ3BFLHNGQUE2RDtBQUM3RCxxRkFBNEQ7QUFFNUQseURBQXlDO0FBQ3pDLGlIQUF1RjtBQUN2Rix1RkFBOEQ7QUFFOUQsTUFBYSxXQUFZLFNBQVEseUNBQWtCO0lBQ2pELFlBQVksR0FBd0I7UUFDbEMsS0FBSyxDQUFDLEdBQUcsRUFBRSxhQUFhLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBRUQsZUFBZTtRQUNiLElBQUksQ0FBQyxHQUFHO2FBQ0wsS0FBSyxDQUFDLFFBQVEsQ0FBQzthQUNmLEdBQUcsQ0FBQyx3QkFBYSxDQUFDLGNBQWMsRUFBRSwwQkFBZSxDQUFDLFNBQVMsQ0FBQzthQUM1RCxJQUFJLENBQ0gsSUFBQSx3QkFBSSxFQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUN2QixJQUFBLHdCQUFJLEVBQUMsVUFBVSxDQUFDO2FBQ2IsUUFBUSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDO2FBQ3BCLFdBQVcsQ0FBQyx1Q0FBdUMsQ0FBQyxFQUN2RCxvQ0FBd0IsQ0FBQyxzQkFBc0IsRUFDL0MsMEJBQWUsQ0FBQyw0QkFBNEIsRUFDNUMsMEJBQWUsQ0FBQyxVQUFVLENBQzNCLENBQUM7UUFFSixJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsMEJBQWUsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUN4RCxJQUFJLENBQUMsR0FBRzthQUNMLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQzthQUN2QixHQUFHLENBQUMsMEJBQWUsQ0FBQyxrQkFBa0IsRUFBRSx3QkFBYSxDQUFDLGNBQWMsQ0FBQzthQUNyRSxHQUFHLENBQUMsMEJBQWUsQ0FBQyxXQUFXLENBQUM7YUFDaEMsTUFBTSxDQUFDLDBCQUFlLENBQUMsVUFBVSxDQUFDLENBQUM7UUFFdEMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLEVBQUU7WUFDN0IsSUFBQSx3QkFBSSxFQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRTtZQUN2QixJQUFBLHdCQUFJLEVBQUMsVUFBVSxDQUFDO2lCQUNiLFFBQVEsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQztpQkFDcEIsV0FBVyxDQUFDLHVDQUF1QyxDQUFDO1lBQ3ZELElBQUEsd0JBQUksRUFBQyxXQUFXLENBQUMsQ0FBQyxRQUFRLEVBQUU7WUFDNUIsSUFBQSx3QkFBSSxFQUFDLFVBQVUsQ0FBQyxDQUFDLFFBQVEsRUFBRTtZQUMzQixJQUFBLHdCQUFJLEVBQUMsaUJBQWlCLENBQUMsQ0FBQyxLQUFLLEVBQUU7WUFDL0Isb0NBQXdCLENBQUMsc0JBQXNCO1lBQy9DLDBCQUFlLENBQUMsaUNBQWlDO1lBQ2pELDBCQUFlLENBQUMsR0FBRztTQUNwQixDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsRUFBRTtZQUMvQixJQUFBLHdCQUFJLEVBQUMsT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxFQUFFO1lBQ2xDLElBQUEsd0JBQUksRUFBQyxVQUFVLENBQUM7aUJBQ2IsUUFBUSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDO2lCQUNwQixXQUFXLENBQUMsZ0NBQWdDLENBQUM7aUJBQzdDLFFBQVEsRUFBRTtZQUNiLElBQUEsd0JBQUksRUFBQyxXQUFXLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxRQUFRLEVBQUU7WUFDdkMsSUFBQSx3QkFBSSxFQUFDLFVBQVUsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLFFBQVEsRUFBRTtZQUN0QyxJQUFBLHdCQUFJLEVBQUMsaUJBQWlCLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxRQUFRLEVBQUU7WUFDMUMsb0NBQXdCLENBQUMsc0JBQXNCO1lBQy9DLDBCQUFlLENBQUMsa0JBQWtCO1lBQ2xDLDBCQUFlLENBQUMsS0FBSztTQUN0QixDQUFDLENBQUM7UUFFSCxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUM7SUFDbEIsQ0FBQztDQUNGO0FBdkRELGtDQXVEQyJ9
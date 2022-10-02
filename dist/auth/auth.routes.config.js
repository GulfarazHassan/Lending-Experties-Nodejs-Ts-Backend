"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRoutes = void 0;
const common_routes_config_1 = require("../common/common.routes.config");
const auth_controller_1 = __importDefault(require("./controllers/auth.controller"));
const users_controller_1 = __importDefault(require("../users/controllers/users.controller"));
const auth_middleware_1 = __importDefault(require("./middleware/auth.middleware"));
const body_validation_middleware_1 = __importDefault(require("../common/middleware/body.validation.middleware"));
const jwt_middleware_1 = __importDefault(require("./middleware/jwt.middleware"));
const express_validator_1 = require("express-validator");
class AuthRoutes extends common_routes_config_1.CommonRoutesConfig {
    constructor(app) {
        super(app, 'AuthRoutes');
    }
    configureRoutes() {
        this.app.post(`/auth/login`, [
            (0, express_validator_1.body)('email').isEmail(),
            (0, express_validator_1.body)('password').isString(),
            body_validation_middleware_1.default.verifyBodyFieldsErrors,
            auth_middleware_1.default.verifyUserPassword,
            auth_controller_1.default.createJWT,
        ]);
        this.app.post(`/auth/signup`, [
            (0, express_validator_1.body)('email').isEmail(),
            (0, express_validator_1.body)('password').isString(),
            (0, express_validator_1.body)('user_type').isString(),
            body_validation_middleware_1.default.verifyBodyFieldsErrors,
            auth_middleware_1.default.validateSameEmailDoesntExist,
            auth_controller_1.default.signupUser,
        ]);
        this.app.post(`/auth/reset_Password`, [
            (0, express_validator_1.body)('current_password').isString(),
            (0, express_validator_1.body)('new_password').isString(),
            body_validation_middleware_1.default.verifyBodyFieldsErrors,
            jwt_middleware_1.default.validJWTNeeded,
            auth_controller_1.default.resetPassword,
        ]);
        this.app.post(`/auth/common/send_otp_code`, [
            (0, express_validator_1.body)('phone_number').isString(),
            body_validation_middleware_1.default.verifyBodyFieldsErrors,
            jwt_middleware_1.default.validJWTNeeded,
            users_controller_1.default.sendOtpCode,
        ]);
        this.app.post(`/auth/common/verify_otp_code`, [
            (0, express_validator_1.body)('otp_code').isNumeric(),
            body_validation_middleware_1.default.verifyBodyFieldsErrors,
            jwt_middleware_1.default.validJWTNeeded,
            users_controller_1.default.verifyOtp,
        ]);
        return this.app;
    }
}
exports.AuthRoutes = AuthRoutes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5yb3V0ZXMuY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2F1dGgvYXV0aC5yb3V0ZXMuY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLHlFQUFvRTtBQUNwRSxvRkFBMkQ7QUFDM0QsNkZBQW1FO0FBQ25FLG1GQUEwRDtBQUUxRCxpSEFBdUY7QUFDdkYsaUZBQXdEO0FBQ3hELHlEQUF5QztBQUV6QyxNQUFhLFVBQVcsU0FBUSx5Q0FBa0I7SUFDaEQsWUFBWSxHQUF3QjtRQUNsQyxLQUFLLENBQUMsR0FBRyxFQUFFLFlBQVksQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUFFRCxlQUFlO1FBQ2IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQzNCLElBQUEsd0JBQUksRUFBQyxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUU7WUFDdkIsSUFBQSx3QkFBSSxFQUFDLFVBQVUsQ0FBQyxDQUFDLFFBQVEsRUFBRTtZQUMzQixvQ0FBd0IsQ0FBQyxzQkFBc0I7WUFDL0MseUJBQWMsQ0FBQyxrQkFBa0I7WUFDakMseUJBQWMsQ0FBQyxTQUFTO1NBQ3pCLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRTtZQUM1QixJQUFBLHdCQUFJLEVBQUMsT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFO1lBQ3ZCLElBQUEsd0JBQUksRUFBQyxVQUFVLENBQUMsQ0FBQyxRQUFRLEVBQUU7WUFDM0IsSUFBQSx3QkFBSSxFQUFDLFdBQVcsQ0FBQyxDQUFDLFFBQVEsRUFBRTtZQUM1QixvQ0FBd0IsQ0FBQyxzQkFBc0I7WUFDL0MseUJBQWMsQ0FBQyw0QkFBNEI7WUFDM0MseUJBQWMsQ0FBQyxVQUFVO1NBQzFCLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLHNCQUFzQixFQUFFO1lBQ3BDLElBQUEsd0JBQUksRUFBQyxrQkFBa0IsQ0FBQyxDQUFDLFFBQVEsRUFBRTtZQUNuQyxJQUFBLHdCQUFJLEVBQUMsY0FBYyxDQUFDLENBQUMsUUFBUSxFQUFFO1lBQy9CLG9DQUF3QixDQUFDLHNCQUFzQjtZQUMvQyx3QkFBYSxDQUFDLGNBQWM7WUFDNUIseUJBQWMsQ0FBQyxhQUFhO1NBQzdCLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLDRCQUE0QixFQUFFO1lBQzFDLElBQUEsd0JBQUksRUFBQyxjQUFjLENBQUMsQ0FBQyxRQUFRLEVBQUU7WUFDL0Isb0NBQXdCLENBQUMsc0JBQXNCO1lBQy9DLHdCQUFhLENBQUMsY0FBYztZQUM1QiwwQkFBYyxDQUFDLFdBQVc7U0FDM0IsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsOEJBQThCLEVBQUU7WUFDNUMsSUFBQSx3QkFBSSxFQUFDLFVBQVUsQ0FBQyxDQUFDLFNBQVMsRUFBRTtZQUM1QixvQ0FBd0IsQ0FBQyxzQkFBc0I7WUFDL0Msd0JBQWEsQ0FBQyxjQUFjO1lBQzVCLDBCQUFjLENBQUMsU0FBUztTQUN6QixDQUFDLENBQUM7UUFFSCxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUM7SUFDbEIsQ0FBQztDQUNGO0FBL0NELGdDQStDQyJ9
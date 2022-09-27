"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRoutes = void 0;
const common_routes_config_1 = require("../common/common.routes.config");
const auth_controller_1 = __importDefault(require("./controllers/auth.controller"));
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
        this.app.post(`/auth/refresh-token`, [
            jwt_middleware_1.default.validJWTNeeded,
            jwt_middleware_1.default.verifyRefreshBodyField,
            jwt_middleware_1.default.validRefreshNeeded,
            auth_controller_1.default.createJWT,
        ]);
        return this.app;
    }
}
exports.AuthRoutes = AuthRoutes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5yb3V0ZXMuY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2F1dGgvYXV0aC5yb3V0ZXMuY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLHlFQUFvRTtBQUNwRSxvRkFBMkQ7QUFDM0QsbUZBQTBEO0FBRTFELGlIQUF1RjtBQUN2RixpRkFBd0Q7QUFDeEQseURBQXlDO0FBRXpDLE1BQWEsVUFBVyxTQUFRLHlDQUFrQjtJQUNoRCxZQUFZLEdBQXdCO1FBQ2xDLEtBQUssQ0FBQyxHQUFHLEVBQUUsWUFBWSxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUVELGVBQWU7UUFDYixJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDM0IsSUFBQSx3QkFBSSxFQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRTtZQUN2QixJQUFBLHdCQUFJLEVBQUMsVUFBVSxDQUFDLENBQUMsUUFBUSxFQUFFO1lBQzNCLG9DQUF3QixDQUFDLHNCQUFzQjtZQUMvQyx5QkFBYyxDQUFDLGtCQUFrQjtZQUNqQyx5QkFBYyxDQUFDLFNBQVM7U0FDekIsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFO1lBQzVCLElBQUEsd0JBQUksRUFBQyxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUU7WUFDdkIsSUFBQSx3QkFBSSxFQUFDLFVBQVUsQ0FBQyxDQUFDLFFBQVEsRUFBRTtZQUMzQixJQUFBLHdCQUFJLEVBQUMsV0FBVyxDQUFDLENBQUMsUUFBUSxFQUFFO1lBQzVCLG9DQUF3QixDQUFDLHNCQUFzQjtZQUMvQyx5QkFBYyxDQUFDLDRCQUE0QjtZQUMzQyx5QkFBYyxDQUFDLFVBQVU7U0FDMUIsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMscUJBQXFCLEVBQUU7WUFDbkMsd0JBQWEsQ0FBQyxjQUFjO1lBQzVCLHdCQUFhLENBQUMsc0JBQXNCO1lBQ3BDLHdCQUFhLENBQUMsa0JBQWtCO1lBQ2hDLHlCQUFjLENBQUMsU0FBUztTQUN6QixDQUFDLENBQUM7UUFFSCxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUM7SUFDbEIsQ0FBQztDQUNGO0FBaENELGdDQWdDQyJ9
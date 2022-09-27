"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FinancialGuideProfilesRoutes = void 0;
const common_routes_config_1 = require("../common/common.routes.config");
const financialGuideProfiles_controller_1 = __importDefault(require("./controllers/financialGuideProfiles.controller"));
const jwt_middleware_1 = __importDefault(require("../Auth/middleware/jwt.middleware"));
class FinancialGuideProfilesRoutes extends common_routes_config_1.CommonRoutesConfig {
    constructor(app) {
        super(app, 'FinancialGuideProfilesRoutes');
    }
    configureRoutes() {
        this.app
            .route(`/financial_guide_profile`)
            .patch(jwt_middleware_1.default.validJWTNeeded, financialGuideProfiles_controller_1.default.patch);
        this.app
            .route(`/financial_guide_profile/my_profile`)
            .get(jwt_middleware_1.default.validJWTNeeded, financialGuideProfiles_controller_1.default.getMyProfileFromToken);
        return this.app;
    }
}
exports.FinancialGuideProfilesRoutes = FinancialGuideProfilesRoutes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmluYW5jaWFsR3VpZGVQcm9maWxlcy5yb3V0ZXMuY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vRmluYW5jaWFsR3VpZGVQcm9maWxlcy9maW5hbmNpYWxHdWlkZVByb2ZpbGVzLnJvdXRlcy5jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0EseUVBQW9FO0FBQ3BFLHdIQUFvRjtBQUNwRix1RkFBOEQ7QUFFOUQsTUFBYSw0QkFBNkIsU0FBUSx5Q0FBa0I7SUFDbEUsWUFBWSxHQUF3QjtRQUNsQyxLQUFLLENBQUMsR0FBRyxFQUFFLDhCQUE4QixDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVELGVBQWU7UUFDYixJQUFJLENBQUMsR0FBRzthQUNMLEtBQUssQ0FBQywwQkFBMEIsQ0FBQzthQUNqQyxLQUFLLENBQUMsd0JBQWEsQ0FBQyxjQUFjLEVBQUUsMkNBQXFCLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFcEUsSUFBSSxDQUFDLEdBQUc7YUFDTCxLQUFLLENBQUMscUNBQXFDLENBQUM7YUFDNUMsR0FBRyxDQUNGLHdCQUFhLENBQUMsY0FBYyxFQUM1QiwyQ0FBcUIsQ0FBQyxxQkFBcUIsQ0FDNUMsQ0FBQztRQUVKLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQztJQUNsQixDQUFDO0NBQ0Y7QUFuQkQsb0VBbUJDIn0=
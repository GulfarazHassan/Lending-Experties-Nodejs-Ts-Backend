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
//# sourceMappingURL=financialGuideProfiles.routes.config.js.map
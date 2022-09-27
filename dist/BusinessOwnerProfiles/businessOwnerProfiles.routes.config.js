"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BusinessOwnerProfilesRoutes = void 0;
const common_routes_config_1 = require("../common/common.routes.config");
const businessOwnerProfiles_controller_1 = __importDefault(require("./controllers/businessOwnerProfiles.controller"));
const jwt_middleware_1 = __importDefault(require("../Auth/middleware/jwt.middleware"));
class BusinessOwnerProfilesRoutes extends common_routes_config_1.CommonRoutesConfig {
    constructor(app) {
        super(app, 'BusinessOwnerProfilesRoutes');
    }
    configureRoutes() {
        this.app
            .route(`/business_owner_profile`)
            .patch(jwt_middleware_1.default.validJWTNeeded, businessOwnerProfiles_controller_1.default.patch);
        this.app
            .route(`/business_owner_profile/my_profile`)
            .get(jwt_middleware_1.default.validJWTNeeded, businessOwnerProfiles_controller_1.default.getMyProfileFromToken);
        return this.app;
    }
}
exports.BusinessOwnerProfilesRoutes = BusinessOwnerProfilesRoutes;
//# sourceMappingURL=businessOwnerProfiles.routes.config.js.map
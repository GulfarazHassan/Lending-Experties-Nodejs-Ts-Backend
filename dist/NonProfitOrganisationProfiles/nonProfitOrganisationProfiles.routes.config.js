"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NonProfitOrganisationProfilesRoutes = void 0;
const common_routes_config_1 = require("../common/common.routes.config");
const nonProfitOrganisationProfiles_controller_1 = __importDefault(require("./controllers/nonProfitOrganisationProfiles.controller"));
const jwt_middleware_1 = __importDefault(require("../Auth/middleware/jwt.middleware"));
class NonProfitOrganisationProfilesRoutes extends common_routes_config_1.CommonRoutesConfig {
    constructor(app) {
        super(app, 'NonProfitOrganisationProfilesRoutes');
    }
    configureRoutes() {
        this.app
            .route(`/non_profit_organisation_profile`)
            .patch(jwt_middleware_1.default.validJWTNeeded, nonProfitOrganisationProfiles_controller_1.default.patch);
        this.app
            .route(`/non_profit_organisation_profile/my_profile`)
            .get(jwt_middleware_1.default.validJWTNeeded, nonProfitOrganisationProfiles_controller_1.default.getMyProfileFromToken);
        return this.app;
    }
}
exports.NonProfitOrganisationProfilesRoutes = NonProfitOrganisationProfilesRoutes;
//# sourceMappingURL=nonProfitOrganisationProfiles.routes.config.js.map
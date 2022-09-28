"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NonProfitOrganisationProfilesRoutes = void 0;
const common_routes_config_1 = require("../common/common.routes.config");
const nonProfitOrganisationProfiles_controller_1 = __importDefault(require("./controllers/nonProfitOrganisationProfiles.controller"));
const jwt_middleware_1 = __importDefault(require("../auth/middleware/jwt.middleware"));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm9uUHJvZml0T3JnYW5pc2F0aW9uUHJvZmlsZXMucm91dGVzLmNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Ob25Qcm9maXRPcmdhbmlzYXRpb25Qcm9maWxlcy9ub25Qcm9maXRPcmdhbmlzYXRpb25Qcm9maWxlcy5yb3V0ZXMuY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLHlFQUFvRTtBQUNwRSxzSUFBbUc7QUFDbkcsdUZBQThEO0FBRTlELE1BQWEsbUNBQW9DLFNBQVEseUNBQWtCO0lBQ3pFLFlBQVksR0FBd0I7UUFDbEMsS0FBSyxDQUFDLEdBQUcsRUFBRSxxQ0FBcUMsQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFFRCxlQUFlO1FBQ2IsSUFBSSxDQUFDLEdBQUc7YUFDTCxLQUFLLENBQUMsa0NBQWtDLENBQUM7YUFDekMsS0FBSyxDQUFDLHdCQUFhLENBQUMsY0FBYyxFQUFFLGtEQUE2QixDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRTVFLElBQUksQ0FBQyxHQUFHO2FBQ0wsS0FBSyxDQUFDLDZDQUE2QyxDQUFDO2FBQ3BELEdBQUcsQ0FDRix3QkFBYSxDQUFDLGNBQWMsRUFDNUIsa0RBQTZCLENBQUMscUJBQXFCLENBQ3BELENBQUM7UUFFSixPQUFPLElBQUksQ0FBQyxHQUFHLENBQUM7SUFDbEIsQ0FBQztDQUNGO0FBbkJELGtGQW1CQyJ9
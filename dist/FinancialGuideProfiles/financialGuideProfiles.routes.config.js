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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmluYW5jaWFsR3VpZGVQcm9maWxlcy5yb3V0ZXMuY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL0ZpbmFuY2lhbEd1aWRlUHJvZmlsZXMvZmluYW5jaWFsR3VpZGVQcm9maWxlcy5yb3V0ZXMuY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLHlFQUFvRTtBQUNwRSx3SEFBb0Y7QUFDcEYsdUZBQThEO0FBRTlELE1BQWEsNEJBQTZCLFNBQVEseUNBQWtCO0lBQ2xFLFlBQVksR0FBd0I7UUFDbEMsS0FBSyxDQUFDLEdBQUcsRUFBRSw4QkFBOEIsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFRCxlQUFlO1FBQ2IsSUFBSSxDQUFDLEdBQUc7YUFDTCxLQUFLLENBQUMsMEJBQTBCLENBQUM7YUFDakMsS0FBSyxDQUFDLHdCQUFhLENBQUMsY0FBYyxFQUFFLDJDQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRXBFLElBQUksQ0FBQyxHQUFHO2FBQ0wsS0FBSyxDQUFDLHFDQUFxQyxDQUFDO2FBQzVDLEdBQUcsQ0FDRix3QkFBYSxDQUFDLGNBQWMsRUFDNUIsMkNBQXFCLENBQUMscUJBQXFCLENBQzVDLENBQUM7UUFFSixPQUFPLElBQUksQ0FBQyxHQUFHLENBQUM7SUFDbEIsQ0FBQztDQUNGO0FBbkJELG9FQW1CQyJ9
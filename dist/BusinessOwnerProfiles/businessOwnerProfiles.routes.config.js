"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BusinessOwnerProfilesRoutes = void 0;
const common_routes_config_1 = require("../common/common.routes.config");
const businessOwnerProfiles_controller_1 = __importDefault(require("./controllers/businessOwnerProfiles.controller"));
const jwt_middleware_1 = __importDefault(require("../auth/middleware/jwt.middleware"));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVzaW5lc3NPd25lclByb2ZpbGVzLnJvdXRlcy5jb25maWcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvQnVzaW5lc3NPd25lclByb2ZpbGVzL2J1c2luZXNzT3duZXJQcm9maWxlcy5yb3V0ZXMuY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLHlFQUFvRTtBQUNwRSxzSEFBbUY7QUFDbkYsdUZBQThEO0FBRTlELE1BQWEsMkJBQTRCLFNBQVEseUNBQWtCO0lBQ2pFLFlBQVksR0FBd0I7UUFDbEMsS0FBSyxDQUFDLEdBQUcsRUFBRSw2QkFBNkIsQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFFRCxlQUFlO1FBQ2IsSUFBSSxDQUFDLEdBQUc7YUFDTCxLQUFLLENBQUMseUJBQXlCLENBQUM7YUFDaEMsS0FBSyxDQUFDLHdCQUFhLENBQUMsY0FBYyxFQUFFLDBDQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRXBFLElBQUksQ0FBQyxHQUFHO2FBQ0wsS0FBSyxDQUFDLG9DQUFvQyxDQUFDO2FBQzNDLEdBQUcsQ0FDRix3QkFBYSxDQUFDLGNBQWMsRUFDNUIsMENBQXFCLENBQUMscUJBQXFCLENBQzVDLENBQUM7UUFFSixPQUFPLElBQUksQ0FBQyxHQUFHLENBQUM7SUFDbEIsQ0FBQztDQUNGO0FBbkJELGtFQW1CQyJ9
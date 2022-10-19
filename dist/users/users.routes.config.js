"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersRoutes = void 0;
const common_routes_config_1 = require("../common/common.routes.config");
const users_controller_1 = __importDefault(require("./controllers/users.controller"));
const jwt_middleware_1 = __importDefault(require("../auth/middleware/jwt.middleware"));
class UsersRoutes extends common_routes_config_1.CommonRoutesConfig {
    constructor(app) {
        super(app, 'UsersRoutes');
    }
    configureRoutes() {
        this.app
            .route(`/business_owner_profile`)
            .patch(jwt_middleware_1.default.validJWTNeeded, users_controller_1.default.patchBusinessOwner);
        this.app
            .route(`/business_owner_profile/my_profile`)
            .get(jwt_middleware_1.default.validJWTNeeded, users_controller_1.default.getUserById);
        this.app
            .route(`/business_owner_profile/send_otp_code`)
            .post(jwt_middleware_1.default.validJWTNeeded, users_controller_1.default.sendOtpCode);
        this.app
            .route(`/community_member_profile`)
            .patch(jwt_middleware_1.default.validJWTNeeded, users_controller_1.default.patchCommunityMember);
        this.app
            .route(`/community_member_profile/my_profile`)
            .get(jwt_middleware_1.default.validJWTNeeded, users_controller_1.default.getUserById);
        this.app
            .route(`/non_profit_organisation_profile`)
            .patch(jwt_middleware_1.default.validJWTNeeded, users_controller_1.default.patchNonProfitOrganization);
        this.app
            .route(`/non_profit_organisation_profile/my_profile`)
            .get(jwt_middleware_1.default.validJWTNeeded, users_controller_1.default.getUserById);
        this.app
            .route(`/financial_guide_profile`)
            .patch(jwt_middleware_1.default.validJWTNeeded, users_controller_1.default.patchFinancialGuide);
        this.app
            .route(`/financial_guide_profile/my_profile`)
            .get(jwt_middleware_1.default.validJWTNeeded, users_controller_1.default.getUserById);
        this.app
            .route(`/user/info`)
            .get(jwt_middleware_1.default.validJWTNeeded, users_controller_1.default.getUserById);
        return this.app;
    }
}
exports.UsersRoutes = UsersRoutes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMucm91dGVzLmNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91c2Vycy91c2Vycy5yb3V0ZXMuY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLHlFQUFvRTtBQUNwRSxzRkFBNkQ7QUFLN0QsdUZBQThEO0FBRTlELE1BQWEsV0FBWSxTQUFRLHlDQUFrQjtJQUNqRCxZQUFZLEdBQXdCO1FBQ2xDLEtBQUssQ0FBQyxHQUFHLEVBQUUsYUFBYSxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUVELGVBQWU7UUFDYixJQUFJLENBQUMsR0FBRzthQUNMLEtBQUssQ0FBQyx5QkFBeUIsQ0FBQzthQUNoQyxLQUFLLENBQUMsd0JBQWEsQ0FBQyxjQUFjLEVBQUUsMEJBQWUsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBRTNFLElBQUksQ0FBQyxHQUFHO2FBQ0wsS0FBSyxDQUFDLG9DQUFvQyxDQUFDO2FBQzNDLEdBQUcsQ0FBQyx3QkFBYSxDQUFDLGNBQWMsRUFBRSwwQkFBZSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRWxFLElBQUksQ0FBQyxHQUFHO2FBQ0wsS0FBSyxDQUFDLHVDQUF1QyxDQUFDO2FBQzlDLElBQUksQ0FBQyx3QkFBYSxDQUFDLGNBQWMsRUFBRSwwQkFBZSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRW5FLElBQUksQ0FBQyxHQUFHO2FBQ0wsS0FBSyxDQUFDLDJCQUEyQixDQUFDO2FBQ2xDLEtBQUssQ0FDSix3QkFBYSxDQUFDLGNBQWMsRUFDNUIsMEJBQWUsQ0FBQyxvQkFBb0IsQ0FDckMsQ0FBQztRQUVKLElBQUksQ0FBQyxHQUFHO2FBQ0wsS0FBSyxDQUFDLHNDQUFzQyxDQUFDO2FBQzdDLEdBQUcsQ0FBQyx3QkFBYSxDQUFDLGNBQWMsRUFBRSwwQkFBZSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRWxFLElBQUksQ0FBQyxHQUFHO2FBQ0wsS0FBSyxDQUFDLGtDQUFrQyxDQUFDO2FBQ3pDLEtBQUssQ0FDSix3QkFBYSxDQUFDLGNBQWMsRUFDNUIsMEJBQWUsQ0FBQywwQkFBMEIsQ0FDM0MsQ0FBQztRQUVKLElBQUksQ0FBQyxHQUFHO2FBQ0wsS0FBSyxDQUFDLDZDQUE2QyxDQUFDO2FBQ3BELEdBQUcsQ0FBQyx3QkFBYSxDQUFDLGNBQWMsRUFBRSwwQkFBZSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRWxFLElBQUksQ0FBQyxHQUFHO2FBQ0wsS0FBSyxDQUFDLDBCQUEwQixDQUFDO2FBQ2pDLEtBQUssQ0FBQyx3QkFBYSxDQUFDLGNBQWMsRUFBRSwwQkFBZSxDQUFDLG1CQUFtQixDQUFDLENBQUM7UUFFNUUsSUFBSSxDQUFDLEdBQUc7YUFDTCxLQUFLLENBQUMscUNBQXFDLENBQUM7YUFDNUMsR0FBRyxDQUFDLHdCQUFhLENBQUMsY0FBYyxFQUFFLDBCQUFlLENBQUMsV0FBVyxDQUFDLENBQUM7UUFFbEUsSUFBSSxDQUFDLEdBQUc7YUFDTCxLQUFLLENBQUMsWUFBWSxDQUFDO2FBQ25CLEdBQUcsQ0FBQyx3QkFBYSxDQUFDLGNBQWMsRUFBRSwwQkFBZSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRWxFLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQztJQUNsQixDQUFDO0NBQ0Y7QUF0REQsa0NBc0RDIn0=
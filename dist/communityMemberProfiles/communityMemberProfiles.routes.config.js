"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommunityMemberProfilesRoutes = void 0;
const common_routes_config_1 = require("../common/common.routes.config");
const communityMemberProfiles_controller_1 = __importDefault(require("./controllers/communityMemberProfiles.controller"));
const jwt_middleware_1 = __importDefault(require("../Auth/middleware/jwt.middleware"));
class CommunityMemberProfilesRoutes extends common_routes_config_1.CommonRoutesConfig {
    constructor(app) {
        super(app, 'CommunityMemberProfilesRoutes');
    }
    configureRoutes() {
        this.app
            .route(`/community_member_profile`)
            .patch(jwt_middleware_1.default.validJWTNeeded, communityMemberProfiles_controller_1.default.patch);
        this.app
            .route(`/community_member_profile/my_profile`)
            .get(jwt_middleware_1.default.validJWTNeeded, communityMemberProfiles_controller_1.default.getMyProfileFromToken);
        return this.app;
    }
}
exports.CommunityMemberProfilesRoutes = CommunityMemberProfilesRoutes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbXVuaXR5TWVtYmVyUHJvZmlsZXMucm91dGVzLmNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Db21tdW5pdHlNZW1iZXJQcm9maWxlcy9jb21tdW5pdHlNZW1iZXJQcm9maWxlcy5yb3V0ZXMuY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLHlFQUFvRTtBQUNwRSwwSEFBaUc7QUFDakcsdUZBQThEO0FBRTlELE1BQWEsNkJBQThCLFNBQVEseUNBQWtCO0lBQ25FLFlBQVksR0FBd0I7UUFDbEMsS0FBSyxDQUFDLEdBQUcsRUFBRSwrQkFBK0IsQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFFRCxlQUFlO1FBQ2IsSUFBSSxDQUFDLEdBQUc7YUFDTCxLQUFLLENBQUMsMkJBQTJCLENBQUM7YUFDbEMsS0FBSyxDQUNKLHdCQUFhLENBQUMsY0FBYyxFQUM1Qiw0Q0FBaUMsQ0FBQyxLQUFLLENBQ3hDLENBQUM7UUFFSixJQUFJLENBQUMsR0FBRzthQUNMLEtBQUssQ0FBQyxzQ0FBc0MsQ0FBQzthQUM3QyxHQUFHLENBQ0Ysd0JBQWEsQ0FBQyxjQUFjLEVBQzVCLDRDQUFpQyxDQUFDLHFCQUFxQixDQUN4RCxDQUFDO1FBRUosT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDO0lBQ2xCLENBQUM7Q0FDRjtBQXRCRCxzRUFzQkMifQ==
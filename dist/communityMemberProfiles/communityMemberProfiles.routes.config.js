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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbXVuaXR5TWVtYmVyUHJvZmlsZXMucm91dGVzLmNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2NvbW11bml0eU1lbWJlclByb2ZpbGVzL2NvbW11bml0eU1lbWJlclByb2ZpbGVzLnJvdXRlcy5jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0EseUVBQW9FO0FBQ3BFLDBIQUFpRztBQUNqRyx1RkFBOEQ7QUFFOUQsTUFBYSw2QkFBOEIsU0FBUSx5Q0FBa0I7SUFDbkUsWUFBWSxHQUF3QjtRQUNsQyxLQUFLLENBQUMsR0FBRyxFQUFFLCtCQUErQixDQUFDLENBQUM7SUFDOUMsQ0FBQztJQUVELGVBQWU7UUFDYixJQUFJLENBQUMsR0FBRzthQUNMLEtBQUssQ0FBQywyQkFBMkIsQ0FBQzthQUNsQyxLQUFLLENBQ0osd0JBQWEsQ0FBQyxjQUFjLEVBQzVCLDRDQUFpQyxDQUFDLEtBQUssQ0FDeEMsQ0FBQztRQUVKLElBQUksQ0FBQyxHQUFHO2FBQ0wsS0FBSyxDQUFDLHNDQUFzQyxDQUFDO2FBQzdDLEdBQUcsQ0FDRix3QkFBYSxDQUFDLGNBQWMsRUFDNUIsNENBQWlDLENBQUMscUJBQXFCLENBQ3hELENBQUM7UUFFSixPQUFPLElBQUksQ0FBQyxHQUFHLENBQUM7SUFDbEIsQ0FBQztDQUNGO0FBdEJELHNFQXNCQyJ9
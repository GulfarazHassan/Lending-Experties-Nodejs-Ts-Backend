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
//# sourceMappingURL=communityMemberProfiles.routes.config.js.map
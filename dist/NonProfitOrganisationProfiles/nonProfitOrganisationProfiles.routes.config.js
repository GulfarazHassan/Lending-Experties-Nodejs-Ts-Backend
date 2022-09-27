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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm9uUHJvZml0T3JnYW5pc2F0aW9uUHJvZmlsZXMucm91dGVzLmNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL05vblByb2ZpdE9yZ2FuaXNhdGlvblByb2ZpbGVzL25vblByb2ZpdE9yZ2FuaXNhdGlvblByb2ZpbGVzLnJvdXRlcy5jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0EseUVBQW9FO0FBQ3BFLHNJQUFtRztBQUNuRyx1RkFBOEQ7QUFFOUQsTUFBYSxtQ0FBb0MsU0FBUSx5Q0FBa0I7SUFDekUsWUFBWSxHQUF3QjtRQUNsQyxLQUFLLENBQUMsR0FBRyxFQUFFLHFDQUFxQyxDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUVELGVBQWU7UUFDYixJQUFJLENBQUMsR0FBRzthQUNMLEtBQUssQ0FBQyxrQ0FBa0MsQ0FBQzthQUN6QyxLQUFLLENBQUMsd0JBQWEsQ0FBQyxjQUFjLEVBQUUsa0RBQTZCLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFNUUsSUFBSSxDQUFDLEdBQUc7YUFDTCxLQUFLLENBQUMsNkNBQTZDLENBQUM7YUFDcEQsR0FBRyxDQUNGLHdCQUFhLENBQUMsY0FBYyxFQUM1QixrREFBNkIsQ0FBQyxxQkFBcUIsQ0FDcEQsQ0FBQztRQUVKLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQztJQUNsQixDQUFDO0NBQ0Y7QUFuQkQsa0ZBbUJDIn0=